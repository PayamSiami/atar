"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

// No-op subscribe: speechSynthesis support never changes at runtime,
// so React never needs to be notified of updates.
const emptySubscribe = () => () => {};

const getClientSnapshot = () =>
  typeof window !== "undefined" && "speechSynthesis" in window;

const getServerSnapshot = () => false;

/**
 * Thin wrapper around the Web Speech API with a Persian-first voice.
 * Returns a `speaking` flag (true while an utterance is playing) which the
 * TalkingCharacter pairs with its mouth animation. Falls back to `false`
 * (and `supported: false`) on browsers/servers without speechSynthesis.
 */
export function useSpeechSynthesis() {
  // SSR-safe feature detection: the server snapshot (`false`) is used on
  // the server AND on the first client render (hydration), then React
  // swaps to the client snapshot. No hydration mismatch, no setState-in-effect.
  const supported = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const [speaking, setSpeaking] = useState(false);
  const hasSpokenRef = useRef(false);

  // Persian voices often load after page load -> warm the list once.
  useEffect(() => {
    if (!supported || hasSpokenRef.current) return;
    const warmVoices = () => {
      window.speechSynthesis.getVoices();
      hasSpokenRef.current = true;
    };
    warmVoices();
    const t = window.setTimeout(warmVoices, 500);
    return () => window.clearTimeout(t);
  }, [supported]);

  const cancel = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, [supported]);

  const speak = useCallback(
    (
      text: string,
      opts?: {
        rate?: number;
        pitch?: number;
        onStart?: () => void;
        onEnd?: () => void;
      },
    ) => {
      if (!supported) {
        opts?.onEnd?.();
        return false;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "fa-IR";
      const voices = window.speechSynthesis.getVoices();
      // Prefer an explicitly Persian voice; fall back to system default.
      utterance.voice =
        voices.find((v) => v.lang.toLowerCase().startsWith("fa")) ?? null;
      utterance.rate = opts?.rate ?? 0.95;
      utterance.pitch = opts?.pitch ?? 1;
      utterance.onstart = () => {
        setSpeaking(true);
        opts?.onStart?.();
      };
      utterance.onend = () => {
        setSpeaking(false);
        opts?.onEnd?.();
      };
      utterance.onerror = () => {
        setSpeaking(false);
        opts?.onEnd?.();
      };
      window.speechSynthesis.speak(utterance);
      return true;
    },
    [supported],
  );

  // Clean up on unmount so an orphaned utterance doesn't keep the
  // character "talking" after the component is gone.
  // Empty deps: only cancel on real unmount, not when `supported` flips.
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { supported, speaking, speak, cancel };
}

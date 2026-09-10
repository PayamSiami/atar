type TalkingCharacterVariant = "barista" | "herbalist";

interface TalkingCharacterProps {
    variant?: TalkingCharacterVariant;
    speaking?: boolean;
    className?: string;
}

/**
 * A lightweight, self-contained "talking human". No external image assets:
 * the whole character is inline SVG, and "speech" is driven purely by CSS —
 * the mouth opens/closes via keyframes while the `is-speaking` class is set,
 * the eyes blink and the body gently sways. Pair with useSpeechSynthesis for
 * actual Persian narration; the mouth keeps animating for the estimated
 * duration even when TTS is unavailable.
 */
export function TalkingCharacter({
    variant = "barista",
    speaking = false,
    className,
}: TalkingCharacterProps) {
    const isHerbalist = variant === "herbalist";
    const robe = isHerbalist ? "#2f5d46" : "#e7ddd0";
    const accent = isHerbalist ? "#4c8a63" : "#8a5a33";
    const hair = isHerbalist ? "#251c17" : "#4a3b30";

    return (
        <svg
            viewBox="0 0 220 260"
            role="img"
            aria-label={
                isHerbalist
                    ? "مشاور گیاهی بوعلی در حال صحبت کردن"
                    : "باریستای قهوه در حال صحبت کردن"
            }
            className={`talking-character h-40 w-40 ${
                speaking ? "is-speaking" : ""
            } ${className ?? ""}`}
            style={{ maxWidth: "10rem" }}
        >
            {/* ─── Body (sways with the whole figure) ───── */}
            <g className="char-body">
                <path
                    d="M66 168 C66 140 74 128 110 128 C146 128 154 140 154 168 L150 218 C150 228 138 234 110 234 C82 234 70 228 70 218 Z"
                    fill={robe}
                />
                {isHerbalist ? (
                    <rect x="72" y="178" width="76" height="10" rx="5" fill={accent} />
                ) : (
                    <path d="M82 168 L138 168 L134 232 L86 232 Z" fill={accent} />
                )}

                {isHerbalist ? (
                    <text
                        x="155"
                        y="200"
                        fontSize="24"
                        textAnchor="middle"
                        transform="rotate(24 158 196)"
                    >
                        🌿
                    </text>
                ) : (
                    <g transform="translate(152, 184)">
                        <rect x="0" y="6" width="22" height="16" rx="3" fill="#fdfcf9" stroke={accent} strokeWidth="1.5" />
                        <ellipse cx="11" cy="6" rx="11" ry="4" fill="#fdfcf9" stroke={accent} strokeWidth="1.5" />
                        <path d="M22 9 q6 1 0 7" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" />
                    </g>
                )}
            </g>

            {/* ─── Head ───── */}
            <g className="char-head">
                <rect x="94" y="122" width="24" height="16" rx="8" fill="#f6cfa5" />
                <ellipse cx="52" cy="88" rx="6" ry="10" fill="#f1b48f" />
                <ellipse cx="168" cy="88" rx="6" ry="10" fill="#f1b48f" />
                <ellipse cx="110" cy="82" rx="56" ry="62" fill="#f6cfa5" stroke="#d9a878" strokeWidth="2.5" />
                <path
                    d="M54 82 C54 30 166 30 166 82 C166 64 152 56 140 56 L80 56 C68 56 54 64 54 82 Z"
                    fill={hair}
                />
                {isHerbalist ? (
                    <text x="170" y="74" fontSize="22" textAnchor="middle" transform="rotate(22 168 74)">
                        🌿
                    </text>
                ) : (
                    <path d="M68 54 Q110 24 152 54 L146 60 Q110 34 74 60 Z" fill="#3a2a20" />
                )}

                <path d="M72 60 Q86 50 100 60" stroke={hair} strokeWidth="2.5" strokeLinecap="round" />
                <path d="M120 60 Q134 50 148 60" stroke={hair} strokeWidth="2.5" strokeLinecap="round" />

                <g className="char-eyes">
                    <ellipse cx="86" cy="90" rx="11" ry="13" fill="#fffdf9" stroke="#d9a878" strokeWidth="1.5" />
                    <ellipse cx="134" cy="90" rx="11" ry="13" fill="#fffdf9" stroke="#d9a878" strokeWidth="1.5" />
                    <circle cx="88" cy="91" r="4.5" fill="#2a1d16" />
                    <circle cx="132" cy="91" r="4.5" fill="#2a1d16" />
                    <circle cx="91" cy="89" r="1.6" fill="#fff" />
                    <circle cx="135" cy="89" r="1.6" fill="#fff" />
                </g>

                <circle cx="68" cy="108" r="8" fill="#f3b59c" opacity="0.4" />
                <circle cx="152" cy="108" r="8" fill="#f3b59c" opacity="0.4" />

                <path
                    className="char-mouth"
                    d="M92 114 Q110 128 128 114 Q110 120 92 114 Z"
                    fill="#b0604d"
                />
            </g>
        </svg>
    );
}

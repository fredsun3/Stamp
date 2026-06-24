import { Link } from "react-router-dom";
import type { Stamp } from "@/types";
import { getRarityLabel } from "@/lib/stampData";
import { cn } from "@/lib/utils";
import StampVisual from "./StampVisual";

interface StampCardProps {
  stamp: Stamp;
  size?: "sm" | "md" | "lg";
  showInfo?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const rarityStyles: Record<string, string> = {
  common: "text-ink-soft border-ink-soft/30",
  rare: "text-vermilion border-vermilion/40",
  legendary: "text-gold-dark border-gold/50 bg-gold/5",
};

export default function StampCard({
  stamp,
  size = "md",
  showInfo = true,
  className,
  style,
}: StampCardProps) {
  return (
    <Link
      to={`/stamp/${stamp.id}`}
      className={cn(
        "group block stamp-card",
        className
      )}
      style={style}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <StampVisual stamp={stamp} size={size} />
          {/* 悬浮遮罩 */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-paper text-xs font-serif tracking-widest border border-paper/50 px-3 py-1">
              鉴 赏
            </span>
          </div>
        </div>

        {showInfo && (
          <div className="mt-3 text-center w-full">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="font-mono text-[10px] text-ink-soft tracking-wider">
                {stamp.year}
              </span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-px border font-serif",
                  rarityStyles[stamp.rarity]
                )}
              >
                {getRarityLabel(stamp.rarity)}
              </span>
            </div>
            <h3 className="font-serif text-sm text-ink leading-snug line-clamp-2">
              {stamp.name}
            </h3>
            <p className="text-[11px] text-ink-soft mt-1">{stamp.denomination}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

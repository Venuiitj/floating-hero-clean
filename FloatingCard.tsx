type Props = {
  label: string;
  color: string;
  textColor: string;
  rotate: string;
  icon: React.ReactNode;
};

export default function FloatingCard({
  label,
  color,
  textColor,
  rotate,
  icon,
}: Props) {
  return (
    <div
      className={`
        ${color}
        ${textColor}
        ${rotate}
        px-14 py-7
        rounded-full
        flex items-center gap-4
        shadow-xl
        hover:-translate-y-2
        hover:scale-105
        transition-all duration-300
        cursor-pointer
      `}
    >
      <div className="text-3xl">
        {icon}
      </div>

      <span className="text-[34px] font-medium tracking-tight">
        {label}
      </span>
    </div>
  );
}
export const SubjectTag = ({ subject }: { subject: string }) => {
  const map: Record<string, string> = {
    math: "bg-blue-100 text-blue-800",
    science: "bg-green-100 text-green-800",
    english: "bg-purple-100 text-purple-800",
    history: "bg-yellow-100 text-yellow-800",
  };
  const className = map[subject.toLowerCase()] || "bg-gray-100 text-gray-800";
  return (
    <span className={`min-w-[80px] text-center ${className} flex-shrink-0 rounded px-2 py-0.5 text-xs font-semibold`}>
      {subject}
    </span>
  );
};
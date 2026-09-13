function getBadgeColor(badge: string) {
  if (badge === "Popular") return "bg-blue-50 text-blue-600";
  if (badge === "Versatile") return "bg-green-50 text-green-600";
  if (badge === "Fast") return "bg-orange-50 text-orange-600";
  if (badge === "Standard") return "bg-green-50 text-green-600";
  if (badge === "Top SQL") return "bg-blue-50 text-blue-600";
  if (badge === "Cache") return "bg-red-50 text-red-500";
  if (badge === "Ubiquitous") return "bg-yellow-50 text-yellow-600";
  if (badge === "Essential") return "bg-blue-50 text-blue-600";
  if (badge === "Robust") return "bg-blue-50 text-blue-600";
  if (badge === "Modern") return "bg-cyan-50 text-cyan-600";
  if (badge === "Containers") return "bg-sky-50 text-sky-600";

  return "bg-gray-50 text-gray-600";
}

const Badges = ({ text }: { text: string }) => {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${getBadgeColor(text)}`}>
      {text}
    </span>
  );
};

export default Badges;
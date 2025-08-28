export default function SkillCard({ icon, label }) {
  return (
    <div className="bg-[#03252e] rounded-xl p-4 flex items-center gap-3 hover:bg-gray-800 transition-all duration-300">
      {icon}
      <span className="font-bold text-lg">{label}</span>
    </div>
  );
}

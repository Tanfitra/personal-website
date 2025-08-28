export default function SectionTitle({ title }) {
  return (
    <p className="relative text-white font-bold tracking-widest mb-8 md:mb-12 flex items-center">
      {title}
      <span className="block h-[1px] w-20 md:w-28 bg-white ml-4 md:ml-6"></span>
    </p>
  );
}

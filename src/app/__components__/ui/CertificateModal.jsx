import Image from "next/image";

export default function CertificateModal({ selectedIndex, setSelectedIndex, certificates }) {
  if (selectedIndex === null) return null;

  const closeModal = () => setSelectedIndex(null);
  const prev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : certificates.length - 1));
  const next = () =>
    setSelectedIndex((prev) => (prev < certificates.length - 1 ? prev + 1 : 0));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button
        className="absolute top-6 right-6 text-white text-3xl font-bold"
        onClick={closeModal}
      >
        ✕
      </button>

      <button
        className="absolute left-6 text-white text-4xl"
        onClick={prev}
      >
        ‹
      </button>

      <Image
        src={certificates[selectedIndex].img}
        alt="Zoomed Certificate"
        width={1000}
        height={700}
        className="max-h-[90vh] object-contain rounded-lg"
      />

      <button
        className="absolute right-6 text-white text-4xl"
        onClick={next}
      >
        ›
      </button>
    </div>
  );
}

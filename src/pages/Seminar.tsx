import SpeakerCard from "../components/ui/SpeakerCard";

export default function Seminar() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 🎯 HERO INTRO SECTION (Biar halaman gak langsung kosongan) */}
      <section className="pt-20 pb-12 text-center max-w-3xl mx-auto px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-100">
          Inspirational Session
        </span>
        <h1 className="text-4xl font-black text-slate-950 tracking-tight mt-4 sm:text-5xl">
          Seminar Nasional <span className="text-red-800">InvoFest</span>
        </h1>
        <p className="text-slate-500 mt-4 text-base sm:text-lg leading-relaxed font-medium">
          Belajar langsung dari para pakar industri global dan kembangkan wawasan teknologi digital kamu untuk menghadapi tantangan masa depan.
        </p>
      </section>

      {/* 👥 GRID PEMBICARA SECTION */}
      <section id="speaker" className="pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dekorasi Garis Penunjuk Sesi */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Pembicara Utama
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="transform hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              <SpeakerCard
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
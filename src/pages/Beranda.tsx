import Button from "../components/ui/Button";

export default function Beranda() {
  return (
    <div className="w-full bg-gradient-to-br from-white via-slate-50 to-red-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section
          id="hero"
          className="min-h-[85vh] py-12 md:py-20 flex flex-col-reverse md:flex-row gap-12 justify-between items-center"
        >
          {/* Sisi Kiri: Teks & Aksi */}
          <div className="w-full md:w-3/5 flex flex-col gap-6 text-center md:text-left items-center md:items-start animate-fade-in">
            {/* Wrapper Logo INVOFEST agar ukurannya pas */}
            <div className="max-w-[280px] sm:max-w-[340px] md:max-w-md drop-shadow-sm">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                alt="INVOFEST Logo"
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Teks Deskripsi dengan Typo yang lebih rapi */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              <strong className="text-red-900 font-semibold">Invofest</strong> (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.
            </p>

            {/* Kotak Highlight Tema */}
            <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm border-l-4 border-red-800 p-4 rounded-r-xl shadow-sm">
              <span className="block text-xs font-bold uppercase tracking-wider text-red-800 mb-1">
                Tema Tahun Ini
              </span>
              <p className="italic text-gray-700 font-medium text-sm sm:text-base">
                “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow.”
              </p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <Button 
                label="Info Selengkapnya" 
                variant="primary" 
                className="shadow-md shadow-red-900/10 hover:shadow-lg transition-all px-8 py-3 w-full sm:w-auto text-center" 
              />
              <Button 
                label="Hubungi Panitia" 
                variant="outline" 
                className="hover:bg-gray-50 transition-all px-8 py-3 w-full sm:w-auto text-center" 
              />
            </div>
          </div>

          {/* Sisi Kanan: Maskot dengan Efek Floating */}
          <div className="w-4/5 sm:w-2/3 md:w-2/5 flex justify-center items-center relative">
            {/* Efek Lingkaran Cahaya di Belakang Maskot */}
            <div className="absolute w-64 h-64 bg-red-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            <div className="animate-bounce-slow max-w-[320px] md:max-w-full drop-shadow-xl">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                alt="Maskot INVOFEST"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
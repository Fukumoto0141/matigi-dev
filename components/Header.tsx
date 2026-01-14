import { MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b-2 border-[#E1E8ED] sticky top-0 md:top-[57px] z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[3.5rem] h-[3.5rem] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="./public/logo.png"
                alt="まち議アイコン"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl md:text-2xl text-[#333333]">まち議</h1>
          </div>
          <div className="flex items-center gap-2 bg-[#F5F7FA] px-3 py-2 rounded-lg">
            <MapPin className="w-4 h-4 text-[#4DA9E8]" />
            <span className="text-sm text-[#333333]">福島県福島市</span>
          </div>
        </div>
      </div>
    </header>
  );
}

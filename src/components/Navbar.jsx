import { Home, BookOpen, Landmark, Users } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-800">
            <Landmark className="h-6 w-6 text-red-600" />
            <span>Sejarah Indonesia</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#home" className="inline-flex items-center gap-2 hover:text-gray-900 transition-colors">
              <Home className="h-4 w-4" /> Beranda
            </a>
            <a href="#timeline" className="inline-flex items-center gap-2 hover:text-gray-900 transition-colors">
              <BookOpen className="h-4 w-4" /> Linimasa
            </a>
            <a href="#tokoh" className="inline-flex items-center gap-2 hover:text-gray-900 transition-colors">
              <Users className="h-4 w-4" /> Tokoh
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

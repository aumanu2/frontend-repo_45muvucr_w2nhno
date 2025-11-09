export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Sejarah Indonesia. Dibuat untuk edukasi dan apresiasi sejarah bangsa.
        </p>
      </div>
    </footer>
  );
}

export const Footer = () => {
    return (
      <footer className="border-t border-neutral-800 bg-black py-12 text-center text-sm text-neutral-500">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} MajerSolutions. Wszelkie prawa zastrzeżone.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    );
  };


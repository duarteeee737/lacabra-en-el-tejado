import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl text-cream mb-3">La Cabra en el Tejado</h3>
          <p className="text-sm leading-relaxed max-w-sm">
            Bar acogedor en el corazón de Madrid. Aperitivos mediterráneos, falafel, crepes
            y el mejor vermut bajo un mural que cuenta historias.
          </p>
        </div>
        <div>
          <h4 className="text-cream font-semibold mb-4 text-sm tracking-widest uppercase">Visítanos</h4>
          <p className="text-sm leading-relaxed">
            C. de Sta. Ana, 29<br />
            Centro, 28005 Madrid<br />
            <a href="tel:+34910333359" className="hover:text-primary">910 33 33 59</a>
          </p>
        </div>
        <div>
          <h4 className="text-cream font-semibold mb-4 text-sm tracking-widest uppercase">Navega</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/carta" className="hover:text-primary">Carta</Link></li>
            <li><Link to="/local" className="hover:text-primary">El Local</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} La Cabra en el Tejado</span>
          <span>Hecho con cariño en Madrid</span>
        </div>
      </div>
    </footer>
  );
}

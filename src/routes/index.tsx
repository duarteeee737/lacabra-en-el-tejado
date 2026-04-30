import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-bar.jpg";
import tapasImg from "@/assets/tapas.jpg";
import crepesImg from "@/assets/crepes.jpg";
import vermutImg from "@/assets/vermut.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Cabra en el Tejado · Bar mediterráneo en Madrid" },
      { name: "description", content: "Bar acogedor en el centro de Madrid con aperitivos mediterráneos, falafel, crepes y vermut. C. de Sta. Ana 29, La Latina." },
      { property: "og:title", content: "La Cabra en el Tejado" },
      { property: "og:description", content: "Aperitivos mediterráneos, falafel y crepes en el corazón de Madrid." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout transparentNav>
      {/* HERO con foto de fondo */}
      <section className="relative min-h-[78vh] md:min-h-[82vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Interior del bar La Cabra en el Tejado"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/85" />

        {/* rating chip */}
        <div className="absolute top-24 right-6 lg:right-10 hidden md:flex items-center gap-2 bg-background/90 backdrop-blur px-4 py-2 rounded-full shadow-soft">
          <div className="flex text-primary text-sm">★★★★★</div>
          <span className="text-sm font-semibold">4,4</span>
          <span className="text-xs text-muted-foreground">· 2,7k</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pb-14 md:pb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 bg-cream/15 backdrop-blur border border-cream/20 text-cream px-3 py-1.5 rounded-full text-[11px] tracking-[0.25em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Abierto hoy
            </span>
            <span className="text-xs text-cream/80">La Latina · Madrid</span>
          </div>
          <h1 className="font-display text-cream text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] text-balance tracking-tight max-w-3xl">
            Mediterráneo, vermut y un{" "}
            <em className="text-primary not-italic">mural inolvidable</em>.
          </h1>
          <p className="text-cream/85 mt-6 text-base md:text-lg max-w-xl leading-relaxed">
            Bar acogedor con accesorios eclécticos. Falafel, hummus, crepes y aperitivos para compartir en C. de Sta. Ana 29.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/carta" className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition shadow-warm">
              Ver la carta
            </Link>
            <a href="tel:+34910333359" className="border border-cream/40 text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-cream/10 transition backdrop-blur-sm">
              Reservar · 910 33 33 59
            </a>
          </div>
        </div>
      </section>

      {/* INTRO + stats */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <span className="text-primary text-[11px] tracking-[0.35em] uppercase">La casa</span>
          <h2 className="font-display text-3xl md:text-5xl mt-2 leading-tight text-balance">
            Pequeñas raciones, grandes momentos.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Llevamos años ofreciendo en La Latina un rincón donde el sabor mediterráneo se cruza con la conversación. Tapas para compartir, vermut bien tirado y un ambiente que te hace quedarte un rato más.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
          <div className="border-l-2 border-primary pl-4">
            <div className="font-display text-2xl text-primary">4,4★</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">2,7k reseñas</div>
          </div>
          <div className="border-l-2 border-border pl-4">
            <div className="font-display text-2xl">7 días</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">a la semana</div>
          </div>
          <div className="border-l-2 border-border pl-4">
            <div className="font-display text-2xl">Centro</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">28005 Madrid</div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-primary text-[11px] tracking-[0.35em] uppercase">La carta</span>
            <h2 className="font-display text-3xl md:text-5xl mt-2 leading-tight">Lo que no te puedes perder</h2>
          </div>
          <Link to="/carta" className="hidden sm:inline text-sm text-primary hover:underline">Ver todo →</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { img: tapasImg, tag: "Mediterráneo", title: "Hummus & Falafel", text: "Cremoso, especiado y servido con pita caliente." },
            { img: crepesImg, tag: "Para compartir", title: "Crepes salados y dulces", text: "Una vuelta de tuerca cocinada al momento." },
            { img: vermutImg, tag: "Tradición", title: "Vermut de Madrid", text: "Con su naranja y su aceituna." },
          ].map((c) => (
            <article key={c.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-soft transition-all duration-500 flex sm:block">
              <div className="w-32 sm:w-auto aspect-square sm:aspect-[16/10] overflow-hidden shrink-0">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary">{c.tag}</span>
                <h3 className="font-display text-lg mt-1">{c.title}</h3>
                <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-primary text-[11px] tracking-[0.35em] uppercase">Reseñas</span>
            <h2 className="font-display text-3xl md:text-5xl mt-2 leading-tight">Lo que dicen de nosotros</h2>
          </div>
          <div className="hidden sm:flex items-center gap-3 bg-secondary px-4 py-2 rounded-full">
            <div className="flex text-primary text-sm">★★★★★</div>
            <span className="text-sm font-semibold">4,4</span>
            <span className="text-xs text-muted-foreground">· 2,7k</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Eva García", date: "Hace 3 meses", rating: 4, text: "El sitio está muy bien y la relación calidad-precio está genial. Probamos el falafel, una de sus especialidades, y repetiremos seguro.", initials: "EG" },
            { name: "Daniel Anguita", date: "Hace 2 meses", rating: 4, text: "Buen sitio en La Latina para tapear y tomar un vermut. El ambiente es heterogéneo y puedes encontrar gente de todo tipo. El trato y el servicio muy agradable.", initials: "DA" },
            { name: "María L.", date: "Hace 1 mes", rating: 5, text: "Acogedor, con un mural precioso y carta variada. Ideal para una cena tranquila o unas cañas con amigos. Muy recomendable.", initials: "ML" },
          ].map((r) => (
            <article key={r.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-soft transition flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-display flex items-center justify-center text-sm">
                  {r.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{r.name}</div>
                  <div className="text-[11px] text-muted-foreground">{r.date}</div>
                </div>
                <div className="text-primary text-xs tracking-tighter">
                  {"★".repeat(r.rating)}<span className="text-muted-foreground/40">{"★".repeat(5 - r.rating)}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-4 pt-4 border-t border-border text-[10px] uppercase tracking-widest text-muted-foreground">
                Reseña de Google
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/search?q=La+Cabra+en+el+Tejado+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Ver todas las reseñas en Google →
          </a>
        </div>
      </section>

      {/* UBICACIÓN al final */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="bg-card rounded-3xl overflow-hidden shadow-soft border border-border grid md:grid-cols-5">
          <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-primary text-[11px] tracking-[0.35em] uppercase">Dónde estamos</span>
              <h2 className="font-display text-3xl md:text-4xl mt-3 leading-tight">
                En pleno corazón<br />de La Latina.
              </h2>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                C. de Sta. Ana, 29<br />
                28005 Madrid · Centro
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="https://maps.google.com/?q=C.+de+Sta.+Ana+29+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background px-5 py-2.5 rounded-full text-xs font-medium hover:opacity-90 transition"
              >
                Cómo llegar →
              </a>
              <Link to="/contacto" className="border border-border px-5 py-2.5 rounded-full text-xs font-medium hover:bg-secondary transition">
                Horarios
              </Link>
            </div>
          </div>
          <div className="md:col-span-3 min-h-[280px] md:min-h-[360px] relative">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps?q=Calle+de+Santa+Ana+29,+Madrid&output=embed"
              className="absolute inset-0 w-full h-full border-0 grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

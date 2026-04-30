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
      { name: "description", content: "Bar acogedor en el centro de Madrid con aperitivos mediterráneos, falafel, crepes y el mejor vermut. C. de Sta. Ana 29." },
      { property: "og:title", content: "La Cabra en el Tejado" },
      { property: "og:description", content: "Aperitivos mediterráneos, falafel y crepes en el corazón de Madrid." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout transparentNav>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Interior del bar La Cabra en el Tejado"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-24 md:pb-32">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-cream/80 text-xs tracking-[0.4em] uppercase mb-6 border-l-2 border-primary pl-4">
              Madrid · desde el centro
            </span>
            <h1 className="font-display text-cream text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-balance">
              Donde Madrid<br />
              <em className="text-primary not-italic font-normal">se encuentra</em> con el
              Mediterráneo.
            </h1>
            <p className="text-cream/85 mt-8 text-lg md:text-xl max-w-xl leading-relaxed">
              Un bar acogedor con accesorios eclécticos y un mural que enamora. Falafel, hummus, crepes y vermut servidos con cariño.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/carta" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition shadow-warm">
                Ver la carta
              </Link>
              <a href="tel:+34910333359" className="border border-cream/40 text-cream px-8 py-4 rounded-full font-medium hover:bg-cream/10 transition backdrop-blur-sm">
                Reservar mesa
              </a>
            </div>
          </div>
        </div>
        {/* rating chip */}
        <div className="absolute top-28 right-6 lg:right-10 hidden md:flex items-center gap-3 bg-background/95 backdrop-blur px-5 py-3 rounded-full shadow-warm">
          <div className="flex text-primary">
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <span className="text-sm font-semibold">4,4</span>
          <span className="text-xs text-muted-foreground">· 2,7 mil reseñas</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-24 md:py-32 text-center">
        <span className="text-primary text-xs tracking-[0.4em] uppercase">La casa</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 text-balance">
          Pequeñas raciones,<br />grandes momentos.
        </h2>
        <p className="text-muted-foreground mt-8 text-lg leading-relaxed max-w-2xl mx-auto">
          Llevamos años ofreciendo en La Latina un rincón donde el sabor mediterráneo se cruza con la conversación. Tapas para compartir, vermut bien tirado y un ambiente que te hace quedarte un rato más.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: tapasImg, tag: "Mediterráneo", title: "Hummus & Falafel", text: "Una de nuestras especialidades. Cremoso, especiado y servido con pita caliente." },
            { img: crepesImg, tag: "Para compartir", title: "Crepes salados y dulces", text: "Una vuelta de tuerca a la carta. Rellenos creativos cocinados al momento." },
            { img: vermutImg, tag: "La hora del", title: "Vermut de Madrid", text: "Con su naranja y su aceituna. Como manda la tradición, pero como te gusta a ti." },
          ].map((c) => (
            <article key={c.title} className="group rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-warm transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">{c.tag}</span>
                <h3 className="font-display text-2xl mt-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-ink text-cream py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <svg className="w-12 h-12 mx-auto text-primary mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9.13 8.5c-.8 0-1.5.3-2 .9-.5.6-.8 1.3-.8 2.2 0 .9.3 1.6.8 2.2.5.6 1.2.9 2 .9.4 0 .8-.1 1.2-.3-.4 1.4-1.4 2.5-3 3.4l1 1.5c1.6-.9 2.9-2 3.7-3.4.8-1.4 1.2-2.9 1.2-4.5 0-.9-.3-1.6-.8-2.2-.5-.6-1.2-.7-2-.7H9.13zm8 0c-.8 0-1.5.3-2 .9-.5.6-.8 1.3-.8 2.2 0 .9.3 1.6.8 2.2.5.6 1.2.9 2 .9.4 0 .8-.1 1.2-.3-.4 1.4-1.4 2.5-3 3.4l1 1.5c1.6-.9 2.9-2 3.7-3.4.8-1.4 1.2-2.9 1.2-4.5 0-.9-.3-1.6-.8-2.2-.5-.6-1.2-.7-2-.7h-1.3z"/></svg>
          <p className="font-display text-2xl md:text-4xl leading-snug text-balance italic">
            "Buen sitio en La Latina para tapear y tomar un vermut. El ambiente es heterogéneo y el trato muy agradable."
          </p>
          <p className="mt-8 text-cream/60 text-sm tracking-widest uppercase">— Reseña de Google</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <div className="bg-gradient-warm rounded-[2rem] p-12 md:p-20 text-primary-foreground relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl text-balance">¿Nos vemos esta noche?</h2>
            <p className="mt-6 text-lg opacity-90">
              Estamos en C. de Sta. Ana 29. Llama y te guardamos sitio en la mejor mesa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+34910333359" className="bg-cream text-ink px-8 py-4 rounded-full font-semibold hover:bg-cream/90 transition">
                910 33 33 59
              </a>
              <Link to="/contacto" className="border border-cream/50 px-8 py-4 rounded-full font-medium hover:bg-cream/10 transition">
                Cómo llegar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

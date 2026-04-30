import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-bar.jpg";
import tapasImg from "@/assets/tapas.jpg";
import vermutImg from "@/assets/vermut.jpg";

export const Route = createFileRoute("/local")({
  head: () => ({
    meta: [
      { title: "El Local · La Cabra en el Tejado" },
      { name: "description", content: "Un bar acogedor con accesorios eclécticos y un original mural en el centro de Madrid." },
      { property: "og:title", content: "El Local · La Cabra en el Tejado" },
      { property: "og:description", content: "Conoce nuestro rincón en Madrid." },
    ],
  }),
  component: LocalPage,
});

function LocalPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary text-xs tracking-[0.4em] uppercase">El local</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 text-balance leading-[1.05]">
            Un rincón con<br /><em className="text-primary not-italic">historia propia.</em>
          </h1>
          <p className="text-muted-foreground mt-8 text-lg leading-relaxed">
            En La Cabra en el Tejado todo cuenta una historia: los muebles encontrados, las velas que parpadean al caer la tarde y, sobre todo, el mural que preside la sala y que se ha convertido en parte de nuestra identidad.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Somos un bar de barrio con vocación mediterránea. Nos gusta la gente que se sienta sin prisa, que pide otra ronda y se queda hablando hasta el cierre.
          </p>
        </div>
        <div className="relative">
          <img src={heroImg} alt="Interior del bar" className="rounded-3xl shadow-warm w-full aspect-[4/5] object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-5 shadow-soft hidden md:block">
            <div className="text-3xl font-display text-primary">4,4</div>
            <div className="text-xs text-muted-foreground tracking-wider uppercase">2,7k reseñas</div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Mediterráneo", text: "Cocina honesta inspirada en las costas del sur. Producto, sencillez y sabor." },
            { num: "02", title: "Ecléctico", text: "Decoración recogida durante años. Cada objeto tiene una historia que contar." },
            { num: "03", title: "Comunidad", text: "Un punto de encuentro abierto, heterogéneo y siempre acogedor." },
          ].map((v) => (
            <div key={v.num} className="bg-background rounded-3xl p-10 shadow-soft">
              <div className="font-display text-5xl text-primary/30">{v.num}</div>
              <h3 className="font-display text-2xl mt-4">{v.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-6">
        <img src={tapasImg} alt="Tapas mediterráneas" loading="lazy" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-soft" />
        <img src={vermutImg} alt="Vermut de la casa" loading="lazy" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-soft md:translate-y-12" />
      </section>
    </Layout>
  );
}

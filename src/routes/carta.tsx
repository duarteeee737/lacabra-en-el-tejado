import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta · La Cabra en el Tejado" },
      { name: "description", content: "Aperitivos mediterráneos, falafel, hummus, crepes y vermut. Descubre nuestra carta en Madrid." },
      { property: "og:title", content: "Carta · La Cabra en el Tejado" },
      { property: "og:description", content: "Sabores mediterráneos para compartir." },
    ],
  }),
  component: CartaPage,
});

const sections = [
  {
    title: "Para empezar",
    subtitle: "Pequeños bocados",
    items: [
      { name: "Hummus de la casa", desc: "Cremoso, con aceite de oliva, pimentón y pita caliente.", price: "6,50" },
      { name: "Babaganush", desc: "Berenjena ahumada con tahini y limón.", price: "7,00" },
      { name: "Aceitunas marinadas", desc: "Variadas, con cítricos y hierbas frescas.", price: "3,50" },
      { name: "Tabule", desc: "Bulgur, perejil, menta, tomate y limón.", price: "6,00" },
    ],
  },
  {
    title: "Especialidades",
    subtitle: "Lo que nos hace únicos",
    items: [
      { name: "Falafel casero", desc: "6 unidades con salsa de yogur y menta.", price: "8,50" },
      { name: "Sabich", desc: "Pita rellena de berenjena, huevo, tahini y amba.", price: "9,00" },
      { name: "Shakshuka", desc: "Huevos pochados en salsa de tomate especiado.", price: "9,50" },
      { name: "Plato de mezzes", desc: "Selección de 5 entrantes para compartir.", price: "16,00" },
    ],
  },
  {
    title: "Crepes",
    subtitle: "Salados y dulces",
    items: [
      { name: "Crepe de queso de cabra y miel", desc: "Con nueces caramelizadas y rúcula.", price: "8,00" },
      { name: "Crepe de espinacas y feta", desc: "Con piñones tostados.", price: "8,50" },
      { name: "Crepe Nutella & plátano", desc: "Clásico irresistible.", price: "6,50" },
      { name: "Crepe limón y azúcar", desc: "El más sencillo, el más rico.", price: "5,50" },
    ],
  },
  {
    title: "Para beber",
    subtitle: "Tradición líquida",
    items: [
      { name: "Vermut de la casa", desc: "Con naranja y aceituna.", price: "3,80" },
      { name: "Caña", desc: "Bien tirada, fresquita.", price: "2,50" },
      { name: "Copa de vino", desc: "Tinto, blanco o rosado de la casa.", price: "3,50" },
      { name: "Té marroquí", desc: "Con hierbabuena fresca.", price: "3,00" },
    ],
  },
];

function CartaPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12 text-center">
        <span className="text-primary text-xs tracking-[0.4em] uppercase">Carta</span>
        <h1 className="font-display text-5xl md:text-7xl mt-4 text-balance">Sabores que se comparten</h1>
        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
          Una propuesta mediterránea, hecha a fuego lento. Los precios incluyen IVA.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24">
        <div className="space-y-20">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-border">
                <h2 className="font-display text-3xl md:text-4xl">{s.title}</h2>
                <span className="text-muted-foreground text-sm tracking-wide italic">— {s.subtitle}</span>
              </div>
              <ul className="space-y-7">
                {s.items.map((item) => (
                  <li key={item.name} className="flex gap-6 items-baseline group">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-display text-xl">{item.name}</h3>
                        <span className="flex-1 border-b border-dotted border-border/70 translate-y-[-4px]" />
                        <span className="font-display text-xl text-primary tabular-nums">{item.price} €</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

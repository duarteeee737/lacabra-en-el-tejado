import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta · La Cabra en el Tejado" },
      { name: "description", content: "Raciones, crêpes sin gluten, tostas, postres, cervezas especiales y cócteles. Carta completa de La Cabra en el Tejado en Madrid." },
      { property: "og:title", content: "Carta · La Cabra en el Tejado" },
      { property: "og:description", content: "Sabores mediterráneos para compartir." },
    ],
  }),
  component: CartaPage,
});

type Item = { name: string; price: string; tag?: string };
type Section = { title: string; subtitle?: string; note?: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Raciones",
    subtitle: "Para compartir",
    note: "* Para sin gluten (gluten free) pedir con pan sin gluten +1,20€",
    items: [
      { name: "Humus", price: "7,20", tag: "V·GF*" },
      { name: "Tzatziki", price: "7,60", tag: "GF*" },
      { name: "Berenjena ahumada con salsa tahini", price: "8,00", tag: "V·GF*" },
      { name: "Tabulé de quinoa", price: "7,20", tag: "V·GF" },
      { name: "Mezze", price: "15,00" },
      { name: "Patatas con salsa de setas", price: "7,00", tag: "GF" },
      { name: "Falafels", price: "8,00", tag: "V·GF" },
      { name: "Guacamole con patacones", price: "9,00", tag: "V·GF" },
      { name: "Pita de falafels con humus o tzatziki", price: "8,00" },
      { name: "Pollo tikka masala con arroz", price: "10,00", tag: "GF" },
      { name: "Boniato asado con babaganoush", price: "8,00", tag: "V·GF" },
      { name: "Brochetas de pollo con salsa satay", price: "8,50" },
      { name: "Provoletta", price: "7,00", tag: "GF*" },
      { name: "Ensalada con queso de cabra, pasas y nueces", price: "9,00" },
      { name: "Quiche de queso de cabra y jamón", price: "4,50", tag: "GF" },
      { name: "Quiche de puerros y Emmental", price: "4,50", tag: "GF" },
    ],
  },
  {
    title: "Crêpes",
    subtitle: "Todas sin gluten",
    items: [
      { name: "Crêpe de pollo y champiñones", price: "8,00", tag: "GF" },
      { name: "Crêpe de queso de cabra y pesto", price: "7,20", tag: "GF" },
      { name: "Crêpe de espinacas y queso", price: "7,20", tag: "GF" },
      { name: "Crêpe de jamón y queso", price: "7,20", tag: "GF" },
    ],
  },
  {
    title: "Tostas",
    items: [
      { name: "Tosta de jamón con tomate", price: "6,00" },
      { name: "Tosta de lacón y brie", price: "6,50" },
      { name: "Tosta de salmón y aguacate", price: "7,10" },
      { name: "Tosta vegana de humus y aguacate", price: "6,80", tag: "V" },
      { name: "Tosta de queso de cabra y miel", price: "6,30" },
      { name: "Tosta de Idiazábal y tomates secos", price: "6,50" },
    ],
  },
  {
    title: "Postres",
    items: [
      { name: "Tarta de zanahoria", price: "5,00", tag: "GF" },
      { name: "Tarta vegana de maracuyá", price: "4,50", tag: "V·GF" },
      { name: "Brownie", price: "4,50", tag: "GF" },
      { name: "Cheesecake", price: "4,80", tag: "GF" },
      { name: "Crêpe de Nutella", price: "4,60" },
      { name: "Crêpe de chocolate y plátano", price: "5,00" },
      { name: "Crêpe de dulce de leche", price: "4,60" },
      { name: "Café frappé de leche de coco", price: "4,00", tag: "V·GF" },
    ],
  },
  {
    title: "Refrescos",
    items: [
      { name: "Kombucha casera", price: "3,50" },
      { name: "Limonada", price: "3,00" },
      { name: "Fritz kola o ruibarbo", price: "3,60" },
      { name: "Coca-Cola & Schweppes", price: "2,60" },
      { name: "Zumos", price: "2,20" },
      { name: "Trina", price: "2,30" },
      { name: "Café frappé de leche de coco", price: "3,50", tag: "V·GF" },
    ],
  },
  {
    title: "Cervezas especiales",
    items: [
      { name: "Trigo ecológico (0,5l)", price: "4,00" },
      { name: "Superbock negra Stout", price: "3,50" },
      { name: "Sagra IPA", price: "4,00" },
      { name: "Sagra Roja / Premium / Trigo", price: "4,00" },
      { name: "Turia tostada", price: "4,00" },
      { name: "Voll Damm", price: "3,80" },
      { name: "Daura Lager / Marzen", price: "2,90", tag: "GF" },
      { name: "Coronita", price: "3,50" },
      { name: "Botellín", price: "1,80" },
      { name: "Tercio", price: "3,00" },
      { name: "Caña", price: "1,80" },
      { name: "Caña doble", price: "3,10" },
      { name: "Sidra The Good Cider (Apple / Strawberry)", price: "3,50" },
    ],
  },
  {
    title: "Cócteles",
    items: [
      { name: "Mojito", price: "8,00" },
      { name: "Caipirinha / Caipiroska", price: "8,00" },
      { name: "Bloody Mary", price: "8,00" },
      { name: "White Russian", price: "8,50" },
      { name: "Pisco Sour", price: "8,50" },
      { name: "Negroni", price: "8,00" },
      { name: "Old Fashioned", price: "8,50" },
      { name: "Americano", price: "7,50" },
      { name: "Gin Fizz", price: "8,00" },
      { name: "Piña colada", price: "8,00" },
    ],
  },
];

const menuMediodia = {
  platos: [
    "Humus V·GF*",
    "Tzatziki GF*",
    "Tabulé V",
    "Falafels y salsa de tahina V·GF",
    "Quiche del día",
    "Boniato horneado con babaganush V·GF",
    "Pollo tikka masala GF (+1€)",
    "Crêpe salado GF (salmón +1€)",
    "Tosta de la carta (salmón +1€)",
  ],
  guarniciones: ["Patatas con salsa de setas GF", "Arroz V·GF", "Ensalada V·GF"],
  postres: [
    "Cheesecake GF",
    "Brownie GF",
    "Tarta de zanahoria GF",
    "Tarta de maracuyá V·GF",
    "Crêpe de dulce de leche o Nutella GF",
  ],
};

function CartaPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12 text-center">
        <span className="text-primary text-xs tracking-[0.4em] uppercase">Carta</span>
        <h1 className="font-display text-5xl md:text-7xl mt-4 text-balance">Sabores que se comparten</h1>
        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
          Cocina mediterránea, crêpes sin gluten, tostas y cócteles. Los precios incluyen IVA.
        </p>
        <p className="text-muted-foreground/80 mt-3 text-xs tracking-wide">
          V = Vegano · GF = Sin Gluten · * opción sin gluten disponible
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-20">
        <div className="space-y-20">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-border">
                <h2 className="font-display text-3xl md:text-4xl">{s.title}</h2>
                {s.subtitle && (
                  <span className="text-muted-foreground text-sm tracking-wide italic">— {s.subtitle}</span>
                )}
              </div>
              <ul className="space-y-5">
                {s.items.map((item) => (
                  <li key={item.name} className="flex gap-4 items-baseline">
                    <div className="flex-1 flex items-baseline gap-3">
                      <h3 className="font-display text-lg md:text-xl">{item.name}</h3>
                      {item.tag && (
                        <span className="text-[10px] tracking-widest uppercase text-primary/80 border border-primary/30 rounded-full px-2 py-0.5">
                          {item.tag}
                        </span>
                      )}
                      <span className="flex-1 border-b border-dotted border-border/70 translate-y-[-4px]" />
                      <span className="font-display text-lg md:text-xl text-primary tabular-nums whitespace-nowrap">
                        {item.price} €
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              {s.note && (
                <p className="text-muted-foreground/80 text-xs mt-6 italic">{s.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24">
        <div className="rounded-2xl border border-border bg-card/50 p-8 md:p-12">
          <div className="flex items-baseline gap-4 mb-2">
            <h2 className="font-display text-3xl md:text-4xl">Menú del mediodía</h2>
            <span className="font-display text-2xl text-primary tabular-nums">12 €</span>
          </div>
          <p className="text-muted-foreground text-sm mb-8">
            De lunes a viernes (no festivos). Dos platos, una guarnición y una bebida.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-lg mb-3 text-primary">Platos <span className="text-muted-foreground text-xs">(elige dos)</span></h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {menuMediodia.platos.map((p) => <li key={p}>· {p}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg mb-3 text-primary">Guarniciones <span className="text-muted-foreground text-xs">(elige una)</span></h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {menuMediodia.guarniciones.map((p) => <li key={p}>· {p}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg mb-3 text-primary">Postres <span className="text-muted-foreground text-xs">(+2,80 €)</span></h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {menuMediodia.postres.map((p) => <li key={p}>· {p}</li>)}
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground/80 text-xs mt-8 italic">
            Si tienes alguna alergia o intolerancia, por favor avisa al equipo.
          </p>
        </div>
      </section>

      <AlergenosSection />
    </Layout>
  );
}

const alergenos: { group: string; items: { name: string; info: string }[] }[] = [
  {
    group: "Raciones",
    items: [
      { name: "Humus (V·GF*)", info: "Sésamo, sulfitos y gluten (opción sin gluten sin pita; los nachos contienen trazas de lácteos y soja). Posibles trazas de frutos de cáscara en el comino." },
      { name: "Tzatziki (GF*)", info: "Lácteos y gluten (opción sin gluten sin pita; los nachos contienen trazas de lácteos y soja)." },
      { name: "Crema de berenjena (V·GF*)", info: "Sésamo y gluten (opción sin gluten sin pita; los nachos contienen trazas de lácteos y soja)." },
      { name: "Patatas con salsa de setas (GF)", info: "Lácteos." },
      { name: "Falafels (V·GF)", info: "Sésamo; sulfitos y soja en la vinagreta. Posibles trazas de frutos de cáscara en el comino." },
      { name: "Guacamole con patacones (V·GF)", info: "—" },
      { name: "Pita de falafels con humus o tzatziki", info: "Gluten, sésamo en la salsa tahina. Sulfitos y soja en la vinagreta. Lácteos en el tzatziki. Posibles trazas de frutos de cáscara en el comino." },
      { name: "Pollo tikka masala con arroz (GF)", info: "Sésamo (opción sin sésamo), mostaza. Trazas de sulfitos y frutos de cáscara en las especias." },
      { name: "Boniato asado con babaganoush (V·GF)", info: "Sésamo." },
      { name: "Brochetas de pollo con salsa satay", info: "Soja y gluten (adobo del pollo) y frutos de cáscara (cacahuetes). Sulfitos y soja en la vinagreta." },
      { name: "Provoletta (GF*)", info: "Lácteos y gluten en el pan." },
      { name: "Ensalada con queso de cabra, pasas y nueces", info: "Lácteos, gluten (opción sin gluten), frutos de cáscara (nueces), sulfitos (pasas); azufre y soja en la vinagreta. Trazas de cacahuetes." },
      { name: "Quiche de jamón y queso de cabra (GF)", info: "Lácteos, huevos." },
      { name: "Quiche de puerros y Emmental (GF)", info: "Lácteos, huevos." },
      { name: "Lacón a la gallega (GF)", info: "—" },
    ],
  },
  {
    group: "Crêpes",
    items: [
      { name: "Crêpe de pollo y champiñones", info: "Lácteos, huevos y frutos de cáscara. Trazas de soja y cacahuetes." },
      { name: "Crêpe de queso de cabra y pesto", info: "Lácteos, huevos y frutos de cáscara. Trazas de soja y cacahuetes." },
      { name: "Crêpe de espinacas y queso", info: "Lácteos, huevos, sulfitos. Trazas de soja." },
      { name: "Crêpe de jamón y queso", info: "Lácteos y huevos. Trazas de soja." },
    ],
  },
  {
    group: "Tostas",
    items: [
      { name: "Todas las tostas", info: "Llevan gluten (opción sin gluten disponible)." },
      { name: "Tosta de jamón con tomate", info: "—" },
      { name: "Tosta de morcilla y manzana ácida", info: "—" },
      { name: "Tosta de lacón y brie", info: "Lácteos." },
      { name: "Tosta de salmón y aguacate", info: "Pescado." },
      { name: "Tosta vegana de humus y aguacate", info: "Sésamo y sulfitos." },
      { name: "Tosta de jamón y queso", info: "Lácteos y huevo." },
      { name: "Tosta de queso de cabra y pesto", info: "Huevo, lácteos y frutos de cáscara. Trazas de soja y cacahuetes." },
      { name: "Tosta de queso de cabra y miel", info: "Lácteos." },
      { name: "Tosta de Idiazábal y tomates secos", info: "Lácteos y huevo." },
    ],
  },
  {
    group: "Postres",
    items: [
      { name: "Tarta de zanahoria (GF)", info: "Lácteos, huevos y frutos de cáscara. Trazas de cacahuetes y soja." },
      { name: "Tarta vegana de maracuyá (GF)", info: "Soja, frutos de cáscara. Trazas de cacahuetes." },
      { name: "Cheesecake (GF)", info: "Lácteos. Trazas de cacahuetes y soja." },
      { name: "Brownie (GF)", info: "Lácteos y huevos. Trazas de frutos de cáscara y soja en el chocolate." },
      { name: "Crêpe de Nutella", info: "Lácteos, huevos, soja y frutos de cáscara." },
      { name: "Crêpe de chocolate y plátano", info: "Lácteos y huevos. Trazas de frutos de cáscara y soja." },
      { name: "Crêpe de cacao ecológico", info: "Lácteos, huevos y frutos de cáscara. Trazas de soja." },
      { name: "Crêpe de dulce de leche", info: "Lácteos y huevos. Trazas de soja." },
    ],
  },
];

function AlergenosSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24">
      <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-border">
        <h2 className="font-display text-3xl md:text-4xl">Alérgenos</h2>
      </div>
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-6 mb-10">
        <p className="text-sm text-foreground/90 leading-relaxed">
          Si tiene alguna alergia alimentaria, por favor avise al equipo. En la cocina se manipula{" "}
          <strong>gluten, cacahuetes, soja, sésamo, frutos de cáscara, pescado, huevos, leche, sulfitos y mostaza</strong>.
        </p>
      </div>

      <div className="space-y-12">
        {alergenos.map((g) => (
          <div key={g.group}>
            <h3 className="font-display text-2xl mb-5 text-primary">{g.group}</h3>
            <ul className="divide-y divide-border/60">
              {g.items.map((it) => (
                <li key={it.name} className="py-3 grid md:grid-cols-[260px_1fr] gap-1 md:gap-6">
                  <span className="font-medium text-sm">{it.name}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{it.info}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground/80 text-xs mt-10 italic">
        * Para opciones sin gluten, pedir con pan sin gluten (+1,20 €).
      </p>
    </section>
  );
}

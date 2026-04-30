import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · La Cabra en el Tejado" },
      { name: "description", content: "C. de Sta. Ana 29, Madrid. Teléfono 910 33 33 59. Horarios y cómo llegar." },
      { property: "og:title", content: "Contacto · La Cabra en el Tejado" },
      { property: "og:description", content: "Visítanos en el centro de Madrid." },
    ],
  }),
  component: ContactoPage,
});

const horarios = [
  { day: "Lunes", h: "13:00 – 1:30" },
  { day: "Martes", h: "13:00 – 1:30" },
  { day: "Miércoles", h: "18:00 – 1:30" },
  { day: "Jueves", h: "13:00 – 1:30" },
  { day: "Viernes", h: "13:00 – 2:30" },
  { day: "Sábado", h: "12:00 – 2:30" },
  { day: "Domingo", h: "11:00 – 1:30" },
];

function ContactoPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12 text-center">
        <span className="text-primary text-xs tracking-[0.4em] uppercase">Contacto</span>
        <h1 className="font-display text-5xl md:text-7xl mt-4 text-balance">Te esperamos</h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 grid lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div className="bg-card rounded-3xl p-8 shadow-soft">
            <h2 className="font-display text-2xl mb-4">Visítanos</h2>
            <p className="text-muted-foreground leading-relaxed">
              C. de Sta. Ana, 29<br />
              Centro, 28005 Madrid
            </p>
            <a
              href="https://maps.google.com/?q=C.+de+Sta.+Ana+29+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary font-medium hover:underline"
            >
              Cómo llegar →
            </a>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-soft">
            <h2 className="font-display text-2xl mb-4">Reservas</h2>
            <a href="tel:+34910333359" className="block font-display text-3xl text-primary hover:underline">
              910 33 33 59
            </a>
            <p className="text-sm text-muted-foreground mt-2">Recomendado para grupos y fines de semana.</p>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-soft">
            <h2 className="font-display text-2xl mb-4">Horarios</h2>
            <ul className="divide-y divide-border">
              {horarios.map((h) => (
                <li key={h.day} className="flex justify-between py-2.5 text-sm">
                  <span className="font-medium">{h.day}</span>
                  <span className="text-muted-foreground tabular-nums">{h.h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-warm min-h-[500px] lg:min-h-full">
          <iframe
            title="Ubicación La Cabra en el Tejado"
            src="https://www.google.com/maps?q=Calle+de+Santa+Ana+29,+Madrid&output=embed"
            className="w-full h-full min-h-[500px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}

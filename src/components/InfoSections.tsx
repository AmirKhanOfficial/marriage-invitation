import { CalendarDays, MapPin, Shirt, Car, Hotel, Gift } from "lucide-react";
import { wedding } from "../data/wedding";
const Shell = ({
  title,
  icon: Icon,
  children,
  cream = true,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
  cream?: boolean;
}) => (
  <section className={`py-16 md:py-20 px-6 ${cream ? "cream-bg" : ""}`}>
    <div className="max-w-3xl mx-auto">
      <div className="text-center">
        <Icon className="mx-auto text-[var(--primary)] mb-3" size={25} />
        <h2 className="font-calligraphy text-4xl md:text-5xl text-[var(--primary)] mb-2">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);
export function Timeline() {
  return (
    <Shell title="Program Timeline" icon={CalendarDays}>
      <div className="mt-8 space-y-4">
        {wedding.timeline.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-[var(--border)] bg-white/60 p-5 flex justify-between items-center"
          >
            <div>
              <h3 className="font-display font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--muted)]">{item.date}</p>
            </div>
            <span className="font-calligraphy text-xl text-[var(--primary)]">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </Shell>
  );
}
export function Venue() {
  return (
    <Shell title="Venue" icon={MapPin} cream={false}>
      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white/60 p-8 text-center">
        <h3 className="text-2xl font-semibold">{wedding.venue.name}</h3>
        <p className="text-[var(--muted)] mt-2">{wedding.venue.address}</p>
        <a
          href={wedding.venue.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 rounded-full bg-[var(--primary)] text-white px-6 py-2"
        >
          Open Map
        </a>
      </div>
    </Shell>
  );
}
export function DressCode() {
  return (
    <Shell title="Dress Code" icon={Shirt}>
      <div className="grid md:grid-cols-2 gap-5 mt-8">
        <div className="p-6 rounded-xl border border-[var(--border)] text-center">
          <h3 className="font-semibold text-lg text-[var(--primary)] mb-2">
            Women
          </h3>
          <p>Elegant traditional or formal wear</p>
        </div>
        <div className="p-6 rounded-xl border border-[var(--border)] text-center">
          <h3 className="font-semibold text-lg text-[var(--primary)] mb-2">
            Men
          </h3>
          <p>Suit or traditional formal wear</p>
        </div>
      </div>
    </Shell>
  );
}
export function PreWedding() {
  return (
    <Shell title="Pre-Wedding Events" icon={CalendarDays} cream={false}>
      <div className="grid md:grid-cols-2 gap-5 mt-8">
        {wedding.preWedding.map((e, i) => (
          <div
            key={i}
            className="rounded-xl border border-[var(--border)] p-6 text-center"
          >
            <p className="font-semibold">{e.date}</p>
            <p className="font-calligraphy text-2xl text-[var(--primary)]">
              {e.time}
            </p>
            <p className="text-[var(--muted)] mt-2">{e.place}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}
export function SimpleInfo() {
  return (
    <>
      <Shell title="Transportation" icon={Car}>
        <p className="text-center text-[var(--muted)] mt-8">
          Transportation details will be shared with confirmed guests.
        </p>
      </Shell>
      <Shell title="Accommodation" icon={Hotel} cream={false}>
        <p className="text-center text-[var(--muted)] mt-8">
          Accommodation information will be shared with guests who need it.
        </p>
      </Shell>
      <Shell title="Gifts" icon={Gift}>
        <p className="text-center text-[var(--muted)] mt-8">
          Your presence and blessings are the greatest gift.
        </p>
      </Shell>
    </>
  );
}

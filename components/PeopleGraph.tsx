import Link from "next/link";
import { people } from "@/data/zhuangzi";

export function PeopleGraph() {
  return (
    <div className="rounded-[2.5rem] border border-ink/10 bg-paper p-6 shadow-soft md:p-10">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {people.map((person) => (
          <Link key={person.slug} href={`/people/${person.slug}`} className="rounded-[2rem] border border-ink/10 bg-white/80 p-5 transition hover:-translate-y-1 hover:border-gold/50">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">{person.role}</p>
            <h3 className="mt-3 font-serif text-2xl font-bold text-ink">{person.name}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/65">{person.description}</p>
            <p className="mt-4 text-sm text-pine">象征：{person.symbol}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

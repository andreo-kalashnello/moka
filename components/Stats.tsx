import { stats } from "@/lib/data";

export function Stats() {
  return (
    <dl className="stats">
      {stats.map(({ value, label, icon: Icon }) => (
        <div className="stat" key={value}>
          <dt>
            <Icon aria-hidden="true" size={20} strokeWidth={1.5} />
            <span>{value}</span>
          </dt>
          <dd>{label}</dd>
        </div>
      ))}
    </dl>
  );
}

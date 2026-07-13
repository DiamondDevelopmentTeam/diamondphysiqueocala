interface GoldCheckListProps {
  items: readonly string[];
  strong?: boolean;
}

export function GoldCheckList({ items, strong = false }: GoldCheckListProps) {
  return (
    <ul className={`gold-check-list ${strong ? 'gold-check-list--strong' : ''}`}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

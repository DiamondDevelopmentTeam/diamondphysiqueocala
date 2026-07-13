import { Link } from 'react-router-dom';

type BrandProps = {
  compact?: boolean;
  className?: string;
};

export function Brand({ compact = false, className = '' }: BrandProps) {
  return (
    <Link
      to="/"
      className={`brand ${compact ? 'brand--compact' : ''} ${className}`.trim()}
      aria-label="Diamond Physique Ocala home"
    >
      <span className="brand__diamond" aria-hidden="true">◆</span>
      <span className="brand__copy">
        <span className="brand__diamond-word">Diamond</span>
        <span className="brand__physique-word">Physique</span>
        <span className="brand__ocala-word">Ocala</span>
      </span>
    </Link>
  );
}

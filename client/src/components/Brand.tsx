import { Link } from 'react-router-dom';
import diamondPhysiqueLogo from '../assets/images/High-Res-Diamond-Animation-Logo-1.webp';

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
      <img
        src={diamondPhysiqueLogo}
        alt="Diamond Physique Ocala"
        className="brand__logo"
      />
    </Link>
  );
}
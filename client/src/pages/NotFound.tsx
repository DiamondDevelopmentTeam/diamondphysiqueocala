import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <main className="not-found">
      <div className="shell not-found__inner">
        <span aria-hidden="true">◆</span>
        <p className="eyebrow">404</p>
        <h1>This page wandered off between reps.</h1>
        <p>Let’s get you back to the main workout.</p>
        <Link className="button button--gold" to="/">Return Home</Link>
      </div>
    </main>
  );
}

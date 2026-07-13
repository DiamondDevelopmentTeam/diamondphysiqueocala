interface FormStatusProps {
  status: 'idle' | 'submitting' | 'success' | 'error';
  successMessage?: string;
  errorMessage?: string;
}

export function FormStatus({
  status,
  successMessage = 'Thank you. Your message has been received.',
  errorMessage = 'We could not send your message. Please try again or contact Matthew directly.'
}: FormStatusProps) {
  if (status === 'idle' || status === 'submitting') return null;

  return (
    <div className={`form-status form-status--${status}`} role="status" aria-live="polite">
      {status === 'success' ? successMessage : errorMessage}
    </div>
  );
}

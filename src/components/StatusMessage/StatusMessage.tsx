import './StatusMessage.css';

interface StatusMessageProps {
  variant: 'loading' | 'error';
  message: string;
}

export function StatusMessage({ variant, message }: StatusMessageProps) {
  if (variant === 'error') {
    return (
      <div className="status-message status-message--error" role="alert">
        {message}
      </div>
    );
  }

  return (
    <div className="status-message" role="status" aria-live="polite">
      {message}
    </div>
  );
}
interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4 animate-fadeIn">
      <p className="text-sm text-red-800 dark:text-red-200">{message}</p>
    </div>
  );
}
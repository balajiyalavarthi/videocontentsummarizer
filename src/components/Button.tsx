import { ComponentProps } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({ isLoading, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full relative group overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-medium shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center justify-center gap-2">
        {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : null}
        {children}
      </div>
    </button>
  );
}
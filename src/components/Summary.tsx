interface SummaryProps {
  content: string;
}

export function Summary({ content }: SummaryProps) {
  return (
    <div className="space-y-2 animate-fadeIn">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Video Summary
      </label>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg" />
        <textarea
          value={content}
          readOnly
          rows={6}
          className="block w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
      </div>
    </div>
  );
}
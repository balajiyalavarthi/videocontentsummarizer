import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Summary } from './components/Summary';
import { ErrorMessage } from './components/ErrorMessage';

export default function App() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSummary('');
    setIsLoading(true);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) throw new Error('Failed to generate summary');

      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      setError('Failed to generate summary. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-block p-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl backdrop-blur-sm">
                <h1 className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-4xl sm:text-5xl font-bold">
                  Video Summarizer
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Transform any YouTube video into a concise summary with AI
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Video URL"
                  id="url"
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  required
                />

                <Button type="submit" disabled={isLoading} isLoading={isLoading}>
                  {isLoading ? (
                    'Generating Summary...'
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Generate Summary
                    </>
                  )}
                </Button>
              </form>

              {error && <ErrorMessage message={error} />}
              {summary && <Summary content={summary} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
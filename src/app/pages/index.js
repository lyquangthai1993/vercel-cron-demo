import { useState } from 'react';

export default function Home() {
  const [lastRun, setLastRun] = useState(null);
  const [loading, setLoading] = useState(false);

  const triggerCronManually = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cron');
      const data = await response.json();
      setLastRun(data);
    } catch (error) {
      console.error('Error triggering cron:', error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Vercel Cron Demo</h1>

      <button
        onClick={triggerCronManually}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? 'Running...' : 'Trigger Cron Manually'}
      </button>

      {lastRun && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Last Run Result:</h2>
          <pre className="bg-gray-100 p-4 rounded mt-2">
            {JSON.stringify(lastRun, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}
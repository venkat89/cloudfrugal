interface StatCardProps {
  value: string | number;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatCard({ value, label, trend, trendValue }: StatCardProps) {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600'
  };

  return (
    <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
      <div className="flex items-baseline justify-between mb-2">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        {trend && trendValue && (
          <div className={`text-sm font-semibold ${trendColors[trend]}`}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </div>
        )}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
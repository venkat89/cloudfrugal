import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
  metrics?: string;
}

export function FeatureCard({ icon: Icon, title, description, color, bg, metrics }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group">
      <div className={`inline-flex p-4 rounded-xl ${bg} ${color} mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {metrics && (
        <div className="inline-flex items-center text-sm font-semibold text-blue-600">
          {metrics}
        </div>
      )}
    </div>
  );
}

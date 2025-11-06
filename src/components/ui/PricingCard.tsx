import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  onCtaClick?: () => void;
}

export function PricingCard({ name, price, description, features, cta, popular = false, onCtaClick }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-8 ${popular ? 'border-4 border-blue-600 shadow-xl scale-105' : 'border-2 border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6">
        {price === 'Custom' ? (
          <div className="text-4xl font-bold text-gray-900">Custom</div>
        ) : (
          <>
            <span className="text-4xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-600">/month</span>
          </>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={onCtaClick}
        className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
          popular 
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {cta}
      </button>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  savings?: string;
  avatar: string;
}

export function TestimonialCard({ quote, author, role, savings, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
      <p className="text-lg mb-6 leading-relaxed text-white">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-white">
          {avatar}
        </div>
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-sm text-blue-100">{role}</div>
        </div>
        {savings && (
          <div className="ml-auto text-right">
            <div className="text-2xl font-bold text-green-300">{savings}</div>
            <div className="text-sm text-blue-100">saved</div>
          </div>
        )}
      </div>
    </div>
  );
}

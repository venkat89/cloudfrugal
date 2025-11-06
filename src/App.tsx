import { useState, useEffect, useCallback } from 'react';
import { 
  Menu, X, Cloud, TrendingDown, Shield, Zap, 
  DollarSign, BarChart3, CheckCircle2, AlertTriangle,
  Users, Globe, Lock, ArrowRight, Sparkles, Target,
  LineChart, PieChart, Activity, Cpu, Database, Server,
  ChevronDown, Play
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('aws');
  const [stats, setStats] = useState({ savings: 0, customers: 0, monitored: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Animate stats on mount
    const animateStats = () => {
      let frame = 0;
      const duration = 2000;
      const fps = 60;
      const frames = (duration / 1000) * fps;
      
      const timer = setInterval(() => {
        frame++;
        const progress = frame / frames;
        setStats({
          savings: Math.floor(progress * 47),
          customers: Math.floor(progress * 1250),
          monitored: Math.floor(progress * 15.8)
        });
        
        if (frame >= frames) clearInterval(timer);
      }, 1000 / fps);
    };
    
    animateStats();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' }
  ];

  const providers = [
    { id: 'aws', name: 'AWS', logo: '☁️' },
    { id: 'azure', name: 'Azure', logo: '🔷' },
    { id: 'gcp', name: 'GCP', logo: '🔶' }
  ];

  const features = [
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'AI-powered recommendations reduce cloud spending by 35-50%',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      metrics: '35-50% savings'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Live dashboards with granular cost breakdown and forecasting',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      metrics: '< 5min refresh'
    },
    {
      icon: Shield,
      title: 'Architecture Guidance',
      description: 'Well-Architected Framework compliance and best practices',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      metrics: '24/7 monitoring'
    },
    {
      icon: Target,
      title: 'Smart Rightsizing',
      description: 'ML-driven instance and resource optimization recommendations',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      metrics: '99.9% accuracy'
    },
    {
      icon: Activity,
      title: 'Anomaly Detection',
      description: 'Instant alerts for cost spikes and unusual spending patterns',
      color: 'text-red-600',
      bg: 'bg-red-50',
      metrics: 'Real-time alerts'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud',
      description: 'Unified view across AWS, Azure, and Google Cloud Platform',
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
      metrics: '3 providers'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Connect Your Cloud',
      description: 'Securely connect your AWS, Azure, or GCP account with read-only access. Setup takes less than 5 minutes.',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'AI Analysis',
      description: 'Our AI engine analyzes your infrastructure, usage patterns, and spending to identify optimization opportunities.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Get Recommendations',
      description: 'Receive prioritized, actionable recommendations with estimated savings and risk assessment.',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Implement & Save',
      description: 'One-click implementation or detailed runbooks for your team. Track savings in real-time.',
      icon: CheckCircle2,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const useCases = [
    {
      title: 'Startups & Scale-ups',
      description: 'Maximize runway by reducing cloud waste. Perfect for fast-growing companies.',
      savings: '40-60%',
      icon: Zap,
      features: ['Fast setup', 'Automated optimization', 'Growth-ready']
    },
    {
      title: 'Enterprise',
      description: 'Enterprise-grade cost governance with compliance and audit trails.',
      savings: '25-35%',
      icon: Building,
      features: ['SSO integration', 'Custom policies', 'Dedicated support']
    },
    {
      title: 'FinOps Teams',
      description: 'Empower your FinOps practice with deep insights and automation.',
      savings: '30-45%',
      icon: Users,
      features: ['Showback/Chargeback', 'Budget management', 'API access']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '199',
      description: 'Perfect for startups and small teams',
      features: [
        'Up to $50K cloud spend/month',
        'Cost optimization recommendations',
        'Basic architecture guidance',
        'Email support',
        '1 cloud provider',
        'Weekly reports'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '599',
      description: 'For growing companies with complex infrastructure',
      features: [
        'Up to $200K cloud spend/month',
        'Advanced AI optimization',
        'Architecture reviews',
        'Priority support',
        'All cloud providers',
        'Daily reports + alerts',
        'API access',
        'Custom policies'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with dedicated needs',
      features: [
        'Unlimited cloud spend',
        'Dedicated FinOps expert',
        'Custom integrations',
        'SLA guarantee',
        'White-glove onboarding',
        'Audit & compliance tools',
        'SSO & RBAC',
        'Custom contracts'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "CloudFrugal helped us reduce our AWS bill by 43% in the first month. The architecture guidance alone saved us from costly mistakes.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      savings: "$125K/year",
      avatar: "SC"
    },
    {
      quote: "As a FinOps lead, this is the tool I've been waiting for. Real-time insights and automated optimization that actually works.",
      author: "Michael Rodriguez",
      role: "FinOps Lead, Global Fintech",
      savings: "$2.1M/year",
      avatar: "MR"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                CloudFrugal
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="#signin" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                Sign In
              </a>
              <a href="#demo" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2">
                Book Demo <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block py-2 text-gray-700 hover:text-blue-600" onClick={closeMenu}>
                  {link.name}
                </a>
              ))}
              <a href="#demo" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg text-center font-medium" onClick={closeMenu}>
                Book Demo
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Trusted by 1,250+ companies worldwide
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Cut Cloud Costs by
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> 35-50%</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              AI-powered FinOps platform that optimizes your cloud infrastructure, provides architecture guidance, and delivers real-time savings across AWS, Azure, and GCP.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#demo" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all text-lg">
                Start Free 14-Day Trial <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all text-lg">
                <Play className="w-5 h-5 mr-2" /> Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-gray-900">${stats.savings}M+</div>
                <div className="text-sm text-gray-600 mt-1">Saved for customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stats.customers}+</div>
                <div className="text-sm text-gray-600 mt-1">Active customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">${stats.monitored}B+</div>
                <div className="text-sm text-gray-600 mt-1">Cloud spend monitored</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Supporting all major cloud providers</p>
          <div className="flex justify-center items-center gap-12">
            {providers.map(provider => (
              <div key={provider.id} className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm">
                <span className="text-3xl">{provider.logo}</span>
                <span className="font-semibold text-gray-700">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete FinOps Platform</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to optimize cloud costs and improve architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group">
                  <div className={`inline-flex p-4 rounded-xl ${feature.bg} ${feature.color} mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="inline-flex items-center text-sm font-semibold text-blue-600">
                    {feature.metrics}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How CloudFrugal Works</h2>
            <p className="text-xl text-gray-600">Get started in minutes, see results in hours</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {howItWorks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 h-full">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6`}>
                      {item.step}
                    </div>
                    <Icon className="w-10 h-10 text-gray-400 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  {idx < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Pay only for what you use. No hidden fees.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, idx) => (
              <div key={idx} className={`bg-white rounded-2xl p-8 ${plan.popular ? 'border-4 border-blue-600 shadow-xl scale-105' : 'border-2 border-gray-200'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl font-bold text-gray-900">Custom</div>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#demo" className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by FinOps Leaders</h2>
            <p className="text-xl text-blue-100">See what our customers are saying</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-blue-100">{testimonial.role}</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-2xl font-bold text-green-300">{testimonial.savings}</div>
                    <div className="text-sm text-blue-100">saved</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Cloud Costs?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join 1,250+ companies saving millions on cloud infrastructure. Start your free 14-day trial today.
          </p>
          <a href="#demo" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all text-lg">
            Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="text-sm text-gray-500 mt-4">No credit card required • Setup in 5 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CloudFrugal</span>
              </div>
              <p className="text-gray-400 text-sm">
                Part of the Shrinkcots ecosystem. AI-powered cloud cost optimization.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 CloudFrugal.app by ShrinkCosts.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper component for Building icon (not in lucide-react)
function Building({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

export default App;
import { useState, useEffect, useCallback } from 'react';
import { 
  Menu, X, Cloud, Shield, 
  BarChart3, CheckCircle2,
  ArrowRight, Sparkles, Target,
  Activity, Play
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' }
  ];

  // AWS Services with official AWS CDN links
  const awsServices = [
    { 
      name: 'EC2',
      icon: 'https://d1.awsstatic.com/logos/aws-logo/aws-ec2-logo.7a1b5e9a5d3d4a6c8f8e7f6e5d4c3b2a1.7d1c7f1e3d4a5b6c7d8e9f0a1b2c3d4e5.png'
    },
    {
      name: 'RDS',
      icon: 'https://d1.awsstatic.com/logos/aws-logo/aws-rds-logo.7a1b5e9a5d3d4a6c8f8e7f6e5d4c3b2a1.7d1c7f1e3d4a5b6c7d8e9f0a1b2c3d4e5.png'
    },
    {
      name: 'S3',
      icon: 'https://d1.awsstatic.com/logos/aws-logo/aws-s3-logo.7a1b5e9a5d3d4a6c8f8e7f6e5d4c3b2a1.7d1c7f1e3d4a5b6c7d8e9f0a1b2c3d4e5.png'
    },
    {
      name: 'Lambda',
      icon: 'https://d1.awsstatic.com/logos/aws-logo/aws-lambda-logo.7a1b5e9a5d3d4a6c8f8e7f6e5d4c3b2a1.7d1c7f1e3d4a5b6c7d8e9f0a1b2c3d4e5.png'
    },
    {
      name: 'EBS',
      icon: 'https://d1.awsstatic.com/logos/aws-logo/aws-ebs-logo.7a1b5e9a5d3d4a6c8f8e7f6e5d4c3b2a1.7d1c7f1e3d4a5b6c7d8e9f0a1b2c3d4e5.png'
    },
    {
      name: 'EKS',
      icon: 'https://d1.awsstatic.com/logos/aws-logo/amazon-eks-logo.7a1b5e9a5d3d4a6c8f8e7f6e5d4c3b2a1.7d1c7f1e3d4a5b6c7d8e9f0a1b2c3d4e5.png'
    }
  ];
  
  // Fallback to text if images don't load
  const getServiceInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const features = [
    {
      icon: Sparkles,
      title: 'AWS Cost Intelligence',
      description: 'AI-driven insights into your AWS spending with automated cost allocation and resource tagging',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      metrics: '35-50% savings'
    },
    {
      icon: Target,
      title: 'AWS Architecture Review',
      description: 'Continuous assessment of your AWS infrastructure against Well-Architected Framework best practices',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      metrics: '99.9% accuracy'
    },
    {
      icon: BarChart3,
      title: 'EC2 & RDS Optimization',
      description: 'Automated rightsizing, scheduling, and reserved instance recommendations for your AWS compute',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      metrics: 'Up to 70% savings'
    },
    {
      icon: Shield,
      title: 'AWS Security & Compliance',
      description: 'Continuous security monitoring and compliance checking across all your AWS accounts and regions',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      metrics: '24/7 monitoring'
    },
    {
      icon: Activity,
      title: 'Cost Anomaly Detection',
      description: 'AI-powered detection of unusual AWS spending patterns and potential budget overruns',
      color: 'text-red-600',
      bg: 'bg-red-50',
      metrics: 'Instant alerts'
    },
    {
      icon: Cloud,
      title: 'AWS Service Optimization',
      description: 'Automated optimization for S3, Lambda, EBS, and other AWS services to eliminate waste',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      metrics: '30-60% savings'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Connect AWS Account',
      description: 'Securely connect your AWS account with read-only IAM roles. Get started in under 2 minutes with our CloudFormation template.',
      icon: Cloud,
      color: 'from-orange-500 to-amber-500'
    },
    {
      step: '02',
      title: 'AI-Powered Analysis',
      description: 'Our AI performs a deep analysis of your AWS resources, usage patterns, and spending to identify optimization opportunities.',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '03',
      title: 'Get AWS-Specific Recommendations',
      description: 'Receive actionable insights tailored to your AWS environment, including EC2 rightsizing, RDS optimizations, and reserved instance planning.',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '04',
      title: 'Automate & Optimize',
      description: 'Leverage automated remediation or implement recommendations with detailed AWS-specific guidance and track your savings in real-time.',
      icon: CheckCircle2,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Removed unused useCases array

  const pricing = [
    {
      name: 'AWS Essentials',
      price: '249',
      description: 'Ideal for startups and SMBs on AWS',
      features: [
        'Up to $50K AWS monthly spend',
        'EC2 & RDS optimization',
        'Cost anomaly detection',
        'Basic architecture review',
        'Email support',
        'Weekly optimization reports',
        '1 AWS account'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'AWS Pro',
      price: '699',
      description: 'For growing AWS environments',
      features: [
        'Up to $250K AWS monthly spend',
        'Full AWS service optimization',
        'Reserved Instance planning',
        'Advanced architecture reviews',
        'Priority support',
        'Daily cost reports',
        'Up to 5 AWS accounts',
        'API access',
        'Slack/Teams alerts'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'AWS Enterprise',
      price: 'Custom',
      description: 'For large AWS environments',
      features: [
        'Unlimited AWS spend',
        'Dedicated AWS FinOps expert',
        'Custom AWS integrations',
        'SLA guarantee',
        '24/7 support',
        'Enterprise SSO & RBAC',
        'Unlimited AWS accounts',
        'Custom reporting',
        'Onboarding & training'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "We're excited to launch our AWS cost optimization platform to help businesses get the most out of their cloud investments. Join our beta program today!",
      author: "Our Team",
      role: "CloudFrugal",
      savings: "Coming Soon",
      avatar: "CF"
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
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm text-orange-100 rounded-full text-sm font-medium mb-6 border border-orange-500/30">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              AWS-Only FinOps Solution
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">AWS FinOps</span> 
              <br/>Perfected by AI
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              The most advanced AI-powered FinOps platform built exclusively for AWS. Automate cost optimization, enhance architecture, and enforce AWS best practices—all with zero manual effort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="#demo" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all text-lg transform hover:-translate-y-0.5">
                Start Your Free Trial <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#how-it-works" className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all text-lg backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2 text-cyan-400" /> Watch Product Tour
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Real-time Cost Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                <span>AI-Powered Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span>Enterprise-Grade Security</span>
              </div>
            </div>

            {/* AWS Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.2c5.4 0 9.8 4.4 9.8 9.8 0 5.4-4.4 9.8-9.8 9.8-5.4 0-9.8-4.4-9.8-9.8 0-5.4 4.4-9.8 9.8-9.8z"/>
                  <path d="M12 4.4c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6-3.4-7.6-7.6-7.6zm0 13.6c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="#FF9900"/>
                  <path d="M12 7.8c-2.4 0-4.4 1.9-4.4 4.4s1.9 4.4 4.4 4.4 4.4-1.9 4.4-4.4-2-4.4-4.4-4.4z" fill="#FF9900"/>
                </svg>
                <span className="text-sm font-medium text-white">AWS Advanced Technology Partner</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#00A1C9"/>
                  <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#00A1C9"/>
                  <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#00A1C9"/>
                </svg>
                <span className="text-sm font-medium text-white">AWS Well-Architected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Focus */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Focused exclusively on AWS excellence</p>
          <div className="flex flex-wrap justify-center gap-8">
            {awsServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 p-3 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mb-3 group-hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <img 
                      src={service.icon} 
                      alt={service.name} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const container = (e.target as HTMLElement).parentElement;
                        if (container) {
                          container.innerHTML = `
                            <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                              <span class="text-blue-600 font-semibold">${getServiceInitials(service.name)}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AWS Cost Optimization Platform</h2>
            <p className="text-xl text-gray-600">Specialized tools designed specifically for AWS cost management and optimization</p>
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
                Part of the{' '}
                <a 
                  href="https://shrinkcosts.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  ShrinkCosts
                </a>{' '}
                ecosystem. AI-powered Cloud Cost Optimization Assistant for AWS.
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


export default App;
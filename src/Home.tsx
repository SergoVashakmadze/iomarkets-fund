import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wallet, Shield, TrendingUp, BarChart3, Users, Globe, PieChart, Target, Layers, Award, CheckCircle, DollarSign, Building, Compass, LineChart, Briefcase, Lock, Star, Eye, Activity } from 'lucide-react';

// Floating Elements Component - Wealth Theme
const FloatingElements: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large gold circle - top left */}
    <div
      className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-yellow-500/10 float-elegant"
      style={{ animationDelay: '0s' }}
    />

    {/* Medium amber circle - top right */}
    <div
      className="absolute top-40 -right-10 w-60 h-60 rounded-full border border-amber-500/15 float-medium"
      style={{ animationDelay: '2s' }}
    />

    {/* Small bronze circle - middle left */}
    <div
      className="absolute top-1/2 left-10 w-40 h-40 rounded-full border border-orange-500/10 float-fast"
      style={{ animationDelay: '1s' }}
    />

    {/* Rotating ring - center right */}
    <div
      className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full border border-yellow-400/5 rotate-slow"
    />

    {/* Small floating dots */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-yellow-400/30 float-fast" style={{ animationDelay: '0.5s' }} />
    <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-amber-400/20 float-elegant" style={{ animationDelay: '1.5s' }} />
    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-orange-400/25 float-medium" style={{ animationDelay: '2.5s' }} />
  </div>
);

// Animated Lines Component - Wealth Theme
const AnimatedLines: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Horizontal wave line - top */}
    <svg className="absolute top-20 left-0 w-full h-20 opacity-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DAA520" stopOpacity="0" />
          <stop offset="50%" stopColor="#DAA520" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#DAA520" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,10 Q250,30 500,10 T1000,10 T1500,10 T2000,10"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        className="animate-shimmer"
      />
    </svg>

    {/* Diagonal line - bottom right */}
    <svg className="absolute bottom-40 right-0 w-96 h-96 opacity-10" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="amberDiagonal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="100" x2="100" y2="0" stroke="url(#amberDiagonal)" strokeWidth="0.5" />
    </svg>

    {/* Curved line - left side */}
    <svg className="absolute top-1/3 left-0 w-40 h-80 opacity-15" viewBox="0 0 50 100">
      <defs>
        <linearGradient id="bronzeCurve" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CD7F32" stopOpacity="0" />
          <stop offset="50%" stopColor="#CD7F32" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#CD7F32" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M50,0 Q0,50 50,100"
        fill="none"
        stroke="url(#bronzeCurve)"
        strokeWidth="1"
      />
    </svg>
  </div>
);

const IoMarketsFund: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <div className="min-h-screen text-white relative">
      <Helmet>
        <title>IoMarkets Asset Management</title>
        <meta name="title" content="IoMarkets Asset Management" />
        <meta name="description" content="IoMarkets Asset Management. Institutional asset management combining traditional investment strategies with digital asset innovation." />
        <meta property="og:title" content="IoMarkets Asset Management" />
        <meta property="og:description" content="IoMarkets Asset Management. Institutional asset management combining traditional investment strategies with digital asset innovation." />
        <meta property="og:site_name" content="IoMarkets" />
        <meta property="twitter:title" content="IoMarkets Asset Management" />
        <meta property="twitter:description" content="IoMarkets Asset Management. Institutional asset management combining traditional investment strategies with digital asset innovation." />
      </Helmet>

      {/* Hero Section - Animated Wealth Theme */}
      <motion.section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden hero-gradient-bg"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        {/* Background Layers */}
        <div className="absolute inset-0 elegant-grid" />
        <div className="absolute inset-0 diamond-pattern" />

        {/* Multi-color Orbs - Wealth Gold/Amber Theme */}
        <div className="absolute top-0 left-[15%] w-[600px] h-[600px] bg-[#DAA520] orb-hero" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#F59E0B] orb-hero" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-[#CD7F32] orb-hero" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[25%] w-[350px] h-[350px] bg-[#B8860B] orb-hero" style={{ animationDelay: '3s' }} />

        {/* Floating Elements */}
        <FloatingElements />

        {/* Animated Lines */}
        <AnimatedLines />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0C0A08]/80" />

        <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 glass-gold rounded-full px-6 py-2.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-gold absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                <span className="text-yellow-300 text-sm font-medium tracking-wide">Global Institutional Fund Management</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="text-white">Institutional-Grade</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
                  Global Investment
                </span>
                <br />
                <span className="text-white">Opportunities</span>
              </motion.h1>

              {/* Animated Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              >
                <span>Where </span>
                <span className="gradient-text-animated-gold font-bold">Wealth</span>
                <span> meets </span>
                <span className="gradient-text-animated-amber font-bold">Growth</span>
                <span> & </span>
                <span className="gradient-text-animated-bronze font-bold">Trust</span>
                <span> meets </span>
                <span className="gradient-text-animated-champagne font-bold">Legacy</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <button className="group relative bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Schedule Consultation
                  </span>
                </button>
                <button className="glass hover:bg-white/10 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Download Fund Materials
                </button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-slate-400"
              >
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-yellow-400" />
                  <span>$5.2B+ AUM</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <span>13.4% 10Y Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-400" />
                  <span>45+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span>850+ Clients</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-sm font-medium text-gray-400">Scroll to explore</span>
          <div className="w-7 h-12 rounded-full border-2 border-[#B8860B]/60 flex justify-center pt-2 shadow-lg shadow-[#B8860B]/20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#DAA520]"
            />
          </div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C0A08] to-transparent" />
      </motion.section>

      {/* Key Principles */}
      <section className="py-6 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-yellow-400" />
              <span>Global Markets</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-400" />
              <span>Sector Agnostic</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-400" />
              <span>Risk-Managed</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Institutional Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-gradient-to-b from-[#0C0A08] to-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Investment Approach</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Disciplined, research-driven investment strategies designed to deliver consistent risk-adjusted returns across market cycles
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Compass,
                  title: "Global Diversification",
                  description: "We invest across developed and emerging markets, currencies, and asset classes to minimize correlation risk and capture opportunities worldwide.",
                  gradient: "from-yellow-500 to-amber-500"
                },
                {
                  icon: BarChart3,
                  title: "Sector-Agnostic Strategy",
                  description: "Our flexible mandate allows us to allocate capital dynamically across all sectors based on relative value, growth potential, and market conditions.",
                  gradient: "from-amber-500 to-orange-500"
                },
                {
                  icon: Shield,
                  title: "Risk-First Mindset",
                  description: "Sophisticated risk management frameworks, portfolio hedging strategies, and downside protection to preserve capital through volatility.",
                  gradient: "from-orange-500 to-yellow-500"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-yellow-500/30 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-20 bg-gradient-to-br from-yellow-950/20 via-amber-950/20 to-orange-950/20 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Multi-Strategy Investment Platform</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Diversified investment strategies tailored to different risk profiles and return objectives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Global Equity Strategies",
                  description: "Long/short equity, market-neutral, and sector-rotation strategies across public markets worldwide with active alpha generation.",
                  metrics: ["Target: 12-18% annually", "Volatility: Medium-High"],
                  color: "from-yellow-500 to-amber-500"
                },
                {
                  icon: Building,
                  title: "Alternative Investments",
                  description: "Private equity co-investments, real estate, infrastructure, commodities, and structured credit across developed and emerging markets.",
                  metrics: ["Target: 15-22% annually", "Volatility: Medium"],
                  color: "from-amber-500 to-orange-500"
                },
                {
                  icon: LineChart,
                  title: "Fixed Income & Credit",
                  description: "Investment-grade and high-yield bonds, sovereign debt, convertibles, and distressed credit opportunities globally.",
                  metrics: ["Target: 6-10% annually", "Volatility: Low-Medium"],
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  icon: Activity,
                  title: "Quantitative & Systematic",
                  description: "Data-driven algorithmic strategies, statistical arbitrage, factor investing, and machine learning-powered trading systems.",
                  metrics: ["Target: 10-16% annually", "Volatility: Medium"],
                  color: "from-yellow-500 to-amber-500"
                },
                {
                  icon: Globe,
                  title: "Emerging Markets",
                  description: "Growth-focused investments in high-potential emerging economies across Asia, Latin America, Africa, and Eastern Europe.",
                  metrics: ["Target: 14-20% annually", "Volatility: High"],
                  color: "from-amber-500 to-orange-500"
                },
                {
                  icon: Layers,
                  title: "Multi-Asset Portfolios",
                  description: "Balanced allocations across equities, fixed income, alternatives, and digital assets with dynamic rebalancing.",
                  metrics: ["Target: 8-14% annually", "Volatility: Medium"],
                  color: "from-orange-500 to-yellow-500"
                }
              ].map((strategy, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${strategy.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <strategy.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{strategy.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{strategy.description}</p>
                  <div className="space-y-2">
                    {strategy.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-400">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Global Investment Footprint</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Active investments across six continents with local market expertise and on-the-ground research capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {[
                  { region: "North America", allocation: "35%", desc: "Technology, Healthcare, Financial Services" },
                  { region: "Europe", allocation: "25%", desc: "Industrials, Consumer Goods, Green Energy" },
                  { region: "Asia-Pacific", allocation: "20%", desc: "E-commerce, Manufacturing, Real Estate" },
                  { region: "Emerging Markets", allocation: "15%", desc: "Infrastructure, Resources, Fintech" },
                  { region: "Alternative Assets", allocation: "5%", desc: "Private Equity, Digital Assets, Commodities" }
                ].map((region, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-white">{region.region}</h4>
                      <span className="text-2xl font-bold text-yellow-400">{region.allocation}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{region.desc}</p>
                    <div className="mt-3 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-500 to-amber-500"
                        style={{ width: region.allocation }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, number: "45+", label: "Countries" },
                  { icon: Building, number: "1,500+", label: "Portfolio Holdings" },
                  { icon: Users, number: "120+", label: "Investment Professionals" },
                  { icon: Award, number: "20+", label: "Years Track Record" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Offerings */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Fund Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored investment vehicles for different investor types, risk tolerances, and time horizons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Flagship Global Fund",
                  type: "Multi-Strategy",
                  minInvestment: "$1M",
                  lockup: "Quarterly Liquidity",
                  fees: "1.5% / 20%",
                  icon: Star
                },
                {
                  name: "Emerging Markets Fund",
                  type: "Regional Focus",
                  minInvestment: "$500K",
                  lockup: "Semi-Annual",
                  fees: "2% / 25%",
                  icon: Globe
                },
                {
                  name: "Conservative Income Fund",
                  type: "Fixed Income",
                  minInvestment: "$250K",
                  lockup: "Monthly Liquidity",
                  fees: "1% / 15%",
                  icon: Shield
                },
                {
                  name: "Technology Growth Fund",
                  type: "Sector Specific",
                  minInvestment: "$500K",
                  lockup: "Quarterly Liquidity",
                  fees: "1.75% / 20%",
                  icon: TrendingUp
                },
                {
                  name: "Alternative Opportunities",
                  type: "Private Markets",
                  minInvestment: "$2M",
                  lockup: "3-Year Lock",
                  fees: "2% / 20%",
                  icon: Building
                },
                {
                  name: "Balanced Allocation Fund",
                  type: "60/40 Portfolio",
                  minInvestment: "$100K",
                  lockup: "Monthly Liquidity",
                  fees: "1.25% / 15%",
                  icon: PieChart
                }
              ].map((fund, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-500/50 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <fund.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{fund.name}</h3>
                      <p className="text-xs text-gray-400">{fund.type}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Minimum:</span>
                      <span className="text-white font-medium">{fund.minInvestment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Liquidity:</span>
                      <span className="text-white font-medium">{fund.lockup}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Fees:</span>
                      <span className="text-yellow-400 font-medium">{fund.fees}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-gradient-to-br from-yellow-950/30 via-amber-950/30 to-orange-950/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Proven Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Consistent track record of delivering superior risk-adjusted returns
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: DollarSign,
                  number: "$5.2B",
                  label: "Assets Under Management",
                  color: "text-yellow-400"
                },
                {
                  icon: TrendingUp,
                  number: "13.4%",
                  label: "10-Year Annualized Return",
                  color: "text-amber-400"
                },
                {
                  icon: Users,
                  number: "850+",
                  label: "Institutional Clients",
                  color: "text-orange-400"
                },
                {
                  icon: Award,
                  number: "1.3",
                  label: "Sharpe Ratio",
                  color: "text-yellow-400"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                  <div className="flex justify-center mb-4">
                    <div className={`w-14 h-14 rounded-full bg-gray-800/50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Types */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Who We Serve</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by the world's most sophisticated investors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Building,
                  title: "Institutional Investors",
                  description: "Pension funds, endowments, foundations, sovereign wealth funds, and insurance companies"
                },
                {
                  icon: Users,
                  title: "Family Offices",
                  description: "Ultra-high-net-worth families seeking professional management and diversification"
                },
                {
                  icon: Briefcase,
                  title: "Qualified Investors",
                  description: "Accredited investors meeting regulatory requirements for alternative investment products"
                }
              ].map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-6">
                    <type.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-yellow-950/40 via-amber-950/40 to-orange-950/40">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Explore Investment Opportunities?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Connect with our investor relations team to learn more about our funds, performance track record, and investment strategies.
              Access comprehensive fund documentation and schedule a confidential consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20">
                <Wallet className="w-5 h-5" />
                Request Information
              </button>
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Schedule Meeting
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-yellow-400" />
                <span>Confidential & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span>Institutional Grade</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoMarketsFund;

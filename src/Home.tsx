import React from 'react';
import { Helmet } from 'react-helmet';
import { Wallet, Shield, TrendingUp, BarChart3, Users, Globe, PieChart, Target, Layers, Award, CheckCircle, DollarSign, Building, Compass, LineChart, Briefcase, Lock, Star, Eye, Activity } from 'lucide-react';

const IoMarketsFund: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative">
      <Helmet>
        <title>IoMarkets® Asset Management</title>
        <meta name="title" content="IoMarkets® Asset Management" />
        <meta name="description" content="IoMarkets® Asset Management. Institutional asset management combining traditional investment strategies with digital asset innovation." />
        <meta property="og:title" content="IoMarkets® Asset Management" />
        <meta property="og:description" content="IoMarkets® Asset Management. Institutional asset management combining traditional investment strategies with digital asset innovation." />
        <meta property="og:site_name" content="IoMarkets®" />
        <meta property="twitter:title" content="IoMarkets® Asset Management" />
        <meta property="twitter:description" content="IoMarkets® Asset Management. Institutional asset management combining traditional investment strategies with digital asset innovation." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-950/30 via-indigo-950/30 to-purple-950/30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 text-blue-400 text-sm font-medium mb-4">
                <Globe className="w-4 h-4" />
                <span>Global Institutional Fund Management</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Institutional-Grade</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Global Investment
                </span>
                <br />
                <span className="text-white">Opportunities</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A sector-agnostic institutional investment platform managing diversified portfolios across global markets.
                We deliver sophisticated investment strategies, risk-adjusted returns, and world-class fund management for institutional investors, family offices, and qualified investors worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                  <Wallet className="w-5 h-5" />
                  Schedule Consultation
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Download Fund Materials
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-6 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <span>Global Markets</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              <span>Sector Agnostic</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>Risk-Managed</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Institutional Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
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
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  icon: BarChart3,
                  title: "Sector-Agnostic Strategy",
                  description: "Our flexible mandate allows us to allocate capital dynamically across all sectors based on relative value, growth potential, and market conditions.",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  icon: Shield,
                  title: "Risk-First Mindset",
                  description: "Sophisticated risk management frameworks, portfolio hedging strategies, and downside protection to preserve capital through volatility.",
                  gradient: "from-purple-500 to-blue-500"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all">
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
      <section className="py-20 bg-gradient-to-br from-blue-950/20 via-indigo-950/20 to-purple-950/20 border-y border-white/10">
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
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: Building,
                  title: "Alternative Investments",
                  description: "Private equity co-investments, real estate, infrastructure, commodities, and structured credit across developed and emerging markets.",
                  metrics: ["Target: 15-22% annually", "Volatility: Medium"],
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: LineChart,
                  title: "Fixed Income & Credit",
                  description: "Investment-grade and high-yield bonds, sovereign debt, convertibles, and distressed credit opportunities globally.",
                  metrics: ["Target: 6-10% annually", "Volatility: Low-Medium"],
                  color: "from-purple-500 to-blue-500"
                },
                {
                  icon: Activity,
                  title: "Quantitative & Systematic",
                  description: "Data-driven algorithmic strategies, statistical arbitrage, factor investing, and machine learning-powered trading systems.",
                  metrics: ["Target: 10-16% annually", "Volatility: Medium"],
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: Globe,
                  title: "Emerging Markets",
                  description: "Growth-focused investments in high-potential emerging economies across Asia, Latin America, Africa, and Eastern Europe.",
                  metrics: ["Target: 14-20% annually", "Volatility: High"],
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: Layers,
                  title: "Multi-Asset Portfolios",
                  description: "Balanced allocations across equities, fixed income, alternatives, and digital assets with dynamic rebalancing.",
                  metrics: ["Target: 8-14% annually", "Volatility: Medium"],
                  color: "from-purple-500 to-blue-500"
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
                        <CheckCircle className="w-4 h-4 text-blue-400" />
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
                      <span className="text-2xl font-bold text-blue-400">{region.allocation}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{region.desc}</p>
                    <div className="mt-3 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
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
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-blue-400" />
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
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      <span className="text-blue-400 font-medium">{fund.fees}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-gradient-to-br from-blue-950/30 via-indigo-950/30 to-purple-950/30">
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
                  color: "text-blue-400"
                },
                {
                  icon: TrendingUp,
                  number: "13.4%",
                  label: "10-Year Annualized Return",
                  color: "text-indigo-400"
                },
                {
                  icon: Users,
                  number: "850+",
                  label: "Institutional Clients",
                  color: "text-purple-400"
                },
                {
                  icon: Award,
                  number: "1.3",
                  label: "Sharpe Ratio",
                  color: "text-blue-400"
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
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                    <type.icon className="w-6 h-6 text-blue-400" />
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
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-950/40 via-indigo-950/40 to-purple-950/40">
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
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
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
                <Lock className="w-5 h-5 text-blue-400" />
                <span>Confidential & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
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

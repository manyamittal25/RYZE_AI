import Header from '../components/Header'
import Footer from '../components/Footer'

const FeaturesPage = () => {
  const featureCategories = [
    {
      title: 'Automated Campaign Management',
      description: 'Let AI handle the day-to-day optimization of your ad campaigns.',
      features: [
        {
          name: '24/7 Performance Monitoring',
          description: 'AI continuously monitors your campaigns across all platforms, identifying issues and opportunities in real-time.',
        },
        {
          name: 'Automated Budget Reallocation',
          description: 'Intelligently shift budget from underperforming campaigns to winners automatically.',
        },
        {
          name: 'Smart Bid Adjustments',
          description: 'AI adjusts bids based on performance data, time of day, device, and location.',
        },
        {
          name: 'Campaign Pausing & Resuming',
          description: 'Automatically pause low-performing campaigns and resume when conditions improve.',
        },
      ],
    },
    {
      title: 'AI-Powered Optimization',
      description: 'Advanced AI that learns from your data to optimize performance.',
      features: [
        {
          name: 'Keyword Optimization',
          description: 'Identify and pause low-performing keywords, add negative keywords, and discover new high-value terms.',
        },
        {
          name: 'Creative Generation',
          description: 'Generate high-performing ad creatives automatically with multiple variations for A/B testing.',
        },
        {
          name: 'Audience Targeting',
          description: 'Optimize audience targeting based on performance data and suggest new audience segments.',
        },
        {
          name: 'Ad Copy Optimization',
          description: 'AI analyzes your ad copy and suggests improvements to increase CTR and conversions.',
        },
      ],
    },
    {
      title: 'Intelligent Insights',
      description: 'Get actionable insights about your ad performance in plain English.',
      features: [
        {
          name: 'ChatGPT-Style Interface',
          description: 'Ask questions like "Why did ROAS drop?" or "Which campaigns are wasting spend?" Get instant answers.',
        },
        {
          name: 'Performance Audits',
          description: 'Comprehensive account audits that identify wasted spend, tracking issues, and optimization opportunities.',
        },
        {
          name: 'Predictive Analytics',
          description: 'Forecast campaign performance and identify trends before they impact your bottom line.',
        },
        {
          name: 'Custom Reports',
          description: 'Automated reports that build themselves. Get insights tailored to your business needs.',
        },
      ],
    },
    {
      title: 'Multi-Platform Support',
      description: 'Manage all your ad accounts from one place.',
      features: [
        {
          name: 'Google Ads',
          description: 'Full support for Search, Display, Shopping, YouTube, and Performance Max campaigns.',
        },
        {
          name: 'Meta Ads',
          description: 'Optimize Facebook and Instagram ads across all campaign types and objectives.',
        },
        {
          name: 'TikTok Ads',
          description: 'Manage TikTok advertising campaigns with AI-powered optimization.',
        },
        {
          name: 'Unified Dashboard',
          description: 'View performance across all platforms in one unified dashboard.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-primary-50/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Modern Ad Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to automate, optimize, and scale your ad campaigns with AI.
            </p>
          </div>
        </section>

        {/* Features by Category */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {featureCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`mb-24 ${categoryIndex !== featureCategories.length - 1 ? 'border-b border-gray-200 pb-24' : ''}`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See all features in action with a free 14-day trial.
            </p>
            <a
              href="#book-demo"
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default FeaturesPage


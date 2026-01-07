import Header from '../components/Header'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'

const PricingPage = () => {
  const faqs = [
    {
      question: 'Do I need a credit card to start?',
      answer: 'No, you can start your 14-day free trial without a credit card. We only ask for payment information after your trial period.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate any differences.',
    },
    {
      question: 'What happens if I exceed my monthly ad spend limit?',
      answer: 'We\'ll notify you when you approach your limit. You can upgrade your plan or we can work with you on a custom solution.',
    },
    {
      question: 'How quickly can I get started?',
      answer: 'Setup takes about 5 minutes. Just connect your ad accounts, and our AI will start analyzing your campaigns immediately.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use read-only access to your ad accounts and follow industry-leading security practices. Your data is encrypted and never shared.',
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
              Simple, Transparent
              <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business. All plans include a 14-day free trial.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help. Book a demo to see Ryze AI in action.
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

export default PricingPage


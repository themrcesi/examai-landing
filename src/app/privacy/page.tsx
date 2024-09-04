import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new services.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">3. Information Sharing and Disclosure</h2>
        <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">4. Data Security</h2>
        <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">5. Your Rights and Choices</h2>
        <p>You may access, update, or delete your account information at any time by logging into your account or contacting us directly.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">6. Changes to this Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
      </section>

      <p className="text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="mt-8">
        <Link href="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
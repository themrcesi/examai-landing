import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>By accessing or using ExamAI, you agree to be bound by these Terms of Service.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">2. Description of Service</h2>
        <p>ExamAI provides AI-powered exam creation and preparation tools for students and educators.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
        <p>All content and materials available on ExamAI are the property of ExamAI or its licensors and are protected by intellectual property laws.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
        <p>ExamAI shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.</p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
        <p>ExamAI reserves the right to modify these Terms of Service at any time. We will notify users of any significant changes.</p>
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
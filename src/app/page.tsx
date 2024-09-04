import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Features from '@/components/Features'
import LetterPullup from '@/components/magicui/letter-pullup'
import PulsatingButton from '@/components/magicui/pulsating-button'

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <LetterPullup words="Welcome to ExamAI" className="text-5xl font-bold mb-4" />
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Revolutionize exam preparation and creation with AI-powered, personalized learning experiences for students and teachers.
          </p>
          <div className="flex justify-center">
            <PulsatingButton 
              className="text-lg font-semibold bg-gray-900 hover:bg-gray-800 text-white"
              pulseColor="rgba(75, 85, 99, 0.3)" // Using a semi-transparent gray
              duration="2s"
            >
              <Link href="/waitlist">Join Waitlist</Link>
            </PulsatingButton>
          </div>
        </section>
      </div>

      <Features />

      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your learning experience?</h2>
          <p className="text-xl text-gray-600 mb-8">Join our waitlist and be the first to experience ExamAI when we launch.</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
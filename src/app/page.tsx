import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LeadCaptureForm from '@/components/LeadCaptureForm'
import { Brain, PenTool, BookOpen, FileCheck } from 'lucide-react'
import LetterPullup from '@/components/magicui/letter-pullup'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <LetterPullup words="Welcome to ExamAI" className="text-5xl font-bold mb-4" />
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Revolutionize your exam preparation with AI-powered, personalized learning experiences. Create custom exams, track your progress, and achieve your goals faster.
        </p>
        <LeadCaptureForm />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose ExamAI?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Brain, title: "AI-Powered Exams", description: "Generate custom exams tailored to your needs" },
            { icon: PenTool, title: "Interactive Simulations", description: "Practice in realistic exam conditions" },
            { icon: BookOpen, title: "Course Modeling", description: "Create structured courses and topic-specific tests" },
            { icon: FileCheck, title: "Preconfigured Templates", description: "Access exams for popular standardized tests" }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your learning experience?</h2>
        <p className="text-xl text-gray-600 mb-8">Join our waitlist and be the first to experience ExamAI when we launch.</p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" asChild>
            <a href="/waitlist">Join Waitlist</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/features">Explore Features</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
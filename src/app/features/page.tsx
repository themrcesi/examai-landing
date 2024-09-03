import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Brain, Upload, Settings, PenTool, BarChart3, BookOpen, Layers, FileCheck, Zap, Users, Lock } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">ExamAI Features</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Brain className="w-8 h-8 mr-2 text-primary" />
          AI-Based Exam Creation
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Upload className="w-6 h-6 mr-2 text-primary" />
              Custom Content Upload
            </h3>
            <p className="text-gray-600 mb-4">
              Upload your own study materials, textbooks, or course content. Our advanced AI analyzes your content to generate relevant and challenging questions tailored to your specific curriculum.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Support for various file formats (PDF, DOCX, TXT)</li>
              <li>Automatic content parsing and analysis</li>
              <li>Integration with popular learning management systems</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-primary" />
              Configuration Options
            </h3>
            <p className="text-gray-600 mb-4">
              Customize your exams to meet specific learning objectives and assessment criteria. Our flexible configuration options allow you to create the perfect exam for your needs.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Adjust number of questions and time limits</li>
              <li>Set difficulty levels (easy, medium, hard)</li>
              <li>Choose question types (multiple choice, essay, true/false)</li>
              <li>Specify topic weightings and coverage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <PenTool className="w-8 h-8 mr-2 text-primary" />
          Exam Simulation
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-primary" />
              Interactive Simulations
            </h3>
            <p className="text-gray-600 mb-4">
              Experience realistic exam conditions with our interactive simulation feature. Prepare thoroughly for your actual exams by familiarizing yourself with the format and pressure of test-taking.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Timed exams with automatic submission</li>
              <li>Randomized question order for each attempt</li>
              <li>Instant feedback and explanations for answers</li>
              <li>Ability to flag questions for review</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2 text-primary" />
              Progress Tracking
            </h3>
            <p className="text-gray-600 mb-4">
              Monitor your performance and improvement over time with our comprehensive analytics dashboard. Identify strengths and weaknesses to focus your study efforts effectively.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Detailed performance reports for each exam</li>
              <li>Topic-wise analysis of correct and incorrect answers</li>
              <li>Historical progress charts and trends</li>
              <li>Personalized study recommendations based on performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <BookOpen className="w-8 h-8 mr-2 text-primary" />
          Course & Topic Modeling
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Layers className="w-6 h-6 mr-2 text-primary" />
              Course Creation
            </h3>
            <p className="text-gray-600 mb-4">
              For advanced users, create structured courses with multiple topics and subtopics. Organize your content hierarchically to mirror your curriculum or study plan.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Intuitive course builder interface</li>
              <li>Drag-and-drop topic organization</li>
              <li>Attach relevant content to each topic or subtopic</li>
              <li>Set learning objectives for each course section</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2 text-primary" />
              Topic-Specific Exams
            </h3>
            <p className="text-gray-600 mb-4">
              Generate targeted exams for specific topics or entire courses. Ensure comprehensive coverage of your subject matter with our intelligent exam creation system.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Create exams for individual topics or full courses</li>
              <li>Automatic question distribution based on topic importance</li>
              <li>Mix questions from multiple topics for comprehensive tests</li>
              <li>Customizable difficulty progression throughout the exam</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FileCheck className="w-8 h-8 mr-2 text-primary" />
          Preconfigured Exams
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="w-6 h-6 mr-2 text-primary" />
            Popular Exam Templates
          </h3>
          <p className="text-gray-600 mb-4">
            Access a growing library of preconfigured exams for popular standardized tests and professional certifications. Benefit from expertly curated content and proven exam structures.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Ready-to-use templates for exams like MIR (Spanish medical residency exam)</li>
            <li>Regularly updated content to reflect the latest exam patterns</li>
            <li>Ability to customize preconfigured exams to your needs</li>
            <li>Community-contributed exam templates (coming soon)</li>
          </ul>
        </div>
      </section>

      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Ready to revolutionize your exam preparation?</h2>
        <p className="text-xl text-gray-600 mb-8">Join our waitlist and be the first to experience ExamAI when we launch.</p>
        <Button size="lg" asChild>
          <Link href="/waitlist">Join Waitlist</Link>
        </Button>
      </section>
    </div>
  )
}
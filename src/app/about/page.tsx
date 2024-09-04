'use client'

import { motion } from 'framer-motion'
import { Brain, Users, Target, Zap, Award, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-12 h-12 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">About ExamAI</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          ExamAI is revolutionizing exam preparation with cutting-edge AI technology, 
          providing personalized learning experiences for students and powerful tools for educators.
        </p>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <div className="bg-primary/10 p-8 rounded-lg text-center">
          <p className="text-xl">
            To empower learners and educators worldwide by harnessing the power of AI 
            to create tailored, effective, and engaging exam preparation experiences.
          </p>
        </div>
      </motion.section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="AI-Powered Exams"
            description="Generate custom exams tailored to individual learning needs using advanced AI algorithms."
          />
          <FeatureCard
            icon={Users}
            title="For Students & Teachers"
            description="Comprehensive tools for both learners and educators, enhancing the entire educational experience."
          />
          <FeatureCard
            icon={Target}
            title="Personalized Learning"
            description="Adaptive study plans and progress tracking to optimize exam preparation."
          />
          <FeatureCard
            icon={Zap}
            title="Interactive Simulations"
            description="Realistic exam simulations with instant feedback to boost confidence and performance."
          />
          <FeatureCard
            icon={Award}
            title="Preconfigured Exams"
            description="Access to a growing library of popular standardized tests and professional certifications."
          />
          <FeatureCard
            icon={Globe}
            title="Global Accessibility"
            description="Available worldwide, supporting multiple languages and educational systems."
          />
        </div>
      </section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-4">Join the ExamAI Revolution</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Be part of the future of education. Whether you&apos;re a student aiming for success 
          or an educator looking to enhance your teaching, ExamAI is here to support your journey.
        </p>
        <Button size="lg" asChild>
          <Link href="/waitlist">Join Our Waitlist</Link>
        </Button>
      </motion.section>
    </div>
  )
}
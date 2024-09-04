'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Brain, Upload, Settings, PenTool, BarChart3, BookOpen, FileCheck, Clock, Trophy, Calendar, Layers, FolderTree, Target, Users, Clipboard } from 'lucide-react'

export default function FeaturesPage() {
  const [isTeacher, setIsTeacher] = useState(false)

  const FeatureSection = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <Icon className="w-8 h-8 mr-2 text-primary" />
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {children}
      </div>
    </section>
  )

  const FeatureCard = ({ icon: Icon, title, description, list }: { icon: any, title: string, description: string, list: string[] }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Icon className="w-6 h-6 mr-2 text-primary" />
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-disc list-inside text-gray-600">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )

  const studentFeatures = (
    <>
      <FeatureSection icon={Brain} title="AI-Based Exam Creation">
        <FeatureCard
          icon={Upload}
          title="Custom Content Upload"
          description="Upload your study materials for personalized exam questions."
          list={[
            "Support for various file formats (PDF, DOCX, TXT)",
            "AI analysis of uploaded content",
            "Personalized question generation"
          ]}
        />
        <FeatureCard
          icon={Settings}
          title="Configuration Options"
          description="Customize your exams to meet specific learning objectives."
          list={[
            "Specify number of questions and exam duration",
            "Set difficulty levels (easy, medium, hard)",
            "Choose question types (multiple choice, essay, true/false)",
            "Focus on specific topics within uploaded content"
          ]}
        />
      </FeatureSection>

      <FeatureSection icon={PenTool} title="Exam Simulation">
        <FeatureCard
          icon={Clock}
          title="Interactive Simulations"
          description="Experience realistic exam conditions with our interactive simulation feature."
          list={[
            "Timed exams with automatic submission",
            "Real-time progress tracking",
            "Immediate feedback after each question or at exam end"
          ]}
        />
        <FeatureCard
          icon={BarChart3}
          title="Progress Tracking"
          description="Monitor your performance and improvement over time."
          list={[
            "Detailed analytics showing performance over time",
            "Breakdown by topic, question type, and difficulty level",
            "Historical performance tracking",
            "Identification of improvement areas and trends"
          ]}
        />
      </FeatureSection>

      <FeatureSection icon={FileCheck} title="Preconfigured Exams">
        <FeatureCard
          icon={BookOpen}
          title="Access to Popular Exams"
          description="Practice with preconfigured exams for specific fields."
          list={[
            "Access to exams like MIR for medical students in Spain",
            "Default settings with customization options",
            "Regular updates to reflect current exam patterns"
          ]}
        />
        <FeatureCard
          icon={Trophy}
          title="Exam Challenges"
          description="Compete with peers on preconfigured or custom exams."
          list={[
            "Weekly or monthly exam challenges",
            "Leaderboards and performance comparisons",
            "Earn badges and achievements"
          ]}
        />
      </FeatureSection>

      <FeatureSection icon={Layers} title="Course & Topic Modeling">
        <FeatureCard
          icon={FolderTree}
          title="Course Creation"
          description="For advanced users, create structured courses with multiple topics and subtopics. Organize your content hierarchically to mirror your curriculum or study plan."
          list={[
            "Intuitive course builder interface",
            "Attach relevant content to each topic or subtopic",
          ]}
        />
        <FeatureCard
          icon={Target}
          title="Topic-Specific Exams"
          description="Generate targeted exams for specific topics or entire courses. Ensure comprehensive coverage of your subject matter with our intelligent exam creation system."
          list={[
            "Create exams for individual topics or full courses",
            "Automatic question distribution based on topic importance",
            "Mix questions from multiple topics for comprehensive tests",
            "Customizable difficulty progression throughout the exam"
          ]}
        />
      </FeatureSection>

      <FeatureSection icon={Calendar} title="Study Planner">
        <FeatureCard
          icon={Brain}
          title="Personalized Study Plan"
          description="Get AI-powered study recommendations based on your performance."
          list={[
            "Customized study plans based on exam schedules",
            "Recommended topics to focus on",
            "Adaptive learning paths"
          ]}
        />
        <FeatureCard
          icon={Clock}
          title="Reminders and Notifications"
          description="Stay on track with automated reminders and updates."
          list={[
            "Exam schedule reminders",
            "Study session notifications",
            "Alerts for new content and features"
          ]}
        />
      </FeatureSection>
    </>
  )

  const teacherFeatures = (
    <>
      <FeatureSection icon={Brain} title="AI-Based Exam Creation">
        <FeatureCard
          icon={Upload}
          title="Custom Content Upload"
          description="Upload your course materials for AI-powered exam generation."
          list={[
            "Support for lecture notes, textbooks, and other resources",
            "AI analysis of uploaded content",
            "Automatic question generation based on course material"
          ]}
        />
        <FeatureCard
          icon={Settings}
          title="Advanced Configuration Options"
          description="Create tailored exams with advanced customization options."
          list={[
            "Configure number of questions, types, and difficulty levels",
            "Set topic weightings and coverage",
            "Customize exam duration and scoring rules"
          ]}
        />
      </FeatureSection>

      <FeatureSection icon={FileCheck} title="Exam Management">
        <FeatureCard
          icon={BookOpen}
          title="Question Pool Management"
          description="Organize and manage your AI-generated questions efficiently."
          list={[
            "Categorize questions by topic, difficulty, and type",
            "Edit and refine AI-generated questions",
            "Create custom question sets for different exams"
          ]}
        />
        <FeatureCard
          icon={Settings}
          title="Institutional Branding"
          description="Customize exams with your institution's branding."
          list={[
            "Add institution name, logo, and exam details",
            "Customize exam templates and layouts",
            "Generate professional-looking exam papers"
          ]}
        />
      </FeatureSection>

      <FeatureSection icon={Layers} title="Course & Topic Modeling">
        <FeatureCard
          icon={FolderTree}
          title="Curriculum Mapping"
          description="Create a comprehensive digital representation of your curriculum, aligning with educational standards and learning objectives."
          list={[
            "Map courses to specific learning outcomes and standards",
            "Create hierarchical structure of courses, units, and lessons",
            "Link resources and assessments to specific curriculum elements"
          ]}
        />
        {/* <FeatureCard
          icon={Users}
          title="Collaborative Course Design"
          description="Work together with colleagues to design and refine courses, ensuring consistency across the curriculum."
          list={[
            "Real-time collaboration on course structure and content",
            "Version control and change tracking for curriculum updates",
            "Role-based access for department heads, teachers, and administrators"
          ]}
        /> */}
        <FeatureCard
          icon={Target}
          title="Adaptive Assessment Creation"
          description="Generate assessments that adapt to your curriculum structure and learning objectives."
          list={[
            "Create exams that cover multiple courses or specific topics",
            "Automatically balance questions based on curriculum weightings",
            "Generate formative and summative assessments aligned with learning outcomes"
          ]}
        />
        {/* <FeatureCard
          icon={Clipboard}
          title="Curriculum Analytics"
          description="Gain insights into your curriculum's effectiveness and student performance across different topics and courses."
          list={[
            "Analyze student performance data in relation to curriculum elements",
            "Identify gaps or overlaps in curriculum coverage",
            "Generate reports on curriculum effectiveness for accreditation purposes"
          ]}
        /> */}
      </FeatureSection>
    </>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">ExamAI Features</h1>
      
      <div className="flex items-center justify-center space-x-2 mb-8">
        <span className={`text-lg ${!isTeacher ? 'font-bold' : ''}`}>Student</span>
        <Switch
          checked={isTeacher}
          onCheckedChange={setIsTeacher}
          aria-label="Toggle between student and teacher features"
        />
        <span className={`text-lg ${isTeacher ? 'font-bold' : ''}`}>Teacher</span>
      </div>
      
      {isTeacher ? teacherFeatures : studentFeatures}

      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Ready to revolutionize your {isTeacher ? 'teaching' : 'learning'} experience?</h2>
        <p className="text-xl text-gray-600 mb-8">Join our waitlist and be the first to experience ExamAI when we launch.</p>
        <Button size="lg" asChild>
          <Link href="/join-waitlist">Join Waitlist</Link>
        </Button>
      </section>
    </div>
  )
}
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { Brain, ClipboardCheck, BookOpen, Layers, Users, BarChart } from 'lucide-react';

function Features() {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">For Students</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="AI-Based Exam Creation"
              description="Upload your study materials and create personalized exams tailored to your needs."
              icon={Brain}
            />
            <FeatureCard
              title="Exam Simulation"
              description="Take interactive simulated exams with real-time feedback and progress tracking."
              icon={ClipboardCheck}
            />
            <FeatureCard
              title="Preconfigured Exams"
              description="Access popular preconfigured exams like the MIR exam for medical students."
              icon={BookOpen}
            />
            <FeatureCard
              title="Course & Topic Modeling"
              description="Model courses, topics, and generate exams aligned with your syllabus."
              icon={Layers}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">For Teachers</h3>
          <p className="text-center text-gray-600 mb-8">
            In addition to all the features available to students, teachers also have access to:
          </p>
          <div className="flex flex-nowrap justify-center gap-8 overflow-x-auto">
            <div className="flex-shrink-0 w-80">
              <FeatureCard
                title="Advanced Exam Creation"
                description="Create custom exams with advanced configuration options and institutional branding."
                icon={Brain}
              />
            </div>
            {/* <div className="flex-shrink-0 w-80">
              <FeatureCard
                title="Classroom Management"
                description="Track student performance, attendance, and generate detailed reports."
                icon={Users}
              />
            </div>
            <div className="flex-shrink-0 w-80">
              <FeatureCard
                title="Result Analytics"
                description="Get in-depth analytics on student performance and identify areas for improvement."
                icon={BarChart}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
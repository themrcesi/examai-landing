import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { Brain, ClipboardCheck, Layers, BookOpen } from 'lucide-react';

function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="AI-Based Exam Creation"
            description="Upload custom content and configure exams with specific parameters like question count, difficulty, and types."
            icon={Brain}
          />
          <FeatureCard
            title="Exam Simulation"
            description="Take interactive simulated exams, receive instant feedback, and track your progress with detailed analytics."
            icon={ClipboardCheck}
          />
          <FeatureCard
            title="Course & Topic Modeling"
            description="Advanced users can create structured courses, model topics, and generate exams for entire courses or specific topics."
            icon={Layers}
          />
          <FeatureCard
            title="Preconfigured Exams"
            description="Access popular preconfigured exams like the MIR exam, based on content already available on the platform."
            icon={BookOpen}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
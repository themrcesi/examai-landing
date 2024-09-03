'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from '@/hooks/use-toast'
import Link from 'next/link'

export default function JoinWaitlistPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to our privacy policy before joining the waitlist.",
        variant: "destructive",
      })
      return
    }
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      if (response.ok) {
        toast({
          title: "You're on the list!",
          description: "We'll notify you when ExamAI launches.",
        })
        setName('')
        setEmail('')
        setConsent(false)
      } else {
        throw new Error('Failed to join waitlist')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem joining the waitlist. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/20 to-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Join the ExamAI Waitlist</h1>
        
        <div className="mb-8 relative">
          <svg className="w-full h-48" viewBox="0 0 400 150" preserveAspectRatio="none">
            <motion.path
              d="M0,100 C150,0 250,200 400,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                r="3"
                fill="currentColor"
                className="text-primary"
                initial={{ cx: 0, cy: 100 }}
                animate={{
                  cx: [0, 400],
                  cy: [100, 0, 200, 100],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'linear',
                }}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl font-semibold text-primary">AI-Powered Learning</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow-lg">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
            />
            <Label htmlFor="consent" className="text-sm">
              I agree to the{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                privacy policy
              </Link>{' '}
              and consent to receive updates about ExamAI.
            </Label>
          </div>
          <Button type="submit" className="w-full">Join Waitlist</Button>
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Be the first to experience the future of exam preparation.
        </p>
      </motion.div>
    </div>
  )
}
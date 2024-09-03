'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export default function LeadCaptureForm() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted')
    // TODO: Implement actual form submission logic
    console.log('Submitted email:', email)
    toast({
      title: "Success!",
      description: "You've been added to our waitlist.",
      duration: 5000, // 5 seconds
      className: "w-96 p-4", // Increase width and padding
    })
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm mx-auto items-center space-x-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Join Waitlist</Button>
    </form>
  )
}
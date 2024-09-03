import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          ExamAI
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/features" className="text-gray-600 hover:text-primary">Features</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
          </ul>
        </nav>
        <div>
          <Button asChild>
            <a href="/waitlist">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
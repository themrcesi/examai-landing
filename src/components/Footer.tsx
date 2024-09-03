import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ExamAI</h3>
            <p className="text-sm text-gray-600">The future of AI-powered exam preparation. Coming soon.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-sm text-gray-600 hover:text-primary">Features</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} ExamAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
import Link from "next/link"
import { Code } from "lucide-react"

export default function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Tech stack", href: "/tech-stack" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="py-12 bg-black/90 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">
                Code <span className="text-white/80">Cadence</span>
                <span className="text-white">.</span>
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} Code Cadence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

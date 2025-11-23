import Link from "next/link"
import { ArrowLeft } from "lucide-react"

type Project = {
  title: string
  description: string[]
  status: "active" | "in-development"
  timeline?: string
  link?: string
  linkText?: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "ResumeCraft – Professional Resume Builder",
      description: [
        "AI-powered resume creation system featuring smart suggestions, ATS optimization, and customizable templates for professional job applications.",
      ],
      status: "active",
      timeline: "Mar 2025 – Present",
      link: "https://craftresume.vercel.app",
      linkText: "View Project",
    },
    {
      title: "LegonAttend – QR Code–Based Attendance System",
      description: [
        "QR code–based tool for lecturers and event organizers, featuring unique session codes, real-time tracking, and mobile-first design.",
      ],
      status: "in-development",
      link: "https://legonattend.vercel.app",
      linkText: "View Project",
    },
    {
      title: "GigaRandoBot – Telegram Random Number Generator Bot",
      description: [
        "Generates random numbers within specified ranges, offering custom and quick-pick options for games and lotteries.",
      ],
      status: "active",
      timeline: "Dec 2024 – Present",
      link: "https://t.me/gigarandobot",
      linkText: "View Project",
    },
    {
      title: "Code Comparator",
      description: [
        "Fully deployed AI-powered tool for comparing code snippets, visualizing diffs, and integrating seamlessly with CI pipelines.",
        "Empowers developers to quickly understand changes and maintain code quality across projects.",
      ],
      status: "active",
      timeline: "Apr 2025 – Present",
      link: "https://codecomparator.vercel.app",
      linkText: "View Project",
    },
    {
      title: "Event Whisper",
      description: [
        "An AI-driven event discovery assistant, curating local meetups, workshops, and conferences tailored to your interests.",
        "Features personalized recommendations, seamless RSVP integration, and real-time updates.",
      ],
      status: "in-development",
      timeline: "Launching Q2 2025",
      linkText: "Coming Soon",
    },
    {
      title: "Checkmate Arena",
      description: [
        "Upcoming online chess platform offering live ranked matches, puzzles, and community tournaments. Solitaire and Sudoku added!",
        "Features player coaching tools, interactive tutorials, and a global leaderboard for chess enthusiasts.",
      ],
      status: "active",
      timeline: "May 2025 – Present",
      link: "https://checkmatearena-nikm.onrender.com",
      linkText: "View Project",
    },
    {
      title: "Daily Scope News",
      description: [
        "A lightweight, frontend-only news site that delivers real-time updates from top sources like The Guardian, NewsAPI, and TheSportsDB.",
      ],
      status: "active",
      link: "https://daily-scope-news.vercel.app/",
      linkText: "View Project",
    },
    {
      title: "Sceneradar",
      description: [
        "SceneRadar is a web-based platform for discovering trending movies, scenes, and shows. It features user ratings, reviews, and the latest movie news for film enthusiasts.",
      ],
      status: "active",
      timeline: "May 2025 – Present",
      link: "https://sceneradar.onrender.com",
      linkText: "View Project",
    },
    {
      title: "Updevted",
      description: [
        "A community-driven platform dedicated to updating developers on the latest tools, frameworks, and trends in the tech space.",
      ],
      status: "active",
      timeline: "Apr 2025 – Present",
      link: "https://updevted.onrender.com",
      linkText: "View Project",
    },
  ]

  return (
    <main className="pt-24 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Our Projects</h1>
          <p className="text-lg text-white/60">Innovative solutions we're working on</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 flex flex-col h-full"
            >
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "active" ? "bg-green-500/20 text-green-400" : "bg-amber-500/20 text-amber-400"
                  }`}
                >
                  {project.status === "active" ? "Active" : "In Development"}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
              <div className="mb-4 flex-grow">
                {project.description.map((paragraph, i) => (
                  <p key={i} className="text-white/70 mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>
              {project.timeline && <div className="text-sm text-white/50 mb-4">{project.timeline}</div>}
              <div className="mt-auto">
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-white text-sm transition-colors"
                  >
                    {project.linkText || "View Project"}
                  </Link>
                ) : (
                  <span className="inline-block px-4 py-2 bg-white/5 rounded-md text-white/40 text-sm cursor-not-allowed">
                    {project.linkText || "Coming Soon"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

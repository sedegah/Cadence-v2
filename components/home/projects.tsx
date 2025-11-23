"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

type Project = {
  title: string
  description: string[]
  status: "active" | "in-development"
  timeline?: string
  link?: string
  linkText?: string
}

export default function Projects() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

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
  ]

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * i,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section
      id="projects"
      className={cn(
        "py-20 theme-transition",
        isDark ? "bg-gradient-to-b from-black to-gray-900" : "bg-gradient-to-b from-white to-gray-50",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUpVariants}
            custom={0}
            className={cn("text-3xl md:text-4xl font-bold mb-3", isDark ? "text-white" : "text-gray-900")}
          >
            Our projects
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            custom={1}
            className={cn("text-lg", isDark ? "text-white/60" : "text-gray-600")}
          >
            Innovative solutions we're working on
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              custom={index + 2}
              className={cn(
                "rounded-lg p-6 border flex flex-col h-full theme-transition",
                isDark ? "bg-white/5 backdrop-blur-sm border-white/10" : "bg-white border-gray-200 shadow-sm",
              )}
            >
              <div className="mb-4">
                <span
                  className={cn(
                    "inline-block px-3 py-1 rounded-full text-xs font-medium",
                    project.status === "active"
                      ? isDark
                        ? "bg-green-500/20 text-green-400"
                        : "bg-green-100 text-green-700"
                      : isDark
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-amber-100 text-amber-700",
                  )}
                >
                  {project.status === "active" ? "Active" : "In Development"}
                </span>
              </div>
              <h3 className={cn("text-xl font-semibold mb-3", isDark ? "text-white" : "text-gray-900")}>
                {project.title}
              </h3>
              <div className="mb-4 flex-grow">
                {project.description.map((paragraph, i) => (
                  <p key={i} className={cn("mb-2", isDark ? "text-white/70" : "text-gray-600")}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {project.timeline && (
                <div className={cn("text-sm mb-4", isDark ? "text-white/50" : "text-gray-500")}>{project.timeline}</div>
              )}
              <div className="mt-auto">
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-block px-4 py-2 rounded-md text-sm transition-colors",
                      isDark
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900",
                    )}
                  >
                    {project.linkText || "View Project"}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      "inline-block px-4 py-2 rounded-md text-sm cursor-not-allowed",
                      isDark ? "bg-white/5 text-white/40" : "bg-gray-100 text-gray-400",
                    )}
                  >
                    {project.linkText || "Coming Soon"}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
          custom={projects.length + 2}
          className="mt-10 text-center"
        >
          <Link
            href="/projects"
            className={cn(
              "inline-block px-6 py-3 rounded-md transition-colors",
              isDark ? "bg-white/10 hover:bg-white/20 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900",
            )}
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

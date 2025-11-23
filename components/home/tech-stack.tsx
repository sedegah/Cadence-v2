"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CodeIcon, Server, Database, Wrench } from "lucide-react"

type TechCategory = {
  title: string
  icon: React.ReactNode
  items: string[]
}

export default function TechStack() {
  const categories: TechCategory[] = [
    {
      title: "Frontend",
      icon: <CodeIcon className="h-6 w-6 text-purple-400" />,
      items: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js"],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-cyan-400" />,
      items: ["Node.js", "Python", "Express", "Firebase", "PHP"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-teal-400" />,
      items: ["PostgreSQL", "MySQL", "Redis"],
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6 text-blue-400" />,
      items: ["Git", "Docker", "AWS", "Vercel"],
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
    <section id="tech-stack" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUpVariants} custom={0} className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Our tech stack
          </motion.h2>
          <motion.p variants={fadeInUpVariants} custom={1} className="text-lg text-white/60">
            Technologies we love to work with
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              custom={index + 2}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-white/10 rounded-md text-white/80 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

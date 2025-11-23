"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Laptop, Smartphone, BarChart, Brain, Database, Microscope } from "lucide-react"

type Competency = {
  title: string
  description: string
  icon: React.ReactNode
}

export default function Competencies() {
  const competencies: Competency[] = [
    {
      title: "Web Development",
      description: "Creating responsive, user-friendly web interfaces with modern frameworks like React and Vue.js.",
      icon: <Laptop className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "Mobile Development",
      description: "Crafting cross-platform mobile apps with Flutter and React Native.",
      icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
    },
    {
      title: "Data Analysis",
      description: "Extracting insights from complex datasets using statistical methods and visualization tools.",
      icon: <BarChart className="h-6 w-6 text-teal-400" />,
    },
    {
      title: "Machine Learning",
      description: "Building intelligent systems and predictive models using Python, TensorFlow, and Scikit-Learn.",
      icon: <Brain className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "Database Design",
      description: "Creating efficient, scalable database structures tailored to your application's specific needs.",
      icon: <Database className="h-6 w-6 text-indigo-400" />,
    },
    {
      title: "Academic Research",
      description: "Conducting rigorous scientific investigations and publishing peer-reviewed papers.",
      icon: <Microscope className="h-6 w-6 text-violet-400" />,
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
    <section id="competencies" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUpVariants} custom={0} className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Core competencies
          </motion.h2>
          <motion.p variants={fadeInUpVariants} custom={1} className="text-lg text-white/60">
            What sets us apart
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              custom={index + 2}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {competency.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{competency.title}</h3>
              <p className="text-white/70">{competency.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

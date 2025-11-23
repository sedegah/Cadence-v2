"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Users } from "lucide-react"

export default function About() {
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
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUpVariants} custom={0} className="text-3xl md:text-4xl font-bold mb-3 text-white">
            About us
          </motion.h2>
          <motion.p variants={fadeInUpVariants} custom={1} className="text-lg text-gray-400">
            Who we are and what we do
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={2}
            className="space-y-4 max-w-3xl mx-auto text-white"
          >
            <p>
              Code Cadence is more than just a web development company — we're your creative and technical partners in
              the digital space. Founded with a passion for clean code, elegant design, and seamless user experiences,
              we help businesses and individuals build powerful online presences that don't just look good, but work
              beautifully.
            </p>
            <p>
              From simple landing pages to full-scale web applications, we combine cutting-edge technologies with
              thoughtful design to create solutions that are fast, functional, and future-proof. At Code Cadence, we
              believe that every line of code should have rhythm — a cadence — that brings ideas to life and keeps users
              coming back.
            </p>
            <p>
              Whether you're starting from scratch or looking to upgrade your digital presence, our team is ready to
              craft a solution that fits your vision and goals.
            </p>
            <p className="text-xl font-medium text-white">Let's build something incredible together.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            <motion.div
              variants={fadeInUpVariants}
              custom={3}
              className="bg-[#111] rounded-lg p-6 border border-gray-800"
            >
              <div className="w-12 h-12 rounded-full bg-[#0c2a38] flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Quality Code</h3>
              <p className="text-gray-300">
                We write clean, maintainable code that follows industry best practices and standards.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              custom={4}
              className="bg-[#111] rounded-lg p-6 border border-gray-800"
            >
              <div className="w-12 h-12 rounded-full bg-[#0c2a38] flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-gray-300">
                We stay at the forefront of technology trends to provide cutting-edge solutions.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              custom={5}
              className="bg-[#111] rounded-lg p-6 border border-gray-800"
            >
              <div className="w-12 h-12 rounded-full bg-[#0c2a38] flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Collaboration</h3>
              <p className="text-gray-300">
                We work closely with our clients to ensure their vision is realized effectively.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

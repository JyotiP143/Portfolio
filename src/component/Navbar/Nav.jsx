// "use client";

// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../../index.css";

// export default function Home() {
//   const [activeLink, setActiveLink] = useState("Home");

//   return (
//     <div className="md:min-h-screen bg-[#1a1e23] relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00e5ff]/20 pointer-events-none">
//       </div>
//       <div className=" px-4 sm:px-6 lg:px-8 relative">
//         <div className="bg-[#232830] rounded-3xl shadow-2xl overflow-hidden my-8 relative">
//           <header className="flex justify-between items-center p-8">
//             <div className="text-white text-2xl font-bold">Portfolio</div>
//             <nav className="hidden md:flex space-x-8">
//               {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
//                 <Link
//                   href="#"
//                   key={item}
//                   className={`${item === activeLink ? "text-[#00e5ff]" : "text-white"
//                     } hover:text-[#00e5ff] transition-colors`}
//                   onClick={() => setActiveLink(item)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>
//           </header>
//           <main className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
//             <div className="md:w-1/2 space-y-6">
//               <h2 className="text-white text-2xl">Hello, It's Me</h2>
//               <h1 className="text-white text-5xl md:text-6xl font-bold">Jyoti Patil</h1>
//               <h3 className="text-2xl text-white">
//                 And I'm a <span className="text-[#00e5ff]">Frontend Developer</span>
//               </h3>
//               <p className="text-gray-400 max-w-lg">
//                 Passionate about creating interactive applications and experiences on the web.
//               </p>
//               <div className="flex space-x-4 pt-4">
//                 {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
//                   <Link
//                     href="#"
//                     key={index}
//                     className="bg-[#232830] border border-[#00e5ff]/30 p-3 rounded-full text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#232830] transition-colors"
//                   >
//                     <Icon size={20} />
//                   </Link>
//                 ))}
//               </div>
//               <div className="pt-6">
//                 <Link
//                   href="#"
//                   className="bg-[#00e5ff] text-[#232830] px-8 py-3 rounded-full font-medium hover:bg-[#00c2d8] transition-colors inline-block"
//                 >
//                   Download CV
//                 </Link>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
//               <div className="relative w-[320px] h-[370px] flex items-center justify-center">
//                 <div className="absolute inset-0 bg-[#00e5ff]/50 blur-xl transform scale-105 z-0 hexagon"></div>
//                 <div className="w-full h-full overflow-hidden relative z-10 hexagon">
//                   <img src="/profile.jpg" alt="Profile" width="400" height="400" />
//                 </div>
//               </div>
//             </div>
//           </main>

//           <div>
//             <p>about us</p>
//           </div>
//           <div>
//             <p>skills</p>
//           </div>
//           <div>
//             <p>personal projects</p>
//           </div>
//           <div>
//             <p>contact us</p>
//           </div>
//           <div>
//             <p>footer</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ExternalLink, Github } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
  const [activeLink, setActiveLink] = useState("Home")

  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
    { name: "Tailwind CSS", percentage: 85 },
    { name: "Node.js", percentage: 65 },
  ]

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with cart functionality and payment integration.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      links: { demo: "#", github: "#" },
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication.",
      image: "/project2.jpg",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      links: { demo: "#", github: "#" },
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      image: "/project3.jpg",
      technologies: ["JavaScript", "Weather API", "Chart.js"],
      links: { demo: "#", github: "#" },
    },
  ]

  return (
    <div className="md:min-h-screen bg-[#1a1e23] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00e5ff]/20 pointer-events-none"></div>
      <div className="px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#232830] rounded-3xl shadow-2xl overflow-hidden my-8 relative">
          <header className="flex justify-between items-center p-8">
            <div className="text-white text-2xl font-bold">Portfolio</div>
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
                <Link
                  href="#"
                  key={item}
                  className={`${item === activeLink ? "text-[#00e5ff]" : "text-white"
                    } hover:text-[#00e5ff] transition-colors`}
                  onClick={() => setActiveLink(item)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </header>
          <main className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-white text-2xl">Hello, It's Me</h2>
              <h1 className="text-white text-5xl md:text-6xl font-bold">Jyoti Patil</h1>
              <h3 className="text-2xl text-white">
                And I'm a <span className="text-[#00e5ff]">Frontend Developer</span>
              </h3>
              <p className="text-gray-400 max-w-lg">
                Passionate about creating interactive applications and experiences on the web.
              </p>
              <div className="flex space-x-4 pt-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <Link
                    href="#"
                    key={index}
                    className="bg-[#232830] border border-[#00e5ff]/30 p-3 rounded-full text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#232830] transition-colors"
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
              <div className="pt-6">
                <Link
                  href="#"
                  className="bg-[#00e5ff] text-[#232830] px-8 py-3 rounded-full font-medium hover:bg-[#00c2d8] transition-colors inline-block"
                >
                  Download CV
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
              <div className="relative w-[320px] h-[370px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[#00e5ff]/50 blur-xl transform scale-105 z-0 hexagon"></div>
                <div className="w-full h-full overflow-hidden relative z-10 hexagon">
                  <img src="/profile.jpg" alt="Profile" width="400" height="400" />
                </div>
              </div>
            </div>
          </main>

          {/* About Section */}
          <section id="about" className="p-8 md:p-12 bg-[#1a1e23]/50 border-t border-[#00e5ff]/10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
                <div className="w-20 h-1 bg-[#00e5ff] mx-auto"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-2/5">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-[#00e5ff]/20 blur-md rounded-lg"></div>
                    <div className="relative rounded-lg overflow-hidden border-2 border-[#00e5ff]/30">
                      <img src="/about-image.jpg" alt="About Me" className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </div>

                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold text-white mb-4">Frontend Developer & UI/UX Designer</h3>
                  <p className="text-gray-400 mb-6">
                    I am a passionate frontend developer with a strong focus on creating intuitive and engaging user
                    experiences. With 3+ years of experience in web development, I specialize in building responsive,
                    accessible, and performance-optimized applications using modern technologies.
                  </p>
                  <p className="text-gray-400 mb-6">
                    My approach combines clean code practices with creative problem-solving to deliver solutions that
                    not only meet but exceed client expectations. I'm constantly learning and adapting to new
                    technologies to stay at the forefront of web development.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00e5ff]">•</span>
                      <span>
                        <strong>Name:</strong> Jyoti Patil
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00e5ff]">•</span>
                      <span>
                        <strong>Email:</strong> jyoti@example.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00e5ff]">•</span>
                      <span>
                        <strong>Location:</strong> Mumbai, India
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00e5ff]">•</span>
                      <span>
                        <strong>Freelance:</strong> Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="p-8 md:p-12 border-t border-[#00e5ff]/10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Skills</h2>
                <div className="w-20 h-1 bg-[#00e5ff] mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-[#00e5ff]">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-[#1a1e23] rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-[#00e5ff]/80 to-[#00e5ff] h-2.5 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "devicon-html5-plain", name: "HTML5" },
                  { icon: "devicon-css3-plain", name: "CSS3" },
                  { icon: "devicon-javascript-plain", name: "JavaScript" },
                  { icon: "devicon-react-original", name: "React" },
                  { icon: "devicon-tailwindcss-plain", name: "Tailwind" },
                  { icon: "devicon-nodejs-plain", name: "Node.js" },
                  { icon: "devicon-git-plain", name: "Git" },
                  { icon: "devicon-figma-plain", name: "Figma" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 bg-[#1a1e23] rounded-xl border border-[#00e5ff]/10 hover:border-[#00e5ff]/30 transition-all hover:transform hover:-translate-y-1"
                  >
                    <i className={`${tech.icon} text-4xl text-[#00e5ff] mb-3`}></i>
                    <span className="text-white">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="p-8 md:p-12 bg-[#1a1e23]/50 border-t border-[#00e5ff]/10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Projects</h2>
                <div className="w-20 h-1 bg-[#00e5ff] mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-[#232830] rounded-xl overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300 border border-[#00e5ff]/10 hover:border-[#00e5ff]/30"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image || "/placeholder.svg?height=200&width=400"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1e23] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full flex justify-between">
                          <a
                            href={project.links.demo}
                            className="text-white bg-[#00e5ff]/20 p-2 rounded-full hover:bg-[#00e5ff]/40 transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.links.github}
                            className="text-white bg-[#00e5ff]/20 p-2 rounded-full hover:bg-[#00e5ff]/40 transition-colors"
                          >
                            <Github size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs bg-[#1a1e23] text-[#00e5ff] px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="#"
                  className="border border-[#00e5ff] text-[#00e5ff] px-8 py-3 rounded-full font-medium hover:bg-[#00e5ff] hover:text-[#232830] transition-colors inline-block"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="p-8 md:p-12 border-t border-[#00e5ff]/10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
                <div className="w-20 h-1 bg-[#00e5ff] mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-[#1a1e23] p-6 rounded-xl border border-[#00e5ff]/10 hover:border-[#00e5ff]/30 transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#00e5ff]/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="text-[#00e5ff]" size={24} />
                  </div>
                  <h3 className="text-white font-medium mb-2">Email</h3>
                  <p className="text-gray-400">jyoti@example.com</p>
                  <a href="mailto:jyoti@example.com" className="text-[#00e5ff] text-sm mt-2 hover:underline">
                    Send a message
                  </a>
                </div>

                <div className="bg-[#1a1e23] p-6 rounded-xl border border-[#00e5ff]/10 hover:border-[#00e5ff]/30 transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#00e5ff]/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="text-[#00e5ff]" size={24} />
                  </div>
                  <h3 className="text-white font-medium mb-2">Phone</h3>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <a href="tel:+919876543210" className="text-[#00e5ff] text-sm mt-2 hover:underline">
                    Call me
                  </a>
                </div>

                <div className="bg-[#1a1e23] p-6 rounded-xl border border-[#00e5ff]/10 hover:border-[#00e5ff]/30 transition-all flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#00e5ff]/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="text-[#00e5ff]" size={24} />
                  </div>
                  <h3 className="text-white font-medium mb-2">Location</h3>
                  <p className="text-gray-400">Mumbai, Maharashtra, India</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00e5ff] text-sm mt-2 hover:underline"
                  >
                    View on map
                  </a>
                </div>
              </div>

              <div className="bg-[#1a1e23] p-8 rounded-xl border border-[#00e5ff]/10">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-[#232830] border border-[#00e5ff]/10 focus:border-[#00e5ff]/50 rounded-lg p-4 text-white outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full bg-[#232830] border border-[#00e5ff]/10 focus:border-[#00e5ff]/50 rounded-lg p-4 text-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-[#232830] border border-[#00e5ff]/10 focus:border-[#00e5ff]/50 rounded-lg p-4 text-white outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full bg-[#232830] border border-[#00e5ff]/10 focus:border-[#00e5ff]/50 rounded-lg p-4 text-white outline-none resize-none"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-[#00e5ff] text-[#232830] px-8 py-3 rounded-full font-medium hover:bg-[#00c2d8] transition-colors inline-block"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="p-8 md:p-12 bg-[#1a1e23] border-t border-[#00e5ff]/10 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Jyoti Patil</h2>
                <p className="text-gray-400">Frontend Developer</p>
              </div>

              <div className="flex justify-center space-x-4 mb-8">
                {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, index) => (
                  <Link
                    href="#"
                    key={index}
                    className="bg-[#232830] border border-[#00e5ff]/30 p-3 rounded-full text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#232830] transition-colors"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>

              <div className="flex justify-center space-x-6 text-gray-400 text-sm mb-6">
                <Link href="#" className="hover:text-[#00e5ff] transition-colors">
                  Home
                </Link>
                <Link href="#" className="hover:text-[#00e5ff] transition-colors">
                  About
                </Link>
                <Link href="#" className="hover:text-[#00e5ff] transition-colors">
                  Skills
                </Link>
                <Link href="#" className="hover:text-[#00e5ff] transition-colors">
                  Portfolio
                </Link>
                <Link href="#" className="hover:text-[#00e5ff] transition-colors">
                  Contact
                </Link>
              </div>

              <div className="text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Jyoti Patil. All Rights Reserved.</p>
                <p className="mt-1">
                  Designed with <span className="text-[#00e5ff]">❤</span> by Jyoti Patil
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}



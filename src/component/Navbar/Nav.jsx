import { useState, useEffect } from 'react'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact']
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Jyoti Patil</h1>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <ul
                        className={`md:flex space-x-4 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-white shadow-md p-4' : 'hidden'
                            }`}
                    >
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`px-3 py-2 rounded-md ${activeSection === item.toLowerCase() ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <main className="container mx-auto px-4 pt-20">
                <section id="home" className="min-h-screen flex items-center justify-center">
                    <div className="text-center md:flex items-center justify-center flex-col">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Jyoti Patil</h1>
                        <p className="text-xl md:text-2xl mb-8">Frontend Developer</p>
                        <button
                            onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md gap-2 hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                        >
                            Download Resume
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

                        </button>
                    </div>
                </section>

                <section id="about" className="py-20">
                    <div>
                        <div>

                            <img src="../../images/about-me.png" alt="" />
                        </div>



                        <div>
                    <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                    <p className="text-lg max-w-2xl mx-auto text-center">
                        I'm a passionate frontend developer with 1 year of experience in creating responsive and user-friendly web
                        applications. I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not
                        coding, you can find me exploring new technologies or contributing to open-source projects.
                    </p>
                    </div>
                    </div>
                </section>

                <section id="skills" className="py-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                        {[
                            { name: 'HTML', icon: 'M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178z  M3 2h18l-1.623 18L12 22l-7.377-2L3 2z' },
                            { name: 'CSS', icon: 'M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502V0zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5V0zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5V0z' },
                            { name: 'JavaScript', icon: 'M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z' },
                            { name: 'React', icon: 'M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7.5-1.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0zm-7.5 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' },
                            { name: 'Next.js', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v8l6-4z' },
                            { name: 'SEO', icon: 'M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z' },
                        ].map((skill) => (
                            <div key={skill.name} className="bg-white shadow-md rounded-lg flex flex-col items-center p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-12 h-12 mb-2"
                                >
                                    <path d={skill.icon} />
                                </svg>
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="py-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'E-commerce Website', description: 'A fully responsive e-commerce website built with React and Next.js' },
                            { title: 'Task Management App', description: 'A drag-and-drop task management application using React and Redux' },
                            { title: 'Weather Dashboard', description: 'A weather dashboard that fetches real-time data from a weather API' },
                            { title: 'Portfolio Website', description: 'A customizable portfolio template for developers' },
                            { title: 'Recipe Finder', description: 'A recipe finder app that uses a third-party API to fetch recipes' },
                        ].map((project, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
                                        View Project
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 ml-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="py-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
                                >
                                    Send Message
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c5.523 0 10 4.477 10 10v4c0 1.105-.895 2-2 2H5a2 2 0 01-2-2v-4c0-5.523 4.477-10 10-10zm0 6v4m4 0h-8" />
                                    </svg>
                                    <a href="https://github.com/jyotipatil" className="text-blue-500 hover:underline">GitHub</a>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3.13a4.999 4.999 0 00-4.282 6.232l-.786.242c-.188-.547-.294-1.144-.294-1.742a6.999 6.999 0 00-6 6.994V19a6.004 6.004 0 006 6h6a6 6 0 006-6v-3.659a5.005 5.005 0 00-5-5h-.147a5 5 0 10-5-7.25l.299.151a5.01 5.01 0 00.147-1.238V3.13z" />
                                    </svg>
                                    <a href="https://linkedin.com/in/jyotipatil" className="text-blue-500 hover:underline">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-4 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Jyoti Patil. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
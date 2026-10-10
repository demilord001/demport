import { ArrowRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@dl/components/AnimatedBorderButton"

const projects = [
    {
        title: "Quantum Intelligence",
        description: "A research tool designed for assistance with live web search.  ",
        image: "/projects\Gemini_Generated_Image_2rkvlu2rkvlu2rkv.jfif",
        tags: ["Next.Js", "Tavily Search", "Typescript"],
        link: "https://quantum-ai-dev.vercel.app",
        github: "https://github.com/quantum-ai",
    },
     {
        title: "Portal.AI",
        description: "Next Generation of chatbots and assistance, providing all round access to reliable.",
        image: "/projects/portal.jfif",
        tags: ["Groq API", "Next.js", "Typescript"],
        link: "#",
        github: "#",
    },
     {
        title: "Neon Intelligence",
        description: "Helps students globally and people to have AI simplify thier learning journey.",
        image: "/projects/neon.jfif",
        tags: ["Integration", "Next.js", "Typescript"],
        link: "#",
        github: "#",
    },
]

export const Projects = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
    {/* bg glows */}
    <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10" />
        <div className="container mx-auto px-6 relative z-10">
            {/* Section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-4xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground">Projects that
                    <span className="font-serif italic font-normal text-white"> {" "} make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation delay-200">
                    A selection of my work, from complex web applications to innovate tools that solve real-world problems.
                </p>
            </div>

            { /* Projects grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((projects, idx) => (
                    <div 
                    key={idx}
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{animationDelay: `${(idx + 1) * 100}ms `}}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img
                             src={projects.image}
                             alt={projects.title}
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div
                              className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                               />
                               {/* Overlay Links */}
                               <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={projects.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a href={projects.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                               </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{projects.title}</h3>
                                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-sm">{projects.description}</p>
                            <div className="flex flex-wrap gap-2">{projects.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                            ))}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View all CTA */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    View All Projects
                    <ArrowRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </div>
        </div>
    </section>
} 

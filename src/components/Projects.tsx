"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { XMarkIcon, GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal animated portfolio featuring Next.js, Framer Motion, and Tailwind CSS.",
    icon: "👨‍💻",
    demoUrl: "https://kshitizupreti.vercel.app/",
    repoUrl: "https://github.com/xitizupreti/kshitizupreti.com.np",
    readmeUrl: "https://raw.githubusercontent.com/xitizupreti/kshitizupreti.com.np/master/README.md",
  },
  {
    id: 2,
    title: "Task Manager (MongoDB)",
    description: "A full-stack task management application utilizing a MongoDB database.",
    icon: "📋",
    demoUrl: "https://taskmanager-mongodb.vercel.app/",
    repoUrl: "https://github.com/xitizupreti/taskmanager-mongodb/",
    readmeUrl: "https://raw.githubusercontent.com/xitizupreti/taskmanager-mongodb/main/README.md",
  },
  {
    id: 3,
    title: "Ghatal Electricals",
    description: "A business showcase website for Ghatal Electricals.",
    icon: "⚡",
    demoUrl: "https://ghatalelectricals.vercel.app/",
    repoUrl: "https://github.com/xitizupreti/ghatalelectricals",
    readmeUrl: "", 
  },
  {
    id: 4,
    title: "Scroller Kanban Board",
    description: "An interactive Kanban board with scrolling functionality.",
    icon: "📝",
    demoUrl: "https://xitiz-scroller-kanban.netlify.app/",
    repoUrl: "https://github.com/xitizupreti/Scoller-KanbanBoard",
    readmeUrl: "https://raw.githubusercontent.com/xitizupreti/Scoller-KanbanBoard/main/README.md",
  },
  {
    id: 5,
    title: "Notes App",
    description: "A fast and responsive notes application.",
    icon: "📓",
    demoUrl: "https://kshitiz-notes.netlify.app/",
    repoUrl: "https://github.com/xitizupreti/notes-app",
    readmeUrl: "https://raw.githubusercontent.com/xitizupreti/notes-app/master/README.md",
  },
  {
    id: 6,
    title: "Intro Signup Component",
    description: "A modern, animated intro and sign-up form component.",
    icon: "✨",
    demoUrl: "https://introsignupform.vercel.app/",
    repoUrl: "https://github.com/xitizupreti/intro-component-with-signup-form-master",
    readmeUrl: "https://raw.githubusercontent.com/xitizupreti/intro-component-with-signup-form-master/master/README.md",
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedProject && selectedProject.readmeUrl) {
      setLoading(true);
      fetch(selectedProject.readmeUrl)
        .then(res => {
          if (!res.ok) throw new Error("Failed to fetch README");
          return res.text();
        })
        .then(text => {
          setReadmeContent(text);
          setLoading(false);
        })
        .catch(() => {
          setReadmeContent("### No README found or failed to load.\\n\\nPlease check the GitHub repository for more details.");
          setLoading(false);
        });
    } else if (selectedProject && !selectedProject.readmeUrl) {
      setReadmeContent("### README coming soon!");
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-dark-900 w-full overflow-hidden relative">
      {/* Background flare */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-primary-500 text-sm font-bold tracking-widest uppercase mb-2">My Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary-500">Projects</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Click on any project to view its details and README directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-dark-800 p-8 rounded-2xl border border-white/10 shadow-lg hover:border-primary-500/50 transition-all group flex flex-col items-start"
            >
              <div className="text-4xl mb-6 bg-dark-700 w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 group-hover:bg-primary-500/20 group-hover:border-primary-500/30 transition-all">
                {project.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-400 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-800 w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden relative"
            >
              {/* Header / Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border-b border-white/10 bg-dark-900/50 backdrop-blur-md sticky top-0 z-10 gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{selectedProject.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a 
                    href={selectedProject.repoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-colors border border-white/5"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    <span>Repo</span>
                  </a>
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold rounded-lg transition-colors"
                  >
                    <GlobeAltIcon className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-2"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Markdown Content */}
              <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-1 bg-dark-800">
                {loading ? (
                  <div className="flex items-center justify-center h-40">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
                  </div>
                ) : (
                  <article className="prose prose-invert prose-primary max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {readmeContent}
                    </ReactMarkdown>
                  </article>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

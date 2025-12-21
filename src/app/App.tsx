import { FileText, BookOpen, GraduationCap } from "lucide-react";
import { useState } from "react";
import { portfolioConfig, getIcon } from "../config/portfolioConfig";
import { Header } from "./components/portfolio/Header";
import { Footer } from "./components/portfolio/Footer";
import { ExpertiseCard } from "./components/portfolio/ExpertiseCard";
import { TabButton } from "./components/portfolio/TabButton";
import { ProjectCard } from "./components/portfolio/ProjectCard";
import { PaperCard } from "./components/portfolio/PaperCard";
import { CourseCard } from "./components/portfolio/CourseCard";
import { FollowChip } from "./components/portfolio/FollowChip";

export default function App() {
  const [activeTab, setActiveTab] = useState<"projects" | "papers" | "courses">("projects");

  return (
    <div className="min-h-screen bg-slate-50">
      <Header profile={portfolioConfig.profile} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Core Expertise */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioConfig.expertise.map((expertise, idx) => {
              const Icon = getIcon(expertise.icon);
              return (
                <ExpertiseCard
                  key={idx}
                  icon={<Icon size={20} />}
                  title={expertise.title}
                  items={expertise.items}
                />
              );
            })}
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8">
              <TabButton
                active={activeTab === "projects"}
                onClick={() => setActiveTab("projects")}
                icon={<FileText size={18} />}
                label="Featured Projects"
              />
              <TabButton
                active={activeTab === "papers"}
                onClick={() => setActiveTab("papers")}
                icon={<BookOpen size={18} />}
                label="Key Papers"
              />
              <TabButton
                active={activeTab === "courses"}
                onClick={() => setActiveTab("courses")}
                icon={<GraduationCap size={18} />}
                label="Advanced Courses"
              />
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === "projects" && (
            <div className="space-y-4">
              {portfolioConfig.projects.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  highlights={project.highlights}
                  link={project.link}
                />
              ))}
            </div>
          )}

          {activeTab === "papers" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {portfolioConfig.papers.map((paper, idx) => (
                <PaperCard
                  key={idx}
                  title={paper.title}
                  authors={paper.authors}
                  venue={paper.venue}
                  link={paper.link}
                  notes={paper.notes}
                  impact={paper.impact}
                />
              ))}
            </div>
          )}

          {activeTab === "courses" && (
            <div className="space-y-4">
              {portfolioConfig.courses.map((course, idx) => (
                <CourseCard
                  key={idx}
                  title={course.title}
                  institution={course.institution}
                  instructor={course.instructor}
                  link={course.link}
                  description={course.description}
                  topics={course.topics}
                  labWork={course.labWork}
                />
              ))}
            </div>
          )}
        </div>

        {/* Following - Condensed */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-gray-700 mb-4">Following & Learning From</h3>
          <div className="flex flex-wrap gap-3">
            {portfolioConfig.following.map((person, idx) => (
              <FollowChip key={idx} name={person.name} link={person.link} />
            ))}
          </div>
        </section>
      </main>

      <Footer
        lastUpdated={portfolioConfig.footer.lastUpdated}
        message={portfolioConfig.footer.message}
      />
    </div>
  );
}

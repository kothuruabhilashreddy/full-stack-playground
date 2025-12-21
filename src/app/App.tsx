import { FileText, BookOpen, GraduationCap } from "lucide-react";
import { useState } from "react";
import { portfolioConfig } from "../config/portfolioConfig";
import { Header } from "./components/portfolio/Header";
import { Footer } from "./components/portfolio/Footer";
import { TabButton } from "./components/portfolio/TabButton";
import { ProjectCard } from "./components/portfolio/ProjectCard";
import { PaperCard } from "./components/portfolio/PaperCard";
import { CourseCard } from "./components/portfolio/CourseCard";
import { FollowChip } from "./components/portfolio/FollowChip";

export default function App() {
  const [activeTab, setActiveTab] = useState<"projects" | "literature" | "courses">("projects");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header profile={portfolioConfig.profile} />

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-6">
              <TabButton
                active={activeTab === "projects"}
                onClick={() => setActiveTab("projects")}
                icon={<FileText size={16} />}
                label="Projects"
              />
              <TabButton
                active={activeTab === "literature"}
                onClick={() => setActiveTab("literature")}
                icon={<BookOpen size={16} />}
                label="Literature Review"
              />
              <TabButton
                active={activeTab === "courses"}
                onClick={() => setActiveTab("courses")}
                icon={<GraduationCap size={16} />}
                label="Courses"
              />
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          {activeTab === "projects" && (
            <div>
              {portfolioConfig.projects.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
              ))}
            </div>
          )}

          {activeTab === "literature" && (
            <div>
              {portfolioConfig.papers.map((paper, idx) => (
                <PaperCard
                  key={idx}
                  title={paper.title}
                  authors={paper.authors}
                  venue={paper.venue}
                  link={paper.link}
                />
              ))}
            </div>
          )}

          {activeTab === "courses" && (
            <div>
              {portfolioConfig.courses.map((course, idx) => (
                <CourseCard
                  key={idx}
                  title={course.title}
                  institution={course.institution}
                  note={course.note}
                  link={course.link}
                  status={course.status}
                />
              ))}
            </div>
          )}
        </div>

        {/* Following - Condensed */}
        {/* <section className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Following & Learning From</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {portfolioConfig.following.map((person, idx) => (
              <FollowChip key={idx} name={person.name} link={person.link} />
            ))}
          </div>
        </section> */}
      </main>

      <Footer
        lastUpdated={portfolioConfig.footer.lastUpdated}
        message={portfolioConfig.footer.message}
      />
    </div>
  );
}

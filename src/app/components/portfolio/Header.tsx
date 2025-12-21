import { Mail, Github, Linkedin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface Profile {
  name: string;
  title: string;
  bio: string;
  image: string;
  links: {
    email: string;
    github: string;
    linkedin: string;
  };
}

interface HeaderProps {
  profile: Profile;
}

export function Header({ profile }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center gap-6">
          <ImageWithFallback
            src={profile.image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">{profile.name}</h1>
            <p className="text-gray-600 text-sm mb-2">
              {profile.title}
            </p>
            <p className="text-gray-700 text-sm mb-3 max-w-2xl">
              {profile.bio}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a
                href={`mailto:${profile.links.email}`}
                className="hover:text-gray-900 flex items-center gap-1.5 transition-colors"
              >
                <Mail size={14} />
                <span>{profile.links.email}</span>
              </a>
              <a
                href={profile.links.github}
                className="hover:text-gray-900 flex items-center gap-1.5 transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={profile.links.linkedin}
                className="hover:text-gray-900 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

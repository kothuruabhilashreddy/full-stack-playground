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
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-start gap-8">
          <ImageWithFallback
            src={profile.image}
            alt="Profile"
            className="w-32 h-32 rounded-lg object-cover border border-gray-200"
          />
          <div className="flex-1">
            <h1 className="mb-2">{profile.name}</h1>
            <p className="text-gray-700 text-lg mb-4">
              {profile.title}
            </p>
            <p className="text-gray-600 leading-relaxed max-w-3xl mb-4">
              {profile.bio}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a
                href={`mailto:${profile.links.email}`}
                className="text-gray-600 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a
                href={profile.links.github}
                className="text-gray-600 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={profile.links.linkedin}
                className="text-gray-600 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


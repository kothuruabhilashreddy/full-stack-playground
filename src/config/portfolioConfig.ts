import React from 'react';
import { Code, Award, FileText, BookOpen, GraduationCap } from 'lucide-react';

// Map icon names to actual icon components
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Code,
  Award,
  FileText,
  BookOpen,
  GraduationCap,
};

export interface PortfolioConfig {
  profile: {
    name: string;
    title: string;
    bio: string;
    image: string;
    links: {
      email: string;
      github: string;
      linkedin: string;
    };
  };
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    link: string;
  }>;
  papers: Array<{
    title: string;
    authors: string;
    venue: string;
    link: string;
  }>;
  courses: Array<{
    title: string;
    institution: string;
    note: string;
    link: string;
    status?: "completed" | "current";
  }>;
  following: Array<{
    name: string;
    link: string;
  }>;
  footer: {
    lastUpdated: string;
    message: string;
  };
}

export const portfolioConfig: PortfolioConfig = {
  profile: {
    name: "Abhilash Reddy Kothuru",
    title: "MS Student at Stony Brook University",
    bio: "Actively seeking full-time opportunities targeted to onboard immediately.",
    image: "https://drive.google.com/file/d/1zBttum5TS7jSfF4aFJqD5JxtCejquXEd/view",
    links: {
      email: "kothuruabhilashreddy@gmail.com",
      github: "https://github.com/kothuruabhilashreddy",
      linkedin: "https://www.linkedin.com/in/kothuruabhilashreddy/"
    }
  },
  projects: [
    {
      title: "Paxos Consensus Protocol for Distributed Banking",
      description: "Implemented Paxos consensus algorithm for fault-tolerant distributed banking system. Achieves consensus with 2f+1 nodes tolerating f failures, ensuring transaction consistency across replicated servers.",
      technologies: ["Go", "gRPC", "Consensus Algorithms"],
      link: "https://github.com/kothuruabhilashreddy/apaxos"
    },
    {
      title: "Two-Phase Commit (2PC) Transaction Coordinator",
      description: "Built distributed transaction coordinator implementing 2PC protocol for ACID transactions across microservices. Handles transaction commit/abort with automatic recovery from coordinator failures.",
      technologies: ["Go", "Distributed Transactions", "Fault Tolerance"],
      link: "https://github.com/kothuruabhilashreddy/2PC"
    },
    {
      title: "Practical Byzantine Fault Tolerance (PBFT)",
      description: "Implemented PBFT consensus protocol handling Byzantine failures in distributed systems. Supports malicious node behavior while maintaining system consistency and liveness properties.",
      technologies: ["Go", "Byzantine Fault Tolerance", "Cryptography"],
      link: "https://github.com/kothuruabhilashreddy/pbft"
    }
  ],
  papers: [
    {
      title: "In Search of an Understandable Consensus Algorithm (Extended Version)",
      authors: "Diego Ongaro, John Ousterhout",
      venue: "USENIX ATC 2014",
      link: "https://raft.github.io/raft.pdf"
    },
    {
      title: "Paxos Made Simple",
      authors: "Leslie Lamport",
      venue: "ACM SIGACT News 2001",
      link: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"
    },
    {
      title: "Practical Byzantine Fault Tolerance",
      authors: "Miguel Castro, Barbara Liskov",
      venue: "OSDI 1999",
      link: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
    },
    {
      title: "Spanner: Google's Globally-Distributed Database",
      authors: "James C. Corbett et al.",
      venue: "OSDI 2012",
      link: "https://research.google/pubs/pub39966/"
    },
    {
      title: "Designing Data-Intensive Applications",
      authors: "Martin Kleppmann",
      venue: "O'Reilly Media 2017",
      link: "https://dataintensive.net/"
    }
  ],
  courses: [
    {
      title: "Distributed Systems",
      institution: "Stony Brook University",
      note: "Completed - Implemented Paxos, 2PC, and PBFT consensus protocols",
      link: "https://www3.cs.stonybrook.edu/~amiri/teaching/ds/24f/index.html",
      status: "completed"
    },
    {
      title: "MIT 6.824: Distributed Systems",
      institution: "MIT",
      note: "Completed - Full lab series including Raft implementation and sharded KV store",
      link: "https://pdos.csail.mit.edu/6.824/",
      status: "completed"
    },
    {
      title: "Database Systems",
      institution: "CMU",
      note: "Current - Advanced database internals, query optimization, and transaction processing",
      link: "https://15445.courses.cs.cmu.edu/fall2025/",
      status: "current"
    },
    {
      title: "Distributed and Operating Systems",
      institution: "UMass Amherst",
      note: "Current - Distributed systems design, operating systems principles, and system programming",
      link: "https://lass.cs.umass.edu/~shenoy/courses/spring25/lectures/",
      status: "current"
    }
  ],
  following: [
    {
      name: "Leslie Lamport",
      link: "https://lamport.azurewebsites.net/"
    },
    {
      name: "Barbara Liskov",
      link: "https://www.csail.mit.edu/person/barbara-liskov"
    },
    {
      name: "Martin Kleppmann",
      link: "https://martin.kleppmann.com/"
    },
    {
      name: "Heidi Howard",
      link: "https://heidihoward.github.io/"
    },
    {
      name: "Peter Bailis",
      link: "http://www.bailis.org/"
    }
  ],
  footer: {
    lastUpdated: "January 2025",
    message: "Actively seeking full-time opportunities starting May 2025"
  }
};

// Commented out old data for reference
/*
export const portfolioConfig_OLD: PortfolioConfig = {
  profile: {
    name: "Your Name",
    title: "Distributed Systems Engineer & Researcher",
    bio: "Researching fault-tolerant distributed systems with focus on consensus algorithms and distributed transaction processing.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjYyMDQ1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    links: {
      email: "your.email@university.edu",
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile"
    }
  },
  projects: [
    {
      title: "Distributed Key-Value Store with Raft Consensus",
      description: "Production-ready linearizable KV store with Raft consensus. Supports 10K+ writes/sec with strong consistency.",
      technologies: ["Go", "gRPC", "etcd/raft"],
      link: "https://github.com/yourusername/raft-kv"
    },
    {
      title: "Distributed Transaction Coordinator (2PC/3PC)",
      description: "High-performance transaction coordinator implementing 2PC/3PC protocols. Handles 5K+ distributed transactions/sec.",
      technologies: ["Rust", "Tokio", "PostgreSQL"],
      link: "https://github.com/yourusername/dtx-coordinator"
    },
    {
      title: "Consensus Protocol Visualizer",
      description: "Interactive web tool for visualizing Raft, Paxos, and Multi-Paxos with configurable network partitions.",
      technologies: ["TypeScript", "React", "D3.js"],
      link: "https://github.com/yourusername/consensus-viz"
    }
  ],
  courses: [
    {
      title: "MIT 6.824: Distributed Systems",
      institution: "MIT",
      note: "Completed full lab series including Raft implementation and sharded KV store",
      link: "https://pdos.csail.mit.edu/6.824/"
    },
    {
      title: "CS 244B: Distributed Systems",
      institution: "Stanford",
      note: "Built distributed file system with strong consistency guarantees",
      link: "http://www.scs.stanford.edu/20sp-cs244b/"
    },
    {
      title: "15-440/640: Distributed Systems",
      institution: "CMU",
      note: "Implemented distributed Bitcoin miner and P2P file sharing system",
      link: "https://www.cs.cmu.edu/~dga/15-440/S14/"
    }
  ]
};
*/

export function getIcon(iconName: string) {
  return iconMap[iconName] || FileText;
}

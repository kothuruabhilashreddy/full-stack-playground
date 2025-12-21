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
  expertise: Array<{
    icon: string;
    title: string;
    items: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
    link: string;
  }>;
  papers: Array<{
    title: string;
    authors: string;
    venue: string;
    link: string;
    notes: string;
    impact: string;
  }>;
  courses: Array<{
    title: string;
    institution: string;
    instructor: string;
    link: string;
    description: string;
    topics: string[];
    labWork: string;
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
    name: "Your Name",
    title: "Distributed Systems Engineer & Researcher",
    bio: "Specializing in building fault-tolerant distributed systems with strong consistency guarantees. Deep expertise in consensus algorithms (Raft, Paxos), distributed databases, and large-scale system design. Currently focused on improving the reliability and performance of distributed transaction processing systems.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjYyMDQ1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    links: {
      email: "your.email@university.edu",
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile"
    }
  },
  expertise: [
    {
      icon: "Code",
      title: "Technical Skills",
      items: [
        "Go, Rust, C++, Python",
        "gRPC, Protocol Buffers",
        "Kubernetes, Docker",
        "etcd, ZooKeeper"
      ]
    },
    {
      icon: "Award",
      title: "Core Competencies",
      items: [
        "Consensus Algorithms",
        "Distributed Transactions",
        "Replication & Sharding",
        "Fault Tolerance"
      ]
    },
    {
      icon: "FileText",
      title: "System Design",
      items: [
        "CAP Theorem Applications",
        "Event-Driven Architecture",
        "Microservices at Scale",
        "Data Consistency Models"
      ]
    }
  ],
  projects: [
    {
      title: "Distributed Key-Value Store with Raft Consensus",
      description: "Production-ready implementation of a linearizable distributed key-value store built on the Raft consensus algorithm. Handles leader election, log replication, and membership changes with sub-100ms latency for local reads.",
      technologies: ["Go", "gRPC", "etcd/raft", "Protocol Buffers"],
      highlights: [
        "Supports 10K+ writes/sec with strong consistency",
        "Automatic leader election and failure recovery",
        "Implements snapshotting and log compaction"
      ],
      link: "https://github.com/yourusername/raft-kv"
    },
    {
      title: "Distributed Transaction Coordinator (2PC/3PC)",
      description: "High-performance transaction coordinator implementing Two-Phase Commit and Three-Phase Commit protocols for distributed ACID transactions across microservices. Features deadlock detection and recovery mechanisms.",
      technologies: ["Rust", "Tokio", "PostgreSQL", "Redis"],
      highlights: [
        "Handles 5K+ distributed transactions/sec",
        "Automatic deadlock detection and resolution",
        "Saga pattern implementation for long-running transactions"
      ],
      link: "https://github.com/yourusername/dtx-coordinator"
    },
    {
      title: "Consensus Protocol Visualizer",
      description: "Interactive web-based tool for visualizing and understanding distributed consensus protocols. Allows step-by-step execution of Raft, Paxos, and Multi-Paxos with configurable network partitions and node failures.",
      technologies: ["TypeScript", "React", "D3.js", "WebSockets"],
      highlights: [
        "Used by 500+ students and researchers",
        "Real-time visualization of message passing",
        "Configurable failure injection and network delays"
      ],
      link: "https://github.com/yourusername/consensus-viz"
    }
  ],
  papers: [
    {
      title: "In Search of an Understandable Consensus Algorithm (Extended Version)",
      authors: "Diego Ongaro, John Ousterhout",
      venue: "USENIX ATC 2014",
      link: "https://raft.github.io/raft.pdf",
      notes: "Foundational paper on Raft. Essential reading for understanding practical consensus in distributed systems.",
      impact: "Implemented core algorithm in production KV store project"
    },
    {
      title: "Paxos Made Simple",
      authors: "Leslie Lamport",
      venue: "ACM SIGACT News 2001",
      link: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf",
      notes: "Clearer explanation of the Paxos algorithm. Critical for understanding multi-decree consensus.",
      impact: "Applied concepts to transaction coordinator design"
    },
    {
      title: "Spanner: Google's Globally-Distributed Database",
      authors: "James C. Corbett et al.",
      venue: "OSDI 2012",
      link: "https://research.google/pubs/pub39966/",
      notes: "Demonstrates how TrueTime API enables external consistency in distributed transactions.",
      impact: "Influenced design decisions in distributed transaction systems"
    },
    {
      title: "Designing Data-Intensive Applications",
      authors: "Martin Kleppmann",
      venue: "O'Reilly Media 2017",
      link: "https://dataintensive.net/",
      notes: "Comprehensive guide to distributed data systems. Covers replication, partitioning, and transactions.",
      impact: "Reference for system design patterns and trade-offs"
    },
    {
      title: "Consistency in Non-Transactional Distributed Storage Systems",
      authors: "Paolo Viotti, Marko Vukolić",
      venue: "ACM Computing Surveys 2016",
      link: "https://arxiv.org/abs/1512.00168",
      notes: "Systematic survey of consistency models in distributed storage systems.",
      impact: "Framework for evaluating consistency guarantees in projects"
    },
    {
      title: "CALM: Consistency As Logical Monotonicity",
      authors: "Joseph M. Hellerstein, Peter Alvaro",
      venue: "CIDR 2019",
      link: "http://www.bailis.org/papers/calm-cidr2019.pdf",
      notes: "Theoretical foundation for understanding when coordination is necessary in distributed systems.",
      impact: "Applied to minimize coordination in event-driven architectures"
    }
  ],
  courses: [
    {
      title: "MIT 6.824: Distributed Systems",
      institution: "MIT OpenCourseWare",
      instructor: "Prof. Robert Morris, Prof. Frans Kaashoek",
      link: "https://pdos.csail.mit.edu/6.824/",
      description: "Graduate-level course covering distributed system design, with labs implementing MapReduce, Raft, and a fault-tolerant key-value service.",
      topics: [
        "Raft consensus algorithm",
        "Fault tolerance and replication",
        "Distributed transactions",
        "Case studies: GFS, MapReduce, Spanner"
      ],
      labWork: "Completed full lab series including Raft implementation and sharded KV store"
    },
    {
      title: "CS 244B: Distributed Systems",
      institution: "Stanford University",
      instructor: "Prof. John Ousterhout (Raft creator)",
      link: "http://www.scs.stanford.edu/20sp-cs244b/",
      description: "Advanced course on distributed system principles, focusing on practical design patterns and real-world systems.",
      topics: [
        "RPC and communication",
        "Consistency and replication",
        "Scalability patterns",
        "Case studies: Chubby, ZooKeeper"
      ],
      labWork: "Built distributed file system with strong consistency guarantees"
    },
    {
      title: "15-440/640: Distributed Systems",
      institution: "Carnegie Mellon University",
      instructor: "Prof. David Andersen",
      link: "https://www.cs.cmu.edu/~dga/15-440/S14/",
      description: "Comprehensive course covering distributed systems principles, with emphasis on systems programming and real implementations.",
      topics: [
        "Clock synchronization",
        "Mutual exclusion algorithms",
        "Distributed file systems",
        "Peer-to-peer systems"
      ],
      labWork: "Implemented distributed Bitcoin miner and P2P file sharing system"
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
    },
    {
      name: "Aphyr (Kyle Kingsbury)",
      link: "https://aphyr.com/"
    }
  ],
  footer: {
    lastUpdated: "December 2025",
    message: "Open to distributed systems engineering opportunities"
  }
};

export function getIcon(iconName: string) {
  return iconMap[iconName] || FileText;
}

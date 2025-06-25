import React, { useState, useEffect } from "react";
import {
  Zap,
  Package,
  Container,
  Server,
  Share2,
  Rocket,
  Github,
  Book,
  Clipboard,
  Check,
  ShieldCheck,
  Users,
  ArrowRight,
  Star,
  Flame,
  Globe,
  Sparkles,
  Code,
  Heart,
  Triangle,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const CliCopy = ({ textToCopy }: { textToCopy: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className="relative mockup-code bg-primary/20 border-2 border-accent/50 text-left w-full max-w-3xl mx-auto mt-8 hover:scale-[1.02] hover:border-accent hover:shadow-2xl hover:shadow-accent/25 transition-all duration-500 backdrop-blur-sm">
      <pre data-prefix="$" className="text-accent font-bold text-sm md:text-base">
        <code>{textToCopy}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 btn btn-accent btn-sm hover:btn-primary transition-all duration-300 hover:scale-110 shadow-lg"
      >
        {copied ? (
          <Check size={16} className="text-accent-content" />
        ) : (
          <Clipboard size={16} />
        )}
      </button>
    </div>
  );
};

const StatItem = ({
  icon,
  title,
  value,
  description,
  color = "primary",
  bgColor = "bg-primary/20",
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  color?: string;
  bgColor?: string;
}) => (
  <div className={`card ${bgColor} backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group`}>
    <div className="card-body text-center p-6">
      <div className={`text-${color} mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-base-content/90 mb-2">{title}</h3>
      <div className={`text-${color} font-black text-2xl md:text-3xl mb-2 group-hover:text-accent transition-colors duration-300`}>
        {value}
      </div>
      <p className="text-base-content/70 text-xs leading-tight">{description}</p>
    </div>
  </div>
);

const FloatingIcon = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div
    className={`absolute opacity-20 animate-bounce ${className}`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: "3s",
    }}
  >
    {children}
  </div>
);

export function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-base-300/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-neutral/20 animate-pulse delay-1000"></div>
        
        {/* Floating Background Icons */}
        <FloatingIcon delay={0} className="top-20 left-20">
          <Zap size={48} className="text-primary/40" />
        </FloatingIcon>
        <FloatingIcon delay={1} className="top-32 right-32">
          <Rocket size={40} className="text-secondary/40" />
        </FloatingIcon>
        <FloatingIcon delay={2} className="bottom-40 left-32">
          <Code size={44} className="text-accent/40" />
        </FloatingIcon>
        <FloatingIcon delay={3} className="bottom-20 right-20">
          <Server size={36} className="text-info/40" />
        </FloatingIcon>
        <FloatingIcon delay={1.5} className="top-1/2 left-1/4">
          <Triangle size={32} className="text-warning/40" />
        </FloatingIcon>
        <FloatingIcon delay={2.5} className="top-1/3 right-1/4">
          <Heart size={38} className="text-error/40" />
        </FloatingIcon>

        <div className="hero-content text-center max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-6xl">
            {/* Badge */}
            <div 
              className={`badge badge-accent badge-lg mb-6 shadow-xl hover:scale-110 transition-all duration-500 ${
                isVisible ? "animate-bounce" : ""
              }`}
            >
              <Star size={16} className="mr-2 animate-spin" />
              Production Ready
              <Sparkles size={16} className="ml-2" />
            </div>

            {/* Main Title */}
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-black mb-4 text-primary transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              RELYSIA
            </h1>

            {/* Subtitle */}
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="text-primary">Build.</span>{" "}
              <span className="text-secondary">Ship.</span>{" "}
              <span className="text-accent">Scale.</span>
              <div className="flex items-center justify-center mt-3">
                <span className="text-info">Faster</span>
                <Flame className="ml-3 text-warning animate-pulse" size={48} />
              </div>
            </h2>

            <p
              className={`py-6 text-lg md:text-xl lg:text-2xl text-base-content/80 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              A{" "}
              <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">
                production-ready
              </span>{" "}
              full-stack monorepo built on a{" "}
              <span className="text-secondary font-bold bg-secondary/10 px-2 py-1 rounded-lg">
                blazing-fast
              </span>{" "}
              modern stack. Clone and start building your next{" "}
              <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded-lg">
                big idea
              </span>{" "}
              today.
            </p>

            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <CliCopy textToCopy="git clone https://github.com/your-repo/relysia.git" />
            </div>

            {/* Call to Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 transition-all duration-1000 delay-800 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="btn btn-primary btn-lg hover:btn-secondary transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl">
                <Rocket size={20} />
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline btn-accent btn-lg hover:btn-accent hover:border-accent transition-all duration-300 hover:scale-110 shadow-lg">
                <Github size={20} />
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats Section */}
      <section className="py-16 bg-base-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="badge badge-secondary badge-lg mb-4 shadow-lg">
              <Sparkles size={16} className="mr-2 animate-spin" />
              Performance Metrics
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-secondary">
              Lightning Fast Performance
            </h2>
            <p className="text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
              Real-world performance metrics that scale with your ambitions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <StatItem
              icon={<Server size={24} />}
              title="Server RPS"
              value="200K"
              description="Requests per second on dedicated hardware"
              color="primary"
              bgColor="bg-primary/20"
            />
            <StatItem
              icon={<Globe size={24} />}
              title="Static Files RPS"
              value="150K"
              description="Nginx static file serving performance"
              color="secondary"
              bgColor="bg-secondary/20"
            />
            <StatItem
              icon={<Zap size={24} />}
              title="Avg. Latency"
              value="~12ms"
              description="Ultra-low response times"
              color="accent"
              bgColor="bg-accent/20"
            />
            <StatItem
              icon={<ShieldCheck size={24} />}
              title="Uptime"
              value="99.99%"
              description="Battle-tested reliability"
              color="success"
              bgColor="bg-success/20"
            />
            <StatItem
              icon={<Users size={24} />}
              title="Developers"
              value="1,200+"
              description="Growing community of builders"
              color="info"
              bgColor="bg-info/20"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="badge badge-accent badge-lg mb-6 shadow-lg">
            <Package size={16} className="mr-2" />
            Feature Complete
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-accent">
            Everything You Need
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-primary">
              in One Place
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-content/70 mb-16 max-w-3xl mx-auto leading-relaxed">
            From a type-safe API to a modern frontend, Relysia provides a
            cohesive and powerful developer experience that scales with your
            needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <Zap size={28} className="text-primary" />,
                title: "Blazing Fast",
                description:
                  "Built on Bun and ElysiaJS for unparalleled speed and efficiency. Experience sub-millisecond response times.",
                bgColor: "bg-primary/20",
                titleColor: "text-primary",
              },
              {
                icon: <Package size={28} className="text-secondary" />,
                title: "Unified Monorepo",
                description:
                  "Manage your entire stack in one place with Turborepo. Shared code, shared workflows, shared success.",
                bgColor: "bg-secondary/20",
                titleColor: "text-secondary",
              },
              {
                icon: <Container size={28} className="text-accent" />,
                title: "Containerized Dev",
                description:
                  "Docker Compose provides a consistent and isolated environment. One command to rule them all.",
                bgColor: "bg-accent/20",
                titleColor: "text-accent",
              },
              {
                icon: <Server size={28} className="text-success" />,
                title: "Production-Ready",
                description:
                  "Nginx and HAProxy for optimized serving and proxying. Deploy with confidence from day one.",
                bgColor: "bg-success/20",
                titleColor: "text-success",
              },
              {
                icon: <Share2 size={28} className="text-info" />,
                title: "Shared Packages",
                description:
                  "Reusable code for API clients, database schemas, and utilities. DRY principles in practice.",
                bgColor: "bg-info/20",
                titleColor: "text-info",
              },
              {
                icon: <Rocket size={28} className="text-warning" />,
                title: "Modern Frontend",
                description:
                  "React and Vite for a fast, modern development experience. Hot reload that actually works.",
                bgColor: "bg-warning/20",
                titleColor: "text-warning",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`card ${feature.bgColor} backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 group`}
              >
                <div className="card-body p-6">
                  <div className="mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className={`card-title text-xl md:text-2xl mb-3 ${feature.titleColor} group-hover:text-accent transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-content/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who've chosen Relysia for their next
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg hover:btn-secondary transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl">
              <Rocket size={20} />
              Start Building Now
            </button>
            <button className="btn btn-outline btn-accent btn-lg hover:btn-accent hover:border-accent transition-all duration-300 hover:scale-110 shadow-lg">
              <Book size={20} />
              Read the Docs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-12 bg-base-300 text-base-content">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Zap size={24} className="text-primary-content" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Relysia
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-base-content/70">
              The all-in-one monorepo for modern web development. Build faster,
              ship sooner, scale better.
            </p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-secondary">
                Resources
              </h3>
              <div className="space-y-3">
                <a
                  className="flex items-center gap-2 hover:text-primary transition-colors duration-300 text-sm md:text-base"
                  href="#"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  className="flex items-center gap-2 hover:text-secondary transition-colors duration-300 text-sm md:text-base"
                  href="#"
                >
                  <Book size={16} /> Documentation
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-accent">Legal</h3>
              <div className="space-y-3">
                <a
                  className="block hover:text-accent transition-colors duration-300 text-sm md:text-base"
                  href="#"
                >
                  Terms of use
                </a>
                <a
                  className="block hover:text-accent transition-colors duration-300 text-sm md:text-base"
                  href="#"
                >
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

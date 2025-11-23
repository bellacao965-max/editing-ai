import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Layers, Video, Wand2 } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_dark_gradient_background.png";

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground relative overflow-hidden flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} className="w-full h-full object-cover opacity-40" alt="Hero Background" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-heading tracking-tight">AI Studio</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium hover:text-primary">Features</Button>
          <Button variant="ghost" className="text-sm font-medium hover:text-primary">Pricing</Button>
          <Link href="/dashboard">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Launch App
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-10">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          v2.0 Now Available with Generative Fill
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6 text-white drop-shadow-xl">
          Create beyond <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">imagination.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          The all-in-one AI creative suite for professionals. Edit photos and videos with semantic intelligence, style transfer, and automated workflows.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-gray-200 shadow-xl shadow-white/10 transition-all hover:scale-105">
              Start Creating Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10">
            View Demo
          </Button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full text-left">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
            <Wand2 className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">AI Magic Tools</h3>
            <p className="text-muted-foreground text-sm">Remove backgrounds, generate objects, and relight scenes in one click.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
            <Video className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Smart Video</h3>
            <p className="text-muted-foreground text-sm">Auto-cut silence, sync to music beat, and generate subtitles automatically.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
            <Layers className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Pro Workflow</h3>
            <p className="text-muted-foreground text-sm">Non-destructive layer editing with cloud sync and team collaboration.</p>
          </div>
        </div>
      </main>
      
      <footer className="relative z-10 py-6 text-center text-xs text-muted-foreground mt-10 border-t border-white/5">
        <p>© 2024 AI Studio Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

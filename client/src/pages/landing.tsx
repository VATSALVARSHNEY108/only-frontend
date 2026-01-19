import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Shield, ChevronRight } from "lucide-react";

// For stock image usage
// Unsplash: Abstract cyber background
// https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-primary neon-glow" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">OneAI</span>
          </div>
          <div className="flex items-center gap-4">
             <Button variant="ghost" className="hidden md:flex">Features</Button>
             <Button variant="ghost" className="hidden md:flex">Pricing</Button>
             <Link href="/api/login">
               <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
                 Sign In
               </Button>
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute inset-0 -z-10">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20" />
           <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Second Brain</span><br/>
              Supercharged.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              OneAI ingests your world—videos, documents, links—and turns them into a queryable knowledge graph. Forget nothing. Learn faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/api/login">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-white/10 hover:bg-white/5">
                View Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract visual representation */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-card/80 to-background border border-white/10 backdrop-blur-xl shadow-2xl p-2 relative overflow-hidden group">
               {/* Decorative grid */}
               <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
               
               {/* Floating cards animation mock */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-black/40 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                     <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto animate-pulse">
                        <Brain className="w-8 h-8 text-primary" />
                     </div>
                     <div className="space-y-2">
                        <div className="h-2 w-32 bg-white/10 rounded mx-auto" />
                        <div className="h-2 w-24 bg-white/10 rounded mx-auto" />
                     </div>
                  </div>
               </div>
               
               {/* Floating badges */}
               <div className="absolute top-10 right-10 bg-card border border-white/10 px-4 py-2 rounded-full text-sm font-medium shadow-xl animate-bounce duration-[3000ms]">
                  Processing...
               </div>
               <div className="absolute bottom-20 left-10 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-xl shadow-primary/20 animate-bounce duration-[4000ms]">
                  Knowledge Graph
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Everything you need</h2>
            <p className="text-muted-foreground text-lg">Powerful tools to help you capture, process, and retain information.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: Zap, title: "Instant Ingest", desc: "Paste any URL, YouTube video, or text. We extract the signal from the noise instantly." },
               { icon: Brain, title: "Neural Recall", desc: "Don't just search keywords. Query concepts. Our knowledge graph connects the dots." },
               { icon: Shield, title: "Private & Secure", desc: "Your second brain is yours alone. Enterprise-grade encryption for your peace of mind." }
             ].map((feature, i) => (
               <div key={i} className="p-8 rounded-3xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors group">
                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <feature.icon className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                 <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-white/5 text-center text-muted-foreground text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p>© 2025 OneAI Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

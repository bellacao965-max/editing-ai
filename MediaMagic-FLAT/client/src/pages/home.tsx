import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Plus, Clock, MoreHorizontal, Sparkles, Image as ImageIcon, Video, ArrowRight } from "lucide-react";
import photoAsset from "@assets/generated_images/professional_portrait_photo_for_editing.png";
import videoAsset from "@assets/generated_images/cyberpunk_video_frame.png";
import AppShell from "@/components/layout/AppShell";

export default function Dashboard() {
  return (
    <AppShell>
      <div className="h-full overflow-y-auto p-6 md:p-10">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold font-heading tracking-tight text-white mb-2">
                Welcome back, Creator
              </h1>
              <p className="text-muted-foreground">
                Ready to create something amazing today?
              </p>
            </div>
            <div className="flex gap-3">
               <Link href="/editor/photo">
                 <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                   <Plus className="mr-2 h-4 w-4" /> New Project
                 </Button>
               </Link>
            </div>
          </div>

          {/* Quick Actions / Start With AI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20 hover:border-primary/40 transition-all cursor-pointer group overflow-hidden relative">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Sparkles size={100} />
               </div>
               <CardContent className="p-6 flex flex-col h-full justify-between relative z-10">
                 <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
                   <Sparkles size={24} />
                 </div>
                 <div>
                   <h3 className="font-semibold text-lg mb-1 text-white">AI Auto Edit</h3>
                   <p className="text-sm text-muted-foreground mb-4">Upload media and let AI handle the rest.</p>
                   <span className="text-xs font-medium text-primary flex items-center">Start Now <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform"/></span>
                 </div>
               </CardContent>
            </Card>

            <Link href="/editor/photo">
              <Card className="bg-card border-border hover:border-primary/30 transition-all cursor-pointer group h-full">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                    <ImageIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">Photo Editor</h3>
                    <p className="text-sm text-muted-foreground">Professional retouching & grading.</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/editor/video">
              <Card className="bg-card border-border hover:border-primary/30 transition-all cursor-pointer group h-full">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                    <Video size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">Video Editor</h3>
                    <p className="text-sm text-muted-foreground">Timeline editing & effects.</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Recent Projects */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold font-heading text-white">Recent Projects</h2>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">View All</Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Portrait Session 01", type: "Photo", date: "2 hours ago", img: photoAsset },
                { title: "Cyberpunk City", type: "Video", date: "Yesterday", img: videoAsset },
                { title: "Product Shoot", type: "Photo", date: "3 days ago", img: null }, // Placeholder
                { title: "Vlog Edit", type: "Video", date: "1 week ago", img: null },
              ].map((project, i) => (
                <Card key={i} className="bg-card border-border overflow-hidden hover:ring-1 hover:ring-primary/50 transition-all group">
                  <div className="aspect-[4/3] bg-muted relative">
                    {project.img ? (
                      <img src={project.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/5">
                        {project.type === "Photo" ? <ImageIcon className="opacity-20" /> : <Video className="opacity-20" />}
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-medium">
                      {project.type}
                    </div>
                  </div>
                  <CardFooter className="p-3 flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium text-white truncate w-32">{project.title}</h4>
                      <p className="text-[11px] text-muted-foreground flex items-center mt-0.5">
                        <Clock size={10} className="mr-1" /> {project.date}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-white">
                      <MoreHorizontal size={14} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </AppShell>
  );
}

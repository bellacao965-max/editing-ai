import { Play, SkipBack, SkipForward, Scissors, Copy, Trash2, Mic, Music, Film, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import videoAsset from "@assets/generated_images/cyberpunk_video_frame.png";

export default function VideoTimeline() {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      {/* Top Section: Preview & Media Bin */}
      <div className="flex-1 flex min-h-0 border-b border-border">
        {/* Media Bin (Left) */}
        <div className="w-72 border-r border-border bg-card/30 p-4 hidden md:block">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Project Media</h3>
          <div className="grid grid-cols-2 gap-2">
             <div className="aspect-video bg-muted rounded-md relative overflow-hidden group cursor-pointer border border-transparent hover:border-primary">
               <img src={videoAsset} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
               <span className="absolute bottom-1 right-1 text-[10px] bg-black/70 px-1 rounded text-white">04:20</span>
             </div>
             <div className="aspect-video bg-muted rounded-md relative overflow-hidden group cursor-pointer border border-transparent hover:border-primary">
               <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900"></div>
               <span className="absolute bottom-1 right-1 text-[10px] bg-black/70 px-1 rounded text-white">01:15</span>
             </div>
             <div className="aspect-video bg-muted rounded-md flex items-center justify-center border border-dashed border-muted-foreground/50 hover:border-primary hover:text-primary cursor-pointer">
               <span className="text-xs">+ Import</span>
             </div>
          </div>
        </div>

        {/* Preview Player (Center) */}
        <div className="flex-1 bg-black relative flex items-center justify-center">
          <div className="aspect-video w-[80%] max-h-full bg-black shadow-2xl border border-white/10 relative group">
             <img src={videoAsset} className="w-full h-full object-cover" />
             
             {/* Transport Controls Overlay */}
             <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end pb-4 px-6 justify-between">
               <div className="text-white font-mono text-xs">00:02:14 / 00:05:00</div>
               <div className="flex gap-4 items-center text-white">
                 <SkipBack size={20} className="cursor-pointer hover:text-primary"/>
                 <Play size={32} fill="currentColor" className="cursor-pointer hover:text-primary"/>
                 <SkipForward size={20} className="cursor-pointer hover:text-primary"/>
               </div>
               <div className="text-white text-xs font-mono">1080p</div>
             </div>
          </div>
        </div>

        {/* Properties (Right) */}
        <div className="w-72 border-l border-border bg-card/30 p-4 hidden xl:block">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Clip Properties</h3>
          <div className="space-y-4">
            <div className="space-y-2">
               <label className="text-xs text-muted-foreground">Scale</label>
               <Slider defaultValue={[100]} max={200} className="w-full" />
            </div>
            <div className="space-y-2">
               <label className="text-xs text-muted-foreground">Opacity</label>
               <Slider defaultValue={[100]} max={100} className="w-full" />
            </div>
            <div className="pt-4 border-t border-border">
               <Button variant="secondary" className="w-full text-xs">
                 <Scissors className="mr-2 h-3 w-3" /> Auto-Cut Silence
               </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Timeline */}
      <div className="h-64 bg-[#151517] border-t border-border flex flex-col">
        {/* Timeline Toolbar */}
        <div className="h-10 border-b border-white/5 flex items-center px-4 gap-4 bg-[#1a1a1d]">
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7"><Scissors size={14} /></Button>
            <Button variant="ghost" size="icon" className="h-7 w-7"><Copy size={14} /></Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive"><Trash2 size={14} /></Button>
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span className="cursor-pointer hover:text-primary">00:00</span>
            <span className="cursor-pointer hover:text-primary">00:15</span>
            <span className="cursor-pointer hover:text-primary">00:30</span>
            <span className="cursor-pointer hover:text-primary">00:45</span>
          </div>
        </div>

        {/* Timeline Tracks */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 relative">
           {/* Playhead */}
           <div className="absolute top-0 bottom-0 left-[20%] w-px bg-red-500 z-20 flex flex-col items-center">
              <div className="w-3 h-3 bg-red-500 -mt-1.5 rotate-45"></div>
           </div>

           {/* Video Track 1 */}
           <div className="flex h-16 bg-black/20 rounded-sm relative group">
              <div className="w-24 flex-shrink-0 border-r border-white/5 flex items-center justify-center bg-[#1a1a1d] text-muted-foreground">
                 <Film size={14} />
              </div>
              <div className="flex-1 relative p-1">
                 <div className="absolute left-0 w-[40%] h-full bg-blue-900/50 border border-blue-500/30 rounded-sm flex items-center px-2 text-[10px] text-blue-200 overflow-hidden">
                    Cyberpunk_Intro.mp4
                 </div>
                 <div className="absolute left-[41%] w-[30%] h-full bg-purple-900/50 border border-purple-500/30 rounded-sm flex items-center px-2 text-[10px] text-purple-200 overflow-hidden">
                    Neon_Rain.mp4
                 </div>
              </div>
           </div>

           {/* Audio Track */}
           <div className="flex h-12 bg-black/20 rounded-sm relative mt-2">
              <div className="w-24 flex-shrink-0 border-r border-white/5 flex items-center justify-center bg-[#1a1a1d] text-muted-foreground">
                 <Music size={14} />
              </div>
              <div className="flex-1 relative p-1">
                 <div className="absolute left-0 w-[80%] h-full bg-green-900/50 border border-green-500/30 rounded-sm flex items-center px-2 text-[10px] text-green-200 overflow-hidden">
                    Synthwave_Backing.mp3
                    <svg className="absolute bottom-1 left-0 right-0 h-4 opacity-50" viewBox="0 0 100 20" preserveAspectRatio="none">
                       <path d="M0,10 L10,5 L20,15 L30,8 L40,12 L50,3 L60,17 L70,9 L80,11 L90,6 L100,10" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                 </div>
              </div>
           </div>
           
           {/* Text Track */}
           <div className="flex h-8 bg-black/20 rounded-sm relative">
              <div className="w-24 flex-shrink-0 border-r border-white/5 flex items-center justify-center bg-[#1a1a1d] text-muted-foreground">
                 <Type size={14} />
              </div>
              <div className="flex-1 relative p-1">
                 <div className="absolute left-[10%] w-[20%] h-full bg-orange-900/50 border border-orange-500/30 rounded-sm flex items-center px-2 text-[10px] text-orange-200 overflow-hidden">
                    Title Overlay
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

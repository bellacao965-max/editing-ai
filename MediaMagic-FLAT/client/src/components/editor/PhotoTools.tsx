import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  SlidersHorizontal, 
  Wand2, 
  Crop, 
  Aperture, 
  Palette, 
  Eraser, 
  RotateCcw,
  Share2,
  Download,
  Play,
  Sparkles,
  Image as ImageIcon
} from "lucide-react";
import imageAsset from "@assets/generated_images/professional_portrait_photo_for_editing.png";

export default function PhotoTools() {
  const [activeTool, setActiveTool] = useState("adjust");
  
  const tools = [
    { id: "adjust", icon: SlidersHorizontal, label: "Adjust" },
    { id: "filters", icon: Palette, label: "Filters" },
    { id: "ai", icon: Wand2, label: "AI Tools" },
    { id: "crop", icon: Crop, label: "Crop" },
    { id: "retouch", icon: Eraser, label: "Retouch" },
  ];

  return (
    <div className="flex h-full w-full">
      {/* Left Toolbar */}
      <div className="w-16 flex flex-col items-center py-4 border-r border-border bg-card/50 gap-4 z-20">
        {tools.map((tool) => (
          <Button
            key={tool.id}
            variant={activeTool === tool.id ? "default" : "ghost"}
            size="icon"
            onClick={() => setActiveTool(tool.id)}
            className="rounded-xl h-10 w-10"
            title={tool.label}
          >
            <tool.icon size={20} />
          </Button>
        ))}
      </div>

      {/* Sub-toolbar / Properties Panel */}
      <div className="w-64 border-r border-border bg-card/30 backdrop-blur-sm flex flex-col z-20">
        <div className="p-4 border-b border-border h-14 flex items-center font-medium">
          {tools.find(t => t.id === activeTool)?.label}
        </div>
        
        <ScrollArea className="flex-1 p-4">
          {activeTool === "adjust" && (
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-xs text-muted-foreground">Exposure</Label>
                  <span className="text-xs text-primary font-mono">+0.2</span>
                </div>
                <Slider defaultValue={[55]} max={100} step={1} className="py-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-xs text-muted-foreground">Contrast</Label>
                  <span className="text-xs text-primary font-mono">+12</span>
                </div>
                <Slider defaultValue={[62]} max={100} step={1} className="py-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-xs text-muted-foreground">Highlights</Label>
                  <span className="text-xs text-primary font-mono">-10</span>
                </div>
                <Slider defaultValue={[40]} max={100} step={1} className="py-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-xs text-muted-foreground">Shadows</Label>
                  <span className="text-xs text-primary font-mono">+5</span>
                </div>
                <Slider defaultValue={[55]} max={100} step={1} className="py-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-xs text-muted-foreground">Saturation</Label>
                  <span className="text-xs text-primary font-mono">0</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} className="py-2" />
              </div>
            </div>
          )}

          {activeTool === "ai" && (
            <div className="space-y-4">
              <div className="p-3 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 cursor-pointer transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Wand2 className="h-4 w-4 text-primary" />
                  <span className="font-medium text-sm">Remove Background</span>
                </div>
                <p className="text-xs text-muted-foreground">Instantly isolate the subject.</p>
              </div>
              
              <div className="p-3 rounded-lg border border-border bg-card hover:bg-accent/5 cursor-pointer transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="font-medium text-sm">Generative Fill</span>
                </div>
                <p className="text-xs text-muted-foreground">Select area to replace with AI.</p>
              </div>

              <div className="p-3 rounded-lg border border-border bg-card hover:bg-accent/5 cursor-pointer transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Aperture className="h-4 w-4 text-primary" />
                  <span className="font-medium text-sm">Auto Enhance</span>
                </div>
                <p className="text-xs text-muted-foreground">Intelligent light & color correction.</p>
              </div>
            </div>
          )}
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <Button variant="outline" className="w-full text-xs" size="sm">
            <RotateCcw className="mr-2 h-3 w-3" /> Reset Adjustments
          </Button>
        </div>
      </div>

      {/* Center Canvas */}
      <div className="flex-1 bg-[#050505] relative flex items-center justify-center overflow-hidden bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px]">
        {/* Toolbar Floating Top */}
        <div className="absolute top-4 flex gap-2 bg-background/80 backdrop-blur-md p-1 rounded-full border border-border shadow-lg z-10">
          <Button variant="ghost" size="sm" className="h-7 rounded-full text-xs px-3">Original</Button>
          <div className="w-px h-4 bg-border self-center"></div>
          <Button variant="secondary" size="sm" className="h-7 rounded-full text-xs px-3">Before/After</Button>
        </div>

        {/* Image Container */}
        <div className="relative max-w-[90%] max-h-[90%] shadow-2xl">
          <img 
            src={imageAsset} 
            alt="Edit Preview" 
            className="rounded-sm shadow-2xl object-contain max-h-[80vh]" 
          />
          
          {/* Fake selection overlay example if tool was active */}
          {/* <div className="absolute inset-0 border-2 border-primary/50 pointer-events-none"></div> */}
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 flex gap-2 bg-background/80 backdrop-blur-md p-1.5 rounded-lg border border-border shadow-lg z-10">
           <span className="text-xs font-mono px-2 self-center">100%</span>
           <Button variant="ghost" size="icon" className="h-6 w-6 rounded-md"><span className="text-lg leading-none">-</span></Button>
           <Button variant="ghost" size="icon" className="h-6 w-6 rounded-md"><span className="text-lg leading-none">+</span></Button>
        </div>
      </div>

      {/* Right Sidebar (Optional Layers/History) */}
      <div className="w-64 border-l border-border bg-card/30 backdrop-blur-sm hidden xl:flex flex-col z-20">
        <Tabs defaultValue="layers" className="flex-1 flex flex-col">
          <div className="border-b border-border px-2">
            <TabsList className="w-full bg-transparent justify-start h-12">
              <TabsTrigger value="layers" className="text-xs data-[state=active]:bg-accent/10">Layers</TabsTrigger>
              <TabsTrigger value="history" className="text-xs data-[state=active]:bg-accent/10">History</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="layers" className="flex-1 p-4 m-0 space-y-2">
            <div className="flex items-center p-2 rounded-md bg-primary/10 border border-primary/20 text-xs font-medium justify-between">
               <span className="flex items-center gap-2"><Wand2 className="w-3 h-3 text-primary"/> Adjustments</span>
               <Play className="w-3 h-3 opacity-50" />
            </div>
            <div className="flex items-center p-2 rounded-md bg-card border border-border text-xs font-medium justify-between opacity-50 hover:opacity-100 transition-opacity">
               <span className="flex items-center gap-2"><ImageIcon className="w-3 h-3"/> Original Image</span>
               <Play className="w-3 h-3 opacity-50" />
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="p-4 border-t border-border space-y-2">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button variant="outline" className="w-full">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
      </div>
    </div>
  );
}

import { useParams } from "wouter";
import AppShell from "@/components/layout/AppShell";
import PhotoTools from "@/components/editor/PhotoTools";
import VideoTimeline from "@/components/editor/VideoTimeline";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function Editor() {
  const { type } = useParams();
  const isVideo = type === "video";

  return (
    <AppShell>
      <div className="flex flex-col h-full">
        {/* Editor specific header adjustment could go here if needed, 
            but AppShell header is handling breadcrumbs nicely */}
        
        <div className="flex-1 overflow-hidden relative">
          {isVideo ? <VideoTimeline /> : <PhotoTools />}
        </div>
      </div>
    </AppShell>
  );
}

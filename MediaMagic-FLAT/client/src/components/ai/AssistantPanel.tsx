import { useState } from "react";
import { Send, X, Sparkles, Bot, Wand2, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface AssistantPanelProps {
  open: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  actions?: string[];
}

export default function AssistantPanel({ open, onClose }: AssistantPanelProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      text: "Hi, I'm Studio. How can I help you edit today?",
      actions: ["Remove background", "Enhance colors", "Suggest a style"]
    }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Fake AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: "I can help with that. Would you like me to apply a cinematic color grade first?",
        actions: ["Apply Cinematic Grade", "Show Options"]
      }]);
    }, 1000);
  };

  return (
    <div 
      className={cn(
        "absolute right-0 top-0 bottom-0 w-80 md:w-96 bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl transform transition-transform duration-300 ease-out z-50 flex flex-col",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      {/* Header */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <span className="font-semibold text-sm">Studio Assistant</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full hover:bg-muted">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Chat Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex flex-col gap-2", msg.role === "user" ? "items-end" : "items-start")}>
              <div 
                className={cn(
                  "px-4 py-3 rounded-2xl text-sm max-w-[85%]",
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground rounded-br-none" 
                    : "bg-muted text-muted-foreground rounded-bl-none"
                )}
              >
                {msg.text}
              </div>
              {msg.actions && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {msg.actions.map(action => (
                    <button 
                      key={action}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors flex items-center gap-1"
                    >
                      <Wand2 className="h-3 w-3" />
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-background">
        <div className="relative flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Mic className="h-5 w-5" />
          </Button>
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask AI to edit..." 
            className="pr-10 bg-muted/50 border-transparent focus-visible:bg-background focus-visible:ring-1 focus-visible:ring-primary"
          />
          <Button 
            size="icon" 
            onClick={handleSend}
            className="absolute right-1 h-8 w-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

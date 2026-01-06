import { useState, useEffect, useCallback } from "react";

interface CodeLine {
  text: string;
  type: "keyword" | "property" | "string" | "bracket" | "comment" | "method" | "variable" | "empty";
}

const codeLines: CodeLine[] = [
  { text: "const developer = {", type: "keyword" },
  { text: '  name: "Ram Krishna",', type: "property" },
  { text: '  role: "Full Stack Engineer",', type: "property" },
  { text: '  stack: ["React", "Node.js", "MongoDB"],', type: "property" },
  { text: '  passion: "Building scalable apps",', type: "property" },
  { text: "};", type: "bracket" },
  { text: "", type: "empty" },
  { text: "developer.build();", type: "method" },
  { text: "// → Ready to create amazing things", type: "comment" },
];

const TerminalAnimation = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Human-like typing speed with natural variation
  const getTypingDelay = useCallback(() => {
    const baseDelay = 45;
    const variation = Math.random() * 35;
    // Slight pause after punctuation
    return baseDelay + variation;
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    if (currentLineIndex >= codeLines.length) {
      setIsTyping(false);
      // Reset after pause
      const resetTimer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsTyping(true);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }

    const currentLine = codeLines[currentLineIndex];

    if (currentCharIndex <= currentLine.text.length) {
      const timer = setTimeout(() => {
        const newText = currentLine.text.slice(0, currentCharIndex);
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = newText;
          return updated;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, getTypingDelay());
      return () => clearTimeout(timer);
    } else {
      // Line complete, move to next with natural pause
      const pauseDelay = currentLine.type === "empty" ? 200 : 350;
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, pauseDelay);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, isTyping, getTypingDelay]);

  const renderLine = (text: string, lineIndex: number) => {
    const lineConfig = codeLines[lineIndex];
    if (!lineConfig) return null;

    switch (lineConfig.type) {
      case "keyword":
        return (
          <>
            <span className="text-[#c586c0]">const</span>
            <span className="text-[#9cdcfe]"> developer</span>
            <span className="text-foreground/90"> = {"{"}</span>
          </>
        );
      case "property":
        if (text.includes("name:")) {
          return (
            <>
              <span className="text-[#9cdcfe]">  name</span>
              <span className="text-foreground/60">: </span>
              <span className="text-[#ce9178]">"Ram Krishna"</span>
              <span className="text-foreground/60">,</span>
            </>
          );
        }
        if (text.includes("role:")) {
          return (
            <>
              <span className="text-[#9cdcfe]">  role</span>
              <span className="text-foreground/60">: </span>
              <span className="text-[#ce9178]">"Full Stack Engineer"</span>
              <span className="text-foreground/60">,</span>
            </>
          );
        }
        if (text.includes("stack:")) {
          return (
            <>
              <span className="text-[#9cdcfe]">  stack</span>
              <span className="text-foreground/60">: [</span>
              <span className="text-[#ce9178]">"React"</span>
              <span className="text-foreground/60">, </span>
              <span className="text-[#ce9178]">"Node.js"</span>
              <span className="text-foreground/60">, </span>
              <span className="text-[#ce9178]">"MongoDB"</span>
              <span className="text-foreground/60">],</span>
            </>
          );
        }
        if (text.includes("passion:")) {
          return (
            <>
              <span className="text-[#9cdcfe]">  passion</span>
              <span className="text-foreground/60">: </span>
              <span className="text-[#ce9178]">"Building scalable apps"</span>
              <span className="text-foreground/60">,</span>
            </>
          );
        }
        return <span className="text-foreground/90">{text}</span>;
      case "bracket":
        return <span className="text-foreground/90">{"};"}</span>;
      case "empty":
        return <span>&nbsp;</span>;
      case "method":
        return (
          <>
            <span className="text-[#9cdcfe]">developer</span>
            <span className="text-foreground/60">.</span>
            <span className="text-[#dcdcaa]">build</span>
            <span className="text-foreground/90">()</span>
            <span className="text-foreground/60">;</span>
          </>
        );
      case "comment":
        return <span className="text-[#6a9955]">{text}</span>;
      default:
        return <span className="text-foreground/90">{text}</span>;
    }
  };

  const isCurrentlyTypingLine = (index: number) => {
    return index === currentLineIndex && isTyping;
  };

  return (
    <div className="w-72 h-80 md:w-96 md:h-[400px] relative group">
      {/* Subtle glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Terminal container */}
      <div className="relative w-full h-full bg-[#1e1e1e] border border-[#3c3c3c]/50 rounded-xl overflow-hidden shadow-2xl shadow-black/20">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#3c3c3c]/50">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[#808080] text-xs font-mono tracking-wide">developer.ts</span>
          </div>
          <div className="w-12" /> {/* Spacer for symmetry */}
        </div>

        {/* Terminal Content */}
        <div className="p-5 font-mono text-[13px] leading-relaxed space-y-0.5 h-[calc(100%-48px)] overflow-hidden">
          {displayedLines.map((text, index) => {
            const isComplete = index < currentLineIndex;
            const isTypingThisLine = isCurrentlyTypingLine(index);
            
            return (
              <div
                key={index}
                className={`flex items-center min-h-[24px] transition-opacity duration-200 ${
                  isComplete ? "opacity-100" : "opacity-90"
                }`}
                style={{
                  animation: isComplete ? "line-appear 0.3s ease-out forwards" : undefined,
                }}
              >
                <span className="text-[#858585] w-6 select-none text-right mr-4 text-xs">
                  {index + 1}
                </span>
                <code className="flex-1">
                  {isComplete ? (
                    renderLine(codeLines[index].text, index)
                  ) : (
                    <>
                      <span className="text-foreground/80">{text}</span>
                      {isTypingThisLine && (
                        <span className="inline-block w-[2px] h-[18px] bg-[#aeafad] ml-[1px] translate-y-[3px] animate-cursor-blink" />
                      )}
                    </>
                  )}
                </code>
              </div>
            );
          })}
          
          {/* Show cursor on new line when starting */}
          {displayedLines.length === 0 && isTyping && (
            <div className="flex items-center min-h-[24px]">
              <span className="text-[#858585] w-6 select-none text-right mr-4 text-xs">1</span>
              <span className="inline-block w-[2px] h-[18px] bg-[#aeafad] animate-cursor-blink" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalAnimation;

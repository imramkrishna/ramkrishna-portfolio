import { useState, useEffect } from "react";

const codeLines = [
  { text: "const developer = {", delay: 0 },
  { text: '  name: "Ram Krishna",', delay: 800 },
  { text: '  role: "Full Stack Engineer",', delay: 1600 },
  { text: '  skills: ["React", "Node.js", "MongoDB"],', delay: 2400 },
  { text: '  passion: "Building scalable apps",', delay: 3200 },
  { text: "};", delay: 4000 },
  { text: "", delay: 4800 },
  { text: "developer.code();", delay: 5200 },
  { text: '// Output: "Amazing things!"', delay: 6000 },
];

const TerminalAnimation = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleLines >= codeLines.length) {
      // Reset after completion
      const resetTimer = setTimeout(() => {
        setVisibleLines(0);
        setCurrentText("");
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const line = codeLines[visibleLines];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex <= line.text.length) {
        setCurrentText(line.text.slice(0, charIndex));
        charIndex++;
        setTimeout(typeChar, 30 + Math.random() * 30);
      } else {
        setTimeout(() => {
          setVisibleLines((prev) => prev + 1);
          setCurrentText("");
        }, 200);
      }
    };

    const startDelay = setTimeout(typeChar, visibleLines === 0 ? 500 : 100);
    return () => clearTimeout(startDelay);
  }, [visibleLines]);

  return (
    <div className="w-64 h-80 md:w-80 md:h-96 bg-card border border-border rounded-lg overflow-hidden font-mono text-sm">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-muted-foreground">developer.ts</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-1 text-xs md:text-sm">
        {codeLines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className="flex">
            <span className="text-muted-foreground w-6 select-none">{index + 1}</span>
            <code className="text-foreground">
              {line.text.includes("const") && (
                <>
                  <span className="text-purple-400">const</span>
                  {line.text.replace("const", "")}
                </>
              )}
              {line.text.includes('name:') && (
                <>
                  <span className="text-foreground">  name: </span>
                  <span className="text-primary">"Ram Krishna"</span>
                  <span className="text-foreground">,</span>
                </>
              )}
              {line.text.includes('role:') && (
                <>
                  <span className="text-foreground">  role: </span>
                  <span className="text-primary">"Full Stack Engineer"</span>
                  <span className="text-foreground">,</span>
                </>
              )}
              {line.text.includes('skills:') && (
                <>
                  <span className="text-foreground">  skills: [</span>
                  <span className="text-primary">"React"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-primary">"Node.js"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-primary">"MongoDB"</span>
                  <span className="text-foreground">],</span>
                </>
              )}
              {line.text.includes('passion:') && (
                <>
                  <span className="text-foreground">  passion: </span>
                  <span className="text-primary">"Building scalable apps"</span>
                  <span className="text-foreground">,</span>
                </>
              )}
              {line.text === "};" && <span className="text-foreground">{"}"}</span>}
              {line.text === "" && <span>&nbsp;</span>}
              {line.text.includes('.code()') && (
                <>
                  <span className="text-blue-400">developer</span>
                  <span className="text-foreground">.</span>
                  <span className="text-yellow-400">code</span>
                  <span className="text-foreground">();</span>
                </>
              )}
              {line.text.includes('// Output') && (
                <span className="text-muted-foreground">{line.text}</span>
              )}
            </code>
          </div>
        ))}
        
        {/* Current typing line */}
        {visibleLines < codeLines.length && (
          <div className="flex">
            <span className="text-muted-foreground w-6 select-none">{visibleLines + 1}</span>
            <code className="text-foreground">
              {currentText}
              <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />
            </code>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalAnimation;

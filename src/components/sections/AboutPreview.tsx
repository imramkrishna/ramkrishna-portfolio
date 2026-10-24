import Window from "@/components/shared/Window";

const AboutReadme = ({ className = "" }: { className?: string }) => (
  <Window title="ABOUT / README.TXT" className={className} labelledBy="about-title">
    <div className="rd-pane bg-white grid lg:grid-cols-2">
      <div className="p-6 sm:p-10">
        <p className="rd-num">02</p>
        <h2 id="about-title" className="rd-disp mt-6 text-[clamp(2rem,4.2vw,3.4rem)]">
          Building production AI pipelines and self-hosted cloud infrastructure.
        </h2>
      </div>
      <div className="p-6 sm:p-10 rd-dotted-v space-y-5 text-lg leading-relaxed max-lg:border-l-0 max-lg:border-t-2 max-lg:border-dotted max-lg:border-[#808080]">
        <p>
          Hello, I'm Ram Krishna Yadav — a Computer Engineering undergraduate with a background
          in distributed infrastructure, real-time systems, and applied machine learning.
        </p>
        <p>
          I created <strong>Salesient</strong>, a retrieval-augmented generation (RAG) platform
          over 768-dimensional pgvector embeddings with multi-provider LLM routing and Model
          Context Protocol (MCP) tool orchestration across 120+ services, and{" "}
          <strong>Zyotra</strong>, a self-hosted PaaS for bare-metal servers that cuts
          infrastructure costs by up to 80%.
        </p>
        <p>
          My current areas of interest include machine learning systems and efficiency, inference
          optimization, distributed training, and NLP for low-resource languages.
        </p>
      </div>
    </div>
  </Window>
);

export default AboutReadme;

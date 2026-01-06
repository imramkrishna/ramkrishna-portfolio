const Quote = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto relative">
          {/* Top quote mark */}
          <div className="absolute -top-4 left-4 text-2xl text-muted-foreground font-bold">
            ""
          </div>
          
          {/* Quote box */}
          <blockquote className="border border-border p-6 text-center bg-background">
            <p className="text-lg md:text-xl text-foreground">
              With great power comes great electricity bill
            </p>
          </blockquote>
          
          {/* Attribution - positioned to overlap bottom right */}
          <div className="flex justify-end -mt-4 mr-8">
            <div className="border border-border px-4 py-2 bg-background">
              <span className="text-foreground">- Dr. Who</span>
            </div>
          </div>
          
          {/* Bottom quote mark */}
          <div className="absolute -bottom-2 right-12 text-2xl text-muted-foreground font-bold">
            ""
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;

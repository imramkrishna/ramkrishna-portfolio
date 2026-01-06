const Quote = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto relative">
          {/* Quote marks */}
          <span className="absolute -top-6 -left-4 text-4xl text-muted-foreground font-serif">
            "
          </span>
          <span className="absolute -bottom-6 -right-4 text-4xl text-muted-foreground font-serif">
            "
          </span>
          
          {/* Quote box */}
          <blockquote className="border border-border p-6 text-center">
            <p className="text-xl md:text-2xl text-foreground">
              With great power comes great electricity bill
            </p>
          </blockquote>
          
          {/* Attribution */}
          <div className="flex justify-end mt-4">
            <div className="border border-border px-4 py-2">
              <span className="text-muted-foreground">- </span>
              <span className="text-foreground">Dr. Who</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;

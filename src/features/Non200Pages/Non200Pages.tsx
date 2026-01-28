interface Non200PagesProps {
  code: string;
  title: string;
  children: React.ReactNode;
}

export default function Non200Pages({
  code,
  title,
  children,
}: Non200PagesProps) {
  return (
    <section className="flex-1 prose max-w-2xl mx-auto text-center text-foreground flex flex-col items-center justify-center p-4">
      <span className="font-black text-7xl mb-6 motion-preset-blur-down-lg">
        {code}
      </span>
      <h1 className="text-foreground motion-preset-blur-down-lg motion-delay-50">
        {title}
      </h1>
      <div className="motion-preset-blur-down-lg motion-delay-100">
        {children}
      </div>
    </section>
  );
}

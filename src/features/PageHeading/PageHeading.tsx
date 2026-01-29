export default function PageHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-bold tracking-tight motion-preset-blur-down-lg">
        {title}
      </h1>
      {subtitle && (
        <p className="text-muted-foreground text-lg mt-2 motion-preset-blur-down-lg motion-delay-100">
          {subtitle}
        </p>
      )}
    </div>
  );
}

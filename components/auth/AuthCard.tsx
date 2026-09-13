import BellaMascot from "@/components/bella/BellaMascot";

export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center gap-6 overflow-hidden px-4 py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-blob absolute -left-10 top-0 h-56 w-56 bg-brand-blue" />
        <div className="bg-blob absolute -right-10 bottom-0 h-56 w-56 bg-brand-pink" />
      </div>

      <div className="relative">
        <BellaMascot pose="wave" size={120} />
        <div aria-hidden className="grounding-shadow absolute bottom-0 left-1/2 h-4 w-20 -translate-x-1/2" />
      </div>
      <div className="relative w-full rounded-[1.75rem] border-2 border-brand-navy/10 bg-white/95 p-8 shadow-[0_16px_40px_-16px_rgba(37,50,75,0.25)] backdrop-blur">
        <h1 className="text-center font-heading text-2xl font-semibold text-brand-navy">
          {title}
        </h1>
        <p className="mt-1 text-center font-body text-sm text-brand-navy-muted">{subtitle}</p>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

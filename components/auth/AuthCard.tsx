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
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center gap-6 px-4 py-16">
      <BellaMascot pose="wave" size={120} />
      <div className="w-full rounded-3xl border-2 border-brand-navy/10 bg-white p-8 shadow-sm">
        <h1 className="text-center font-heading text-2xl font-semibold text-brand-navy">
          {title}
        </h1>
        <p className="mt-1 text-center font-body text-sm text-brand-navy/60">{subtitle}</p>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

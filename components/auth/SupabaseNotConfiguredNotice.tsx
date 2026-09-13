import BellaMascot from "@/components/bella/BellaMascot";
import Button from "@/components/ui/Button";

export default function SupabaseNotConfiguredNotice() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4 py-24 text-center">
      <BellaMascot pose="idle" size={140} />
      <h1 className="font-heading text-2xl font-semibold text-brand-navy">
        Supabase Isn&rsquo;t Connected Yet
      </h1>
      <p className="font-body text-brand-navy/70">
        Add <code className="rounded bg-brand-navy/5 px-1.5 py-0.5">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
        and <code className="rounded bg-brand-navy/5 px-1.5 py-0.5">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>{" "}
        to your environment to enable accounts and dashboards.
      </p>
      <Button href="/" variant="pink" size="md">
        Back Home
      </Button>
    </div>
  );
}

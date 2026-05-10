import Navigation from "@/components/Navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { usePrivacyPolicyContent } from "@/hooks/useContent";

const FALLBACK_POLICY = {
  title: "Privacy Policy",
  lastUpdated: "2026-05-10",
  content: "",
};

export default function PrivacyPolicy() {
  const { data, loading } = usePrivacyPolicyContent();
  const policy = data ?? FALLBACK_POLICY;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container max-w-4xl space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground">{policy.title}</h1>
            <p className="text-sm text-foreground/50 mt-2">Last updated: {policy.lastUpdated}</p>
          </div>

          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-10/12" />
              <Skeleton className="h-6 w-11/12" />
              <Skeleton className="h-6 w-9/12" />
            </div>
          ) : (
            <article
              className="prose prose-slate max-w-none text-foreground/80 prose-headings:text-foreground prose-p:text-foreground/70"
              dangerouslySetInnerHTML={{ __html: policy.content }}
            />
          )}
        </div>
      </section>
    </div>
  );
}

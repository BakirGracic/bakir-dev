import { CredentialsView } from "@/features/Credentials/CredentialsView";
import PageHeading from "@/features/PageHeading/PageHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Credentials | bakir.dev",
  "Check out where I validated my skills and experience. Explore my certifications, badges and other credentials",
  "/credentials",
);

export default function CredentialsPage() {
  return (
    <section>
      <PageHeading
        title="Credentials"
        subtitle="Check out where I validated my skills and experience"
      />

      <CredentialsView />
    </section>
  );
}

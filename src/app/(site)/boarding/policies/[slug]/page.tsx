import { notFound } from "next/navigation";
import { boardingPolicySlugs, getBoardingPolicy } from "@/data/policies";
import { PolicyPageView } from "@/components/sections/boarding/PolicyPageView";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

type PolicyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return boardingPolicySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PolicyPageProps) {
  const { slug } = await params;
  const policy = getBoardingPolicy(slug);

  if (!policy) {
    return createPageMetadata("Policy", "Boarding policy at The Academic City School.");
  }

  return createPageMetadata(policy.title, policy.metaDescription);
}

export default async function BoardingPolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const policy = getBoardingPolicy(slug);

  if (!policy) {
    notFound();
  }

  return <PolicyPageView policy={policy} />;
}

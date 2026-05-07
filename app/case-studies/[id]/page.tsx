import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CaseStudyContent from "@/components/case-study-content";
import { caseStudies, getCaseStudy } from "../data";

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ id: caseStudy.id }));
}

type CaseStudyPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy) {
    return {};
  }

  const title = `${caseStudy.title} Case Study`;
  const description = caseStudy.summary;
  const url = `https://ecello.net/case-studies/${caseStudy.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Ecello`,
      description,
      url,
      images: [
        {
          url: "https://ecello.net/logo-square.svg",
          alt: `${caseStudy.title} case study by Ecello`,
        },
      ],
    },
    twitter: {
      title: `${title} | Ecello`,
      description,
      images: ["https://ecello.net/logo-square.svg"],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const caseStudy = getCaseStudy(id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />
      <CaseStudyContent caseStudy={caseStudy} />
      <Footer />
    </div>
  );
}

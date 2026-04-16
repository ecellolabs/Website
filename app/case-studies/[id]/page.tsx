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

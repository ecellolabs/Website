import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ServiceContent from "@/components/service-content";
import { getSiteUrl } from "@/lib/seo";
import { getService, services } from "../data";

type ServicePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getService(id);

  if (!service) {
    return {};
  }

  const title = `${service.title} Services`;
  const url = getSiteUrl(`/services/${service.id}`);

  return {
    title,
    description: service.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Ecello`,
      description: service.summary,
      url,
      images: [
        {
          url: getSiteUrl(service.image),
          alt: `${service.title} services by Ecello`,
        },
      ],
    },
    twitter: {
      title: `${title} | Ecello`,
      description: service.summary,
      images: [getSiteUrl(service.image)],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getService(id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />
      <ServiceContent service={service} />
      <Footer />
    </div>
  );
}

import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ServiceContent from "@/components/service-content";
import { getService, services } from "../data";

type ServicePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
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

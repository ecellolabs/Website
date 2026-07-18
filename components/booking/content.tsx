import Calendly from "@/components/booking/calendly";

export default function BookingPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/ecello/30min";

  return (
    <main>
      <section className="relative pt-20">
        <Calendly url={calendlyUrl} />
      </section>
    </main>
  );
}

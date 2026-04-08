"use client";

import * as React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"];
const dateFormatter = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function BookMeetingPage() {
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [selectedTime, setSelectedTime] = React.useState(timeSlots[1]);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e9f2ff,_#f8fbff_45%,_#f4f7fb_100%)]">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              Book a Meeting
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Plan your next product move with Ecello.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This strategy call is free. Share the basics, choose a time, and we will confirm the
              meeting details with a clear agenda.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:py-20">
            <div className="space-y-6">
              <Card className="border-slate-200 bg-slate-50/70">
                <CardHeader>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Step 1
                  </p>
                  <CardTitle className="text-2xl font-semibold text-slate-900">
                    Basic details and reason for meeting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm font-medium text-blue-800">
                    Your first meeting with Ecello is free. Bring the messy version of the idea; we
                    will help structure it.
                  </div>
                  <form className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input name="name" placeholder="Your name" />
                      <Input name="email" type="email" placeholder="Work email" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input name="company" placeholder="Company" />
                      <Input name="role" placeholder="Your role" />
                    </div>
                    <Input name="meetingReason" placeholder="Reason for meeting" />
                    <Textarea
                      name="context"
                      className="min-h-36"
                      placeholder="Share project context, goals, timeline, or blockers..."
                    />
                  </form>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-slate-50/70">
                <CardHeader>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Step 2
                  </p>
                  <CardTitle className="text-2xl font-semibold text-slate-900">
                    Calendar selection
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
                  <Calendar selected={selectedDate} onSelect={setSelectedDate} />
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Available times
                    </p>
                    <div className="grid gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
                            selectedTime === slot
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="h-fit border-slate-200 bg-white/95 shadow-xl shadow-blue-950/10 lg:sticky lg:top-28">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Step 3
                </p>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  Confirmation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Selected date
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    {selectedDate ? dateFormatter.format(selectedDate) : "Choose a date"}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Selected time
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{selectedTime}</p>
                </div>
                <p className="leading-7 text-slate-600">
                  Once submitted, we will confirm availability and send a calendar invite with the
                  meeting link and agenda.
                </p>
                <Button type="button" className="w-full" size="lg">
                  Confirm Free Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import * as React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"];
const steps = [
  {
    eyebrow: "Step 1",
    title: "Basic details",
    description: "Tell us who is joining and what you want to discuss.",
  },
  {
    eyebrow: "Step 2",
    title: "Choose a time",
    description: "Pick a date and one of the available meeting windows.",
  },
  {
    eyebrow: "Step 3",
    title: "Confirm meeting",
    description: "Review your selected slot and send the request.",
  },
];
const dateFormatter = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});
const initialMeetingDetails = {
  name: "",
  email: "",
  company: "",
  role: "",
  meetingReason: "",
  context: "",
};

export default function BookMeetingPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [meetingDetails, setMeetingDetails] = React.useState(initialMeetingDetails);
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [selectedTime, setSelectedTime] = React.useState(timeSlots[1]);
  const step = steps[activeStep];

  const updateMeetingDetails = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setMeetingDetails((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }));
  };

  const goToNextStep = () => {
    setActiveStep((currentStep) => Math.min(currentStep + 1, steps.length - 1));
  };

  const goToPreviousStep = () => {
    setActiveStep((currentStep) => Math.max(currentStep - 1, 0));
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="bg-white">
          <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
            <Card>
              <CardHeader>
                <div className="mb-3 flex flex-wrap gap-2">
                  {steps.map((item, index) => (
                    <Button
                      key={item.eyebrow}
                      type="button"
                      variant={activeStep === index ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveStep(index)}
                      className={cn(
                        "uppercase tracking-[0.14em]",
                        activeStep !== index && "bg-white text-slate-500 hover:text-blue-700"
                      )}
                      aria-current={activeStep === index ? "step" : undefined}
                    >
                      {item.eyebrow}
                    </Button>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {step.eyebrow}
                </p>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  {step.title}
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-5">
                  {activeStep === 0 && (
                    <>
                      <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm font-medium text-blue-800">
                        Your first meeting with Ecello is free. Bring the messy version of the idea;
                        we will help structure it.
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                          name="name"
                          value={meetingDetails.name}
                          onChange={updateMeetingDetails}
                          placeholder="Your name"
                        />
                        <Input
                          name="email"
                          type="email"
                          value={meetingDetails.email}
                          onChange={updateMeetingDetails}
                          placeholder="Work email"
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                          name="company"
                          value={meetingDetails.company}
                          onChange={updateMeetingDetails}
                          placeholder="Company"
                        />
                        <Input
                          name="role"
                          value={meetingDetails.role}
                          onChange={updateMeetingDetails}
                          placeholder="Your role"
                        />
                      </div>
                      <Input
                        name="meetingReason"
                        value={meetingDetails.meetingReason}
                        onChange={updateMeetingDetails}
                        placeholder="Reason for meeting"
                      />
                      <Textarea
                        name="context"
                        value={meetingDetails.context}
                        onChange={updateMeetingDetails}
                        className="min-h-36"
                        placeholder="Share project context, goals, timeline, or blockers..."
                      />
                    </>
                  )}

                  {activeStep === 1 && (
                    <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
                      <Calendar selected={selectedDate} onSelect={setSelectedDate} />
                      <div className="space-y-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Available times
                        </p>
                        <div className="grid gap-3">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={selectedTime === slot ? "default" : "outline"}
                              onClick={() => setSelectedTime(slot)}
                              className={cn(
                                "h-auto justify-start px-4 py-3 text-left text-sm",
                                selectedTime !== slot && "bg-white text-slate-700 hover:text-blue-700"
                              )}
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-5">
                      <div className="rounded-lg border border-slate-200 bg-white p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Selected date
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">
                          {selectedDate ? dateFormatter.format(selectedDate) : "Choose a date"}
                        </p>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Selected time
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{selectedTime}</p>
                      </div>
                      <p className="leading-7 text-slate-600">
                        Once submitted, we will confirm availability and send a calendar invite with
                        the meeting link and agenda.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 border-t sm:flex-row sm:justify-between">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={goToPreviousStep}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
                {activeStep < steps.length - 1 ? (
                  <Button
                    type="button"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={goToNextStep}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button type="button" size="lg" className="w-full sm:w-auto">
                    Confirm Free Meeting
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

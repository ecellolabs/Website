"use client";

import * as React from "react";
import { CalendarDays, Check, UserRound } from "lucide-react";
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
    icon: UserRound,
  },
  {
    eyebrow: "Step 2",
    title: "Choose a time",
    description: "Pick a date and one of the available meeting windows.",
    icon: CalendarDays,
  },
  {
    eyebrow: "Step 3",
    title: "Confirm meeting",
    description: "Review your selected slot and send the request.",
    icon: Check,
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
  const [selectedTime, setSelectedTime] = React.useState("");
  const step = steps[activeStep];
  const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(meetingDetails.email.trim());
  const hasBasicDetails =
    meetingDetails.name.trim().length > 0 &&
    hasValidEmail &&
    meetingDetails.meetingReason.trim().length > 0;
  const hasSelectedSlot = Boolean(selectedDate && selectedTime);
  const stepRequirements = [hasBasicDetails, hasSelectedSlot, true];
  const canContinue = stepRequirements[activeStep];
  const continueRequirement =
    activeStep === 0
      ? "Name, work email, and meeting reason are required."
      : "Choose a date and time to continue.";

  const canOpenStep = (stepIndex: number) => {
    return stepIndex <= activeStep || stepRequirements.slice(0, stepIndex).every(Boolean);
  };

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
    if (!canContinue) {
      return;
    }

    setActiveStep((currentStep) => Math.min(currentStep + 1, steps.length - 1));
  };

  const goToPreviousStep = () => {
    setActiveStep((currentStep) => Math.max(currentStep - 1, 0));
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <Header />

      <main>
        <section className="bg-[linear-gradient(180deg,_#eff6ff_0%,_#f7f9fc_100%)]">
          <div className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
            <Card>
              <CardHeader>
                <div className="mb-5 flex items-center">
                  {steps.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeStep === index;
                    const isComplete = index < activeStep && stepRequirements[index];
                    const isAvailable = canOpenStep(index);

                    return (
                      <React.Fragment key={item.eyebrow}>
                        <Button
                          type="button"
                          variant={isActive ? "default" : "outline"}
                          size="icon"
                          onClick={() => setActiveStep(index)}
                          disabled={!isAvailable}
                          className={cn(
                            "rounded-full",
                            !isActive &&
                              isComplete &&
                              "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100",
                            !isActive &&
                              !isComplete &&
                              "bg-white text-slate-400 hover:text-blue-700"
                          )}
                          aria-current={isActive ? "step" : undefined}
                        >
                          <Icon aria-hidden="true" />
                          <span className="sr-only">{item.title}</span>
                        </Button>
                        {index < steps.length - 1 && (
                          <div
                            className={cn(
                              "h-px flex-1 bg-slate-200",
                              stepRequirements[index] && "bg-blue-300"
                            )}
                            aria-hidden="true"
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
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
                          required
                        />
                        <Input
                          name="email"
                          type="email"
                          value={meetingDetails.email}
                          onChange={updateMeetingDetails}
                          placeholder="Work email"
                          required
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
                        required
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
                        <p className="mt-2 text-lg font-semibold text-slate-900">
                          {selectedTime || "Choose a time"}
                        </p>
                      </div>
                      <p className="leading-7 text-slate-600">
                        Once submitted, we will confirm availability and send a calendar invite with
                        the meeting link and agenda.
                      </p>
                    </div>
                  )}
                  {!canContinue && activeStep < steps.length - 1 && (
                    <p className="text-sm font-medium text-slate-500">{continueRequirement}</p>
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
                    disabled={!canContinue}
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

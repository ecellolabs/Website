"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CalendarProps = {
  selected?: Date;
  onSelect?: (date: Date) => void;
  disabledDates?: string[];
  className?: string;
};

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthFormatter = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" });

function isSameDay(first?: Date, second?: Date) {
  return (
    first?.getFullYear() === second?.getFullYear() &&
    first?.getMonth() === second?.getMonth() &&
    first?.getDate() === second?.getDate()
  );
}

function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function getMonthDays(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  return [
    ...Array.from({ length: startOffset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => new Date(year, monthIndex, index + 1)),
  ];
}

function Calendar({ selected, onSelect, disabledDates = [], className }: CalendarProps) {
  const today = new Date();
  const [visibleMonth, setVisibleMonth] = React.useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const days = getMonthDays(visibleMonth);

  const goToPreviousMonth = () => {
    setVisibleMonth((month) => new Date(month.getFullYear(), month.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setVisibleMonth((month) => new Date(month.getFullYear(), month.getMonth() + 1, 1));
  };

  return (
    <div className={cn("rounded-xl border border-slate-200 bg-white p-4", className)}>
      <div className="flex items-center justify-between gap-3">
        <Button type="button" variant="outline" size="sm" onClick={goToPreviousMonth}>
          Prev
        </Button>
        <p className="text-sm font-semibold text-slate-900">{monthFormatter.format(visibleMonth)}</p>
        <Button type="button" variant="outline" size="sm" onClick={goToNextMonth}>
          Next
        </Button>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {weekdayLabels.map((weekday) => (
          <span key={weekday} className="py-2">
            {weekday}
          </span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (!day) {
            return <span key={`blank-${index}`} className="h-10" />;
          }

          const isSelected = isSameDay(day, selected);
          const isToday = isSameDay(day, today);
          const isDisabled = disabledDates.includes(toDateKey(day));

          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => {
                if (!isDisabled) {
                  onSelect?.(day);
                }
              }}
              disabled={isDisabled}
              className={cn(
                "flex h-10 items-center justify-center rounded-lg text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-300 disabled:hover:bg-slate-100 disabled:hover:text-slate-300",
                isToday && "border border-blue-200 text-blue-700",
                isSelected && "bg-blue-600 text-white hover:bg-blue-600 hover:text-white"
              )}
              aria-pressed={isSelected}
              aria-disabled={isDisabled}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { Calendar };

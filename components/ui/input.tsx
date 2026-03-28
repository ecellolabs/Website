import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-4 focus-visible:ring-blue-500/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-4 aria-invalid:ring-red-500/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus-visible:border-blue-400 dark:focus-visible:ring-blue-400/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }

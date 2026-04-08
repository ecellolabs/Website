import * as React from "react"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner({ className, size = "md", ...props }: React.HTMLAttributes<HTMLDivElement> & { size?: "sm" | "md" | "lg" | "xl" }) {
  const sizeClasses = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
    xl: "size-12",
  }

  return (
    <div role="status" className={cn("inline-flex animate-spin text-blue-600 dark:text-blue-500", sizeClasses[size], className)} {...props}>
      <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} className="w-full h-full" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export { Spinner }

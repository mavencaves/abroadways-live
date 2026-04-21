import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-slate-200 placeholder:text-slate-400 focus-visible:border-blue-300 focus-visible:ring-blue-200/70 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-xl border bg-white px-4 py-3 text-base text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[color,box-shadow,border-color] outline-none focus-visible:ring-[4px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

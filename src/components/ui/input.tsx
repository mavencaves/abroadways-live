import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-slate-400 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-slate-200 flex h-11 w-full min-w-0 rounded-xl border bg-white px-4 py-2 text-base text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[color,box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-blue-300 focus-visible:ring-blue-200/70 focus-visible:ring-[4px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }

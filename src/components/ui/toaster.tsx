"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-2"> {/* Increased gap */}
              {title && <ToastTitle className="text-lg font-semibold">{title}</ToastTitle>} {/* Increased font size and weight */}
              {description && (
                <ToastDescription className="text-base">{description}</ToastDescription> /* Increased font size */
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport className="p-6 md:p-8" /> {/* Increased padding */}
    </ToastProvider>
  )
}

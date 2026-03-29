import * as React from "react";

type Toast = {
  id: number;
  message: string;
};

let idCounter = 0;

export function Toaster() {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  React.useEffect(() => {
    const handler = (e: any) => {
        const message = e.detail;

        const newToast = {
        id: idCounter++,
        message,
        };

        setToasts((prev) => [...prev, newToast]);

        setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
        }, 3000);
    };

    window.addEventListener("toast", handler);

    return () => window.removeEventListener("toast", handler);
    }, []);
}

// helper opcional para disparar toast
export function useToast() {
  const [_, setTick] = React.useState(0);

  const show = (message: string) => {
    const event = new CustomEvent("toast", { detail: message });
    window.dispatchEvent(event);
    setTick((t) => t + 1);
  };

  return { toast: show };
}
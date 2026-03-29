import * as React from "react";

type TooltipContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const TooltipContext = React.createContext<TooltipContextType | null>(null);

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Tooltip({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative inline-block"
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export function TooltipContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const context = React.useContext(TooltipContext);

  if (!context || !context.open) return null;

  return (
    <div className="absolute z-50 mt-2 rounded-md bg-black text-white text-sm px-2 py-1 shadow-md">
      {children}
    </div>
  );
}
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
}

export const ButtonGroup = ({ children, className }: ButtonGroupProps) => {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 justify-center items-center mt-8", className)}>
      {children}
    </div>
  );
}; 
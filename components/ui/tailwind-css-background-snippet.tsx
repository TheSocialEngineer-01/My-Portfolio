import { cn } from "@/lib/utils";

export const Hero = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative min-h-screen overflow-hidden", className)}>
      {children}
    </div>
  );
};
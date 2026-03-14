import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientCard({ 
  children, 
  className = '', 
  gradient 
}: GradientCardProps) {
  const bgColor = gradient === 'accent' ? 'bg-[#dc494f]/10' : 'bg-[#218cee]/10';
  return (
    <div className={`relative rounded-2xl ${bgColor} p-8 ${className}`}>
      <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#218cee] opacity-20 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-[#dc494f] opacity-20 blur-2xl" />
      <div className="relative rounded-xl bg-white p-8 shadow-2xl">
        {children}
      </div>
    </div>
  );
}
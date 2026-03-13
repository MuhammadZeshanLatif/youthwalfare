import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientCard({ 
  children, 
  className = '', 
  gradient = 'from-blue-500/10 to-indigo-600/10' 
}: GradientCardProps) {
  return (
    <div className={`relative rounded-2xl bg-gradient-to-br ${gradient} p-8 ${className}`}>
      <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 blur-2xl" />
      <div className="relative rounded-xl bg-white p-8 shadow-2xl">
        {children}
      </div>
    </div>
  );
}
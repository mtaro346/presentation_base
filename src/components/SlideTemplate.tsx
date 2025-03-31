import React, { ReactNode } from 'react';

interface SlideTemplateProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function SlideTemplate({
  title,
  subtitle,
  children,
  className = '',
}: SlideTemplateProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto p-12 ${className}`}>
      {title && (
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
      )}
      
      {subtitle && (
        <h2 className="text-2xl text-white/80 mb-8">{subtitle}</h2>
      )}
      
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
} 
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FolderGit2 } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

export default function ProjectImage({ 
  src, 
  alt, 
  fill = false, 
  priority = false,
  className = ''
}: ProjectImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Determine if SVG or real image
  const isSVG = src.endsWith('.svg');

  if (hasError && !isSVG) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
        <FolderGit2 className="w-12 h-12 text-slate-700 opacity-50" />
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
          <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? 600 : undefined}
        height={!fill ? 400 : undefined}
        quality={85}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
      />
    </>
  );
}

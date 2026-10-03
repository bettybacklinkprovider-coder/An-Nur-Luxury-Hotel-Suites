import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  imageSrc: string | null;
  caption?: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxProps> = ({
  imageSrc,
  caption,
  onClose,
}) => {
  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-purple-900/50 hover:bg-purple-800 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <img
          src={imageSrc}
          alt={caption || 'Hotel image preview'}
          className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-purple-500/30"
          referrerPolicy="no-referrer"
        />

        {caption && (
          <p className="mt-4 text-center text-sm font-medium text-purple-200 bg-[#1A092A]/80 px-4 py-2 rounded-lg border border-purple-800/40">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

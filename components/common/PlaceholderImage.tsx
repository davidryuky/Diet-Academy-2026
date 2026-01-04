import React from 'react';

interface PlaceholderImageProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
  text?: string;
  textColor?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  width = "100%", 
  height = "200px", 
  className = "",
  color = "bg-gray-200",
  text = "IMAGE",
  textColor
}) => {
  // Default to a darker color for better contrast on typical light placeholders
  const txtColor = textColor || "text-gray-600";
  
  return (
    <div 
      className={`flex items-center justify-center font-bold tracking-widest ${color} ${txtColor} ${className}`}
      style={{ width, height }}
    >
      <span className="opacity-75">{text}</span>
    </div>
  );
};
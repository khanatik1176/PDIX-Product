// StickyCard component
import React, { FC, ReactNode } from 'react';

interface StickyCardProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  cardBgColor?: string;
  triangleBgColor?: string;
  cardHeight?: number | string; // new prop
}

const isRawColor = (color?: string) => !!color && (color.startsWith('#') || color.startsWith('rgb') || color.startsWith('hsl'));

const StickyCard: FC<StickyCardProps> = ({
  title,
  description,
  className,
  cardBgColor = 'bg-yellow-100',
  triangleBgColor = 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400',
  cardHeight,
}) => {
  const cardStyle: React.CSSProperties = {
    boxShadow: '0 4px 16px 0 rgba(0,0,0,0.10)',
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1.25rem), calc(100% - 1.25rem) 100%, 0 100%)',
    ...(isRawColor(cardBgColor) ? { background: cardBgColor } : {}),
    maxHeight: 206,
    height: cardHeight ? cardHeight : 'auto',
  };
  return (
    <div
      className={`relative ${!isRawColor(cardBgColor) ? cardBgColor : ''} rounded-lg shadow-lg w-[280px] p-5 text-black font-medium text-lg select-none ${className || ''}`}
      style={cardStyle}
    >
      <div className="z-10 relative flex flex-col h-full">
        <div className="font-normal text-sm mb-4 text-lightBlack" style={{ fontFamily: 'Courier, Courier New, monospace' }}>{title}</div>
        {description && (
          <div className="text-sm font-normal flex-1 text-lightBlack" style={{ fontFamily: 'Courier, Courier New, monospace' }}>{description}</div>
        )}
      </div>
      {/* Enhanced triangular page fold effect */}
      <div className="absolute right-0 bottom-0 w-12 h-12 overflow-hidden pointer-events-none">
        {/* Main fold triangle */}
        <div
          className={`absolute left-7 top-7 w-5 h-5 shadow-lg transform rotate-180 ${!isRawColor(triangleBgColor) ? triangleBgColor : ''}`}
          style={{
            clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
            filter: 'drop-shadow(-2px -2px 4px rgba(0,0,0,0.2))',
            ...(isRawColor(triangleBgColor) ? { background: triangleBgColor } : {}),
          }}
        ></div>
      </div>
    </div>
  );
};

export default StickyCard;
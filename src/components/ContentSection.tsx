import React from 'react';

interface ContentSectionProps {
  title: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  alignRight?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  content,
  imageUrl,
  imageAlt,
  alignRight = false,
}) => {
  const containerClasses = alignRight ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`flex flex-col md:${containerClasses} gap-8 py-12`}>
      <div className="flex-1">
        <h2 className={`text-3xl font-bold text-[#7A0000] mb-6 ${alignRight ? 'text-right' : 'text-left'}`}>
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
      {imageUrl && (
        <div className="flex-1">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ContentSection;
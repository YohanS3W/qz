import React from 'react';

interface FeatureButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({
  icon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
        isActive
          ? 'bg-[#5a0000] text-white'
          : 'bg-gray-200 hover:bg-[#7A0000] hover:text-white'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default FeatureButton;
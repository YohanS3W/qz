import React, { useState } from 'react';
import { X, Globe2, Lock, Smile, Image as ImageIcon, Video, Send } from 'lucide-react';

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  isPublic: boolean;
  onToggleVisibility: (isPublic: boolean) => void;
}

const NewPostModal = ({
  isOpen,
  onClose,
  isPublic,
  onToggleVisibility,
}: NewPostModalProps) => {
  const [question, setQuestion] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">Your Username</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => onToggleVisibility(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isPublic ? 'bg-[#7A0000] text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <Globe2 size={20} />
            Public
          </button>
          <button
            onClick={() => onToggleVisibility(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              !isPublic ? 'bg-[#7A0000] text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <Lock size={20} />
            Private
          </button>
        </div>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full h-40 p-4 border rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#7A0000] focus:border-transparent"
          placeholder="What's your legal question?"
        />

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Smile size={20} className="text-gray-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <ImageIcon size={20} className="text-gray-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Video size={20} className="text-gray-500" />
            </button>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              Save draft
            </button>
            <button 
              className="px-4 py-2 rounded-lg bg-[#7A0000] text-white hover:bg-[#5a0000] transition-colors flex items-center gap-2"
              disabled={!question.trim()}
            >
              <span>Submit</span>
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
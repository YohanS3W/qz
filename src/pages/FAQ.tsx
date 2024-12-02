import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategorySelect from '../components/CategorySelect';
import FAQItem from '../components/FAQItem';
import { Link } from 'react-router-dom';
import { faqData } from '../data/faqData';

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory && faq.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderAnswer = (answer: string | string[]) => {
    if (Array.isArray(answer)) {
      return (
        <ol className="list-decimal pl-6 space-y-2">
          {answer.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      );
    }
    return <p>{answer}</p>;
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center opacity-50"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Search Section */}
          <div className="space-y-6">
            <SearchBar onSearch={setSearchQuery} />
            <CategorySelect onSelect={setSelectedCategory} />
          </div>

          {/* FAQ Content */}
          <div className="space-y-6">
            {selectedCategory ? (
              filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    question={faq.question} 
                    answer={renderAnswer(faq.answer)} 
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600">
                    No questions found for {selectedCategory}
                  </p>
                </div>
              )
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  Please select a category to view questions
                </p>
              </div>
            )}
          </div>

          {/* Additional Links */}
          <div className="text-center mt-12">
            <p className="text-lg mb-4">Looking for more answers? Try out now:</p>
            <div className="space-x-4">
              <Link 
                to="/yukkthibot" 
                className="text-[#7A0000] hover:underline font-medium"
              >
                YukkthiBot
              </Link>
              <Link 
                to="/forum" 
                className="text-[#7A0000] hover:underline font-medium"
              >
                Forum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
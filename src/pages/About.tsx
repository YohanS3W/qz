import React from 'react';
import SearchBar from '../components/SearchBar';
import SectionDivider from '../components/SectionDivider';
import ContentSection from '../components/ContentSection';
import FeaturesSection from '../components/FeaturesSection';

const sections = [
  {
    title: 'Our Vision',
    content: 'To revolutionize legal assistance in Sri Lanka by making it accessible, understandable, and efficient for everyone through innovative technology.',
    imageUrl: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'Our Mission',
    content: 'To bridge the gap between legal complexities and public understanding by providing an AI-powered platform that offers instant, accurate legal guidance while maintaining the highest standards of professionalism and ethics.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'Our Values',
    content: 'Integrity, innovation, accessibility, and excellence form the cornerstone of our service. We believe in empowering individuals with knowledge while maintaining the highest standards of accuracy and reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'TPP Factor',
    content: 'Our Technology-People-Process approach ensures a seamless integration of cutting-edge AI technology with human expertise, delivering a comprehensive legal assistance solution.',
    imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'Our Offered Solution',
    content: 'YUKKTHIYA combines AI-powered legal assistance with user-friendly interfaces to provide instant answers, document analysis, and personalized legal guidance.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'Benefits',
    content: '24/7 accessibility, instant responses, cost-effective legal assistance, and comprehensive coverage of various legal domains make YUKKTHIYA your trusted legal companion.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'Understanding Our Features',
    content: 'From our AI-powered chatbot to our extensive legal database and document analysis tools, every feature is designed to simplify your legal journey.',
    customContent: true
  },
  {
    title: 'Our Team',
    content: 'Our diverse team of legal experts, technology professionals, and customer service specialists work together to provide you with the best legal assistance experience.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const About = () => {
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
            <SearchBar onSearch={() => {}} />
          </div>

          {/* Content Sections */}
          <div className="bg-white/90 rounded-lg shadow-lg p-8">
            {sections.map((section, index) => (
              <React.Fragment key={section.title}>
                {section.customContent ? (
                  <>
                    <h2 className="text-3xl font-bold text-[#7A0000] mb-6">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {section.content}
                    </p>
                    <FeaturesSection />
                  </>
                ) : (
                  <ContentSection
                    title={section.title}
                    content={section.content}
                    imageUrl={section.imageUrl}
                    alignRight={index % 2 !== 0}
                  />
                )}
                {index < sections.length - 1 && <SectionDivider />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
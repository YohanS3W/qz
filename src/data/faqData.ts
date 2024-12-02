interface FAQ {
  category: string;
  question: string;
  answer: string | string[];
}

export const faqData: FAQ[] = [
  {
    category: 'Fundamental Rights',
    question: 'What are my rights as a Sri Lankan?',
    answer: [
      'The Right to Freedom of thought, conscience and religion',
      'The Right to freedom from torture',
      'The Right to equality',
      'The Right to freedom from arbitrary arrest, detention and punishment',
      'The Right to access information',
      'The Right to freedom of speech, assembly, association and movement'
    ]
  },
  {
    category: 'Road Traffic Law',
    question: 'What is the Motor Traffic Act of Sri Lanka?',
    answer: [
      'The Motor Traffic Act covers various sections that include;',
      'Registration, possession and use of motor vehicles',
      'Construction and Equipment of motor vehicles',
      'Examination, inspection and testing of vehicles',
      'Revenue Licenses',
      'Permits',
      "Driver's licenses",
      'Rental services',
      'Use of motor vehicles on highways',
      'Road racing',
      'Administration',
      'Court proceedings on offences and penalties',
      'and many more...'
    ]
  }
];
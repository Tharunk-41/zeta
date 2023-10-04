import React from 'react';
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

const FAQ = ({ question, answer }) => {
  return (
    <MDBContainer className="mt-5 faq" style={{ width: '50vw' }}>
      <MDBAccordion alwaysOpen initialActive={0}>
        <MDBAccordionItem collapseId={1} headerTitle={question}>
          {answer}
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
};

const FAQList = () => {
  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.'
    },
    {
      question: 'How do you declare a state variable in React?',
      answer: 'You can use the `useState` hook to declare a state variable.'
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript used with React to describe what the UI should look like.'
    },
  ];

  return (
    <div style={{}}>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
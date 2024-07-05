import React from "react";
import "./FAQ.css";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the referral program?",
      answer:
        "The referral program allows you to earn rewards by referring your friends to our platform.",
    },
    {
      question: "How can I refer someone?",
      answer:
        "You can refer someone by sharing your unique referral link with them. Once they sign up using your link, you'll earn rewards.",
    },
    {
      question: "What rewards can I earn?",
      answer:
        "You can earn various rewards such as discounts, gift cards, or bonus points, depending on the current promotions.",
    },
  ];

  return (
    <Container className="faq-container">
      <Typography variant="h3" gutterBottom className="faq-title">
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" className="faq-question">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq-answer">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;

import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { faqData } from "../../data/faq";
import './faq.css'

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">
          <span>Got Questions? </span>We've got answers
        </h2>

        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            activeId={activeId}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
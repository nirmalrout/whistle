import React from "react";

function FAQItem({ item, activeId, onToggle }) {
  const isOpen = activeId === item.id;

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => onToggle(item.id)}
      >
        <span>{item.question}</span>

        <span className={`icon ${isOpen ? "rotate" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div className={`faq-answer ${isOpen ? "show" : ""}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default FAQItem;
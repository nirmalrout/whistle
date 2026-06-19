import { useState } from "react";
import { comparisonData } from "../../data/comparison";
import ComparisonRow from "./ComparisonRow";
import "./comparison.css";
import logo from "../../assets/whistle-logo.webp";


export default function ComparisonTable() {
  const [activeRow, setActiveRow] = useState(null);

  const handleToggle = (id) => {
    setActiveRow((prev) => (prev === id ? null : id));
  };

  return (
    <section className="comparison-section">
      <h2 className="comparison-title">
        What sets Whistle apart?
      </h2>

      <div className="comparison-table">
        <div className="table-header">
          <div>Features</div>
          <div className="whistle-header"><img  src={logo} loading="lazy"/></div>
          <div>Other Brands</div>
        </div>

        {comparisonData.map((item) => (
          <ComparisonRow
            key={item.id}
            item={item}
            isOpen={activeRow === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
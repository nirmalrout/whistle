import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheckCircle, FaTimesCircle  } from "react-icons/fa";

const Check = () => (
  <FaCheckCircle className="check" />
);

const Cross = () => (
  <FaTimesCircle className="cross" />
);

export default function ComparisonRow({
  item,
  isOpen,
  onToggle
}) {
  const contentRef = useRef(null);

  return (
    <>
      <div className="table-row">
        <div
          className="feature-column"
          onClick={item.description ? onToggle : undefined}
        >
          <span>{item.title}</span>

          {item.description && (
            <span className={`arrow ${isOpen ? "rotate" : ""}`}>
              <IoIosArrowDown />
            </span>
          )}
        </div>

        <div className="whistle-column">
          {typeof item.whistle === "boolean" ? (
            item.whistle ? (
              <Check />
            ) : (
              <Cross />
            )
          ) : (
            item.whistle
          )}
        </div>

        <div className="other-column">
          {typeof item.other === "boolean" ? (
            item.other ? (
              <Check />
            ) : (
              <Cross />
            )
          ) : (
            item.other
          )}
        </div>
      </div>

      {item.description && (
        <div
          className="expandable-content"
          style={{
            maxHeight: isOpen
              ? `${contentRef.current?.scrollHeight}px`
              : "0px"
          }}
        >
          <div ref={contentRef} className="content-inner">
            {item.description}
          </div>
        </div>
      )}
    </>
  );
}
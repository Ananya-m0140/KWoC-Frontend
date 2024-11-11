import React, { useState } from "react";
import Fuse from "fuse.js";
import { FAQs } from "../data/FAQs";
import Footer from "../components/Footer";
import { IconContext } from "react-icons";
import { MdCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "../styles/FAQ.css";
import { Header } from "../components/Header";

function FAQ() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const fuse = new Fuse(FAQs, {
    keys: ["question"],
  });

  const results = fuse.search(query);
  const searchResults = query ? results.map((result) => result.item) : FAQs;

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="faq-container">
        <section className="faq-header">
          <div className="faq-title">Frequently Asked Questions</div>
          <p className="faq-subtitle">
            Wanna ask us a question? Check these first.
          </p>
        </section>
        <div className="search-bar">
          <div className="search-input-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search your query"
              onChange={onChangeHandler}
              value={query}
            />
            {query !== "" && (
              <button onClick={() => setQuery("")} className="search-clear-button">
                <IconContext.Provider value={{ size: "1.6rem" }}>
                  <MdCancel />
                </IconContext.Provider>
              </button>
            )}
          </div>
        </div>

        {/* FAQ Container */}
        <div className="faq-items-container">
          <div className="py-2 space-y-3">
            {searchResults.map((FAQ, i) => {
              const { question, answer } = FAQ;
              return (
                <div key={i} className={`accordion-item ${activeIndex === i ? "open" : ""}`}>
                  <button
                    type="button"
                    className="accordion-toggle"
                    onClick={() => toggleAccordion(i)}
                    aria-expanded={activeIndex === i ? "true" : "false"}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <div className="accordion-header">
                      <span>{question}</span>
                      <div className="accordion-icon">
                        <FaPlus className={`plus-icon ${activeIndex === i ? "hidden" : ""}`} />
                        <FaMinus className={`minus-icon ${activeIndex === i ? "visible" : ""}`} />
                      </div>
                    </div>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={`accordion-content ${activeIndex === i ? "open" : ""}`}
                  >
                    <div className="overflow-hidden">
                      {answer.map((item, index) => (
                        <p
                          className="pb-3"
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;

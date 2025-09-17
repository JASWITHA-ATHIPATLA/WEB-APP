import React from "react";
import "./HistorySection.css";
import RegistrationForm from "./RegistrationForm";

export default function HistorySection() {
  return (
    <section className="history-section">
      <div className="history-container">
        <div className="history-content">
          <img
            src="/assets/backgroundImg.jpg"
            alt="History of Sikkim Monasteries"
            className="history-image"
          />
          <div className="history-desc">
            <h2>History of Sikkim Monasteries</h2>
            <p>
              Sikkim is home to over 200 monasteries, rich in history,
              architecture, and spiritual significance. These monasteries
              preserve Buddhist traditions and are centers of learning, art,
              and cultural heritage.
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <RegistrationForm />
      </div>
    </section>
  );
}

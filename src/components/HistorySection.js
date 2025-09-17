import "./HistorySection.css";

export default function HistorySection() {
  return (
    <section className="history-section">
      <div className="history-container">
        <img
          src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/2a131761ce1eae538a91d5c35a2f1cc438395c17/big-fc72d2ecc9501e7ee3b60bab38177ed7.jpg" 
          alt="History of Sikkim Monasteries"
          className="history-image"
        />
        <div className="history-desc">
          <h2 className="history-title">History of Sikkim Monasteries</h2>
          <p className="history-text">
            Sikkim is home to over 200 monasteries, many of which date back to the 17th and 18th centuries. 
            These monasteries are rich in history, architecture, and spiritual significance. They were built 
            to preserve Buddhist traditions, and over time have become centers of learning, art, and cultural heritage. 
            Tourists and researchers are fascinated by the murals, ancient manuscripts, and the serene atmosphere 
            that these sacred sites offer.
          </p>
        </div>
      </div>
    </section>
  );
}

import "./Hero.css";

const monasteries = [
  {
    id: 1,
    src: "/assets/hero1.png",
    title: "Rumtek Monastery",
    desc: "Rumtek Monastery, also called Dharmachakra Centre, is one of the most important seats of the Kagyu lineage in Sikkim."
  },
  {
    id: 2,
    src: "/assets/hero1.png",
    title: "Pemayangtse Monastery",
    desc: "Pemayangtse Monastery is famous for its beautiful architecture and annual festival rituals."
  },
  {
    id: 3,
    src: "/assets/hero3.png",
    title: "Tashiding Monastery",
    desc: "Tashiding Monastery is a sacred site located on the top of a hill with panoramic views."
  },
  {
    id: 4,
    src: "/assets/hero4.png",
    title: "Tashiding Monastery",
    desc: "Tashiding Monastery is a sacred site located on the top of a hill with panoramic views."
  },
  {
    id: 5,
    src: "/assets/hero5.png",
    title: "Tashiding Monastery",
    desc: "Tashiding Monastery is a sacred site located on the top of a hill with panoramic views."
  },
  {
    id: 6,
    src: "/assets/hero6.png",
    title: "Tashiding Monastery",
    desc: "Tashiding Monastery is a sacred site located on the top of a hill with panoramic views."
  },
  {
    id: 7,
    src: "/assets/hero7.png",
    title: "Tashiding Monastery",
    desc: "Tashiding Monastery is a sacred site located on the top of a hill with panoramic views."
  },
  {
    id: 8,
    src: "/assets/hero8.png",
    title: "Tashiding Monastery",
    desc: "Tashiding Monastery is a sacred site located on the top of a hill with panoramic views."
  }
];

export default function Hero() {
  return (
    <div className="hero-section">
      {monasteries.map((m) => (
        <div className="hero-item" key={m.id}>
          <img src={m.src} alt={m.title} />
          <div className="hero-desc">
            <div className="hero-title">{m.title}</div>
            <div className="hero-text">{m.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

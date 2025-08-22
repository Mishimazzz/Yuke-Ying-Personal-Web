import "./MiddleSection.css";
import { useState } from "react";
function MiddleSection(){
  const [hovered, setHovered] = useState<string | null>(null);

  const items = 
  [
    {
      id: "karma",
      color: "var(--font-color-orange)",
      title: "Everlasting Good Karma",
      text: "I wake up, take my medicine, buy groceries, eat, urinate, \nwatch TV, and go to sleep. After all, tomorrow is another day.",
      sub: "publication, 2025 spring",
      img: "/picture/yyc_main.png",
    },
      {
        id: "nainai1",
        color: "var(--font-color-pink)",
        title: "nainai",
        text: "Only advocating for the arena of instinctive feelings in discourse.",
        sub: "publication, 2023 summer",
        img: "/picture/nainai.png",
      },
      {
        id: "no024",
        color: "var(--font-color-green)",
        title: "No. 024",
        text: "I am a number, a denominator of data, an insignificant component of structure. I have never been my own self.",
        sub: "publication, 2023 summer",
        img: "/picture/no024.png",
      },
      {
        id: "discipline",
        color: "var(--font-color-brown)",
        title: "Discipline Archive",
        text: "Are human willing to be self-controlled? If so, do I have the courage to be different?",
        sub: "installation, 2023 summer",
        img: "/picture/discipline.png",
      },
      {
        id: "cunt",
        color: "var(--font-color-red)",
        title: "CUNT Magazine",
        text: "I have a cunt, I must receive!",
        sub: "publication, 2022 spring",
        img: "/picture/cunt.png",
      },
      {
        id: "quench",
        color: "var(--font-color-blue)",
        title: "Quench Thirst",
        text: "It is futile to try to express the essence of a thing. The effects we perceive, and the complete history of these effects, are enough to define the essence of things.",
        sub: "publication, 2022 winter",
        img: "/picture/quench.png",
      },
      {
        id: "nainai2",
        color: "var(--font-color-pink)",
        title: "nainai",
        text: "No shame for your desire, nainai.",
        sub: "package, 2022 spring",
        img: "/picture/nainai2.png",
      },
  ];

  return(
    <div className="middle-section">
      <div className="Text-Container">
        {items.map((item) => (
          <div
            key={item.id}
            style={{ color: item.color }}
            onMouseEnter={() => setHovered(item.img)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <h4>{item.sub}</h4>
          </div>
        ))}

        {hovered && (
          <div className="preview">
            <img src={hovered} alt="preview" />
          </div>
        )}
      </div>
    </div>
  )
}

export default MiddleSection
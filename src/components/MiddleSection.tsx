import "./MiddleSection.css";
import { useState } from "react";
function MiddleSection(){
  const [hovered, setHovered] = useState(null);

  
  return(
    <div className="middle-section">
      <div className="Text-Container">
        <div style={{ color: "var(--font-color-orange)" }}>
          <h3>Everlasting Good Karma</h3>
          <p>
            I wake up, take my medicine, buy groceries, eat, urinate,
            watch TV, and go to sleep. After all, tomorrow is another day.
          </p>
          <h4>publication, <span className="Integer">2025</span> spring</h4>
        </div>

        <div style={{ color: "var(--font-color-pink)" }}>
          <h3>nainai</h3>
          <p>
            Only advocating for the arena of instinctive feelings in discourse.
            publication, 2023 summer
          </p>
          <h4>publication, <span className="Integer">2023</span> summer</h4>
        </div>

        <div style={{ color: "var(--font-color-green)" }}>
          <h3>No. 024</h3>
          <p>
            I am a number, a denominator of data, an insignificant component
            of structure. I have never been my own self.
          </p>
          <h4>publication, <span className="Integer">2023</span> summer</h4>
        </div>

        <div style={{ color: "var(--font-color-brown)" }}>
          <h3>Discipline Archive</h3>
          <p>
            Are human willing to be self-controlled? If so, do I have the
            couarge to be different?
          </p>
          <h4>installtion, <span className="Integer">2023</span> summer</h4>
        </div>

        <div style={{ color: "var(--font-color-red)" }}>
          <h3>CUNT Magazine</h3>
          <p>
            I have a cunt, I must receive!
          </p>
          <h4>publication, <span className="Integer">2022</span> spring</h4>
        </div>

        <div style={{ color: "var(--font-color-blue)" }}>
          <h3>Quench Thirst</h3>
          <p>
            It is futile to try to express the essence of a thing. The effects we
            perceive, and the complete history of these effects, are enough to
            define the essence of things.
          </p>
          <h4>publication, <span className="Integer">2022</span> winter</h4>
        </div>

        <div style={{ color: "var(--font-color-pink)" }}>
          <h3>nainai</h3>
          <p>
            No shame for your desire, nainai.
          </p>
          <h4>package, <span className="Integer">2022</span> spring</h4>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection
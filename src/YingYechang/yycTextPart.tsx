import "./yycTextPart.css"
import {useState} from 'react'
function YycTextPart()
{
  const images = [
    "/picture/yingyechang/yyc_3.png",
    "/picture/yingyechang/yyc_4.png",
    "/picture/yingyechang/yyc_5.png",
    "/picture/yingyechang/yyc_6.png",
    "/picture/yingyechang/yyc_7.png",
    "/picture/yingyechang/yyc_8.png",
    "/picture/yingyechang/yyc_9.png",
    "/picture/yingyechang/yyc_10.png",
    "/picture/yingyechang/yyc_11.png",
    "/picture/yingyechang/yyc_12.png",
    "/picture/yingyechang/yyc_13.png",
    "/picture/yingyechang/yyc_14.png",
    "/picture/yingyechang/yyc_15.png",
  ]

  const [index, setIndex] = useState(0);
  const prev = () => { console.log("prev clicked", index); setIndex((index - 1 + images.length) % images.length)};
  const next = () => setIndex((index + 1) % images.length);

  return(
    <div>
      <div className="middle-section" style={{ maxWidth: "800px" }}>
        <h3>
          Everlasting Good Karma
        </h3>
        {/* <p>
        Everlasting Good Karma is a memoir designed and produced for my grandfather, 应业长, at the age of
        85. Over the past two years, he handwrote tens of thousands of words reflecting on his life, 
        and carefully compiled a collection of old photographs—hoping to leave behind something more 
        enduring than the body itself, something that could mark his presence beyond time.

        The book is divided into two parts: text and images. The written section presents a chronological 
        narrative of his working life, with subtle references to the illnesses and prescriptions that have 
        accompanied his old age. To accompany the text, I revisited and photographed the homes and 
        workplaces he once inhabited—many of which are now abandoned or transformed. The image 
        section consists of old photographs taken throughout his life. Arranged in reverse chronological 
        order, they trace his appearance, circumstances, and companions—from the present day back to 
        his youth.
      </p> */}
        {/* 默认1920宽 */}
        <img src="/picture/yingyechang/yyc_1.png" alt="" style={{ transform: "translateX(-400px) rotate(10deg) scale(1.7)", marginTop: "230px" }} />
        <p style={{ color: "var(--font-color-orange)", transform: " rotate(10deg) translateX(500px) translateY(-550px)" }}>
          Size: 142 × 210 mm<br />
          Page count: 304 pages<br />
          First edition: 200 copies<br />
          For reading only, not for sale.<br />
        </p>
        <img src="/picture/yingyechang/yyc_2.png" alt="" style={{ transform: "translateX(350px) rotate(10deg) scale(1.7)", marginTop: "100px" }} />
      </div>
      
      {/* slider */}
      <div className="slider">
        <img
          src="/picture/yingyechang/arrowLeft.png"
          alt="prev_button"
          onClick={prev}
          className="arrow-left"
        />

        <img
          src={images[index]}
          alt="slide"
          className="slide"
        />

        <img
          src="/picture/yingyechang/arrowRight.png"
          alt="next_button"
          onClick={next}
          className="arrow-right"
        />
      </div>

    </div>
    
  );
}
export default YycTextPart;
import "./MiddleSection.css";
import { Link } from "react-router-dom";
import {useLanguage} from './LanguageContext';
import { useState } from "react";
function MiddleSection(){
  const [hovered, setHovered] = useState<string | null>(null);
  const { language } = useLanguage();

  const items = 
  [
    {
      id: "karma",
      color: "var(--font-color-orange)",
      title: "Everlasting Good Karma",
      text: "I wake up, take my medicine, buy groceries, eat, urinate, \nwatch TV, and go to sleep. After all, tomorrow is another day.",
      sub: "publication, 2025 spring",
      img: "/picture/yingyechang/yyc_main.png",
      link:"/yingyechang",
    },
    {
      id: "nainai1",
      color: "var(--font-color-pink)",
      title: "nainai",
      text: "Only advocating for the arena of instinctive feelings in discourse.",
      sub: "publication, 2023 summer",
      img: "/picture/nainai.png",
      link: "/yingyechang",
    },
    {
      id: "no024",
      color: "var(--font-color-green)",
      title: "No. 024",
      text: "I am a number, a denominator of data, an insignificant component\n of structure. I have never been my own self.",
      sub: "publication, 2023 summer",
      img: "/picture/no024.png",
      link: "/yingyechang",
    },
    {
      id: "discipline",
      color: "var(--font-color-brown)",
      title: "Discipline Archive",
      text: "Are human willing to be self-controlled? If so, do I have the\n courage to be different?",
      sub: "installation, 2023 summer",
      img: "/picture/discipline.png",
      link: "/yingyechang",
    },
    {
      id: "cunt",
      color: "var(--font-color-red)",
      title: "CUNT Magazine",
      text: "I have a cunt, I must receive!",
      sub: "publication, 2022 spring",
      img: "/picture/CUNT/CUNT_main.jpg",
      link: "/cunt",
    },
    {
      id: "quench",
      color: "var(--font-color-blue)",
      title: "Quench Thirst",
      text: "It is futile to try to express the essence of a thing. The effects we perceive, and the complete history of these effects, are enough to define the essence of things.",
      sub: "publication, 2022 winter",
      img: "/picture/quench.png",
      link: "/yingyechang",
    },
    {
      id: "nainai2",
      color: "var(--font-color-pink)",
      title: "nainai",
      text: "No shame for your desire, nainai.",
      sub: "package, 2022 spring",
      img: "/picture/nainai2.png",
      link: "/yingyechang",
    },
  ];

  const zh_items = [
    {
      id: "karma_zh",
      color: "var(--font-color-orange)",
      title: "应业長",
      text: "我每天醒来、吃药、买菜、吃、拉、看电视、然后睡觉。\n我再醒来，明天又是新的一天了。",
      sub: "书籍，二零二五年春",
      img: "/picture/yingyechang/yyc_main.png",
      link: "/yingyechang",
    },
    {
      id: "nainai1_zh",
      color: "var(--font-color-pink)",
      title: "nainai",
      text: "创造没有中央，没有异端，甚至没有姓名，只呼吁本能\n感受的言论竞技场。",
      sub: "书籍，二零二三年秋",
      img: "/picture/nainai.png",
      link: "/yingyechang",
    },
    {
      id: "no024_zh",
      color: "var(--font-color-green)",
      title: "No.024",
      text: "我是一个数字，是数据的分母，系统里无关紧要的元件。\n我从来都不是我自己。",
      sub: "书籍，二零二三年夏",
      img: "/picture/no024.png",
      link: "/yingyechang",
    },
    {
      id: "discipline_zh",
      color: "var(--font-color-brown)",
      title: "规训档案",
      text: "人类是否自愿自发带上脚铐？如果是，我是否有走出洞\n穴的勇气？",
      sub: "装置，二零二三年夏",
      img: "/picture/discipline.png",
      link: "/yingyechang",
    },
    {
      id: "cunt_zh",
      color: "var(--font-color-red)",
      title: "CUNT 杂志",
      text: "我有一个阴道，我必须接受，也必须回应。",
      sub: "书籍，二零二二年春",
      img: "/picture/cunt.png",
      link: "/cunt",
    },
    {
      id: "quench_zh",
      color: "var(--font-color-blue)",
      title: "止渴",
      text: "试图表达事物的本质是徒劳的。我们所感知的，以及感\n知背后的历史，已足够界定事物的本质。",
      sub: "书籍，二零二二年春",
      img: "/picture/quench.png",
      link: "/yingyechang",
    },
    {
      id: "nainai2_zh",
      color: "var(--font-color-pink)",
      title: "nainai",
      text: "奶奶，请不要对欲望感到羞耻。",
      sub: "包装，二零二二年春",
      img: "/picture/nainai2.png",
      link: "/yingyechang",
    },
  ];

  return(
    <div className="middle-section">
      {language === "zh" ? (
        <div className="Text-Container zh-font">
          {zh_items.map((zh_items) => (
            <div
              key={zh_items.id}
              onMouseEnter={() => setHovered(zh_items.img)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to={zh_items.link} style={{ textDecoration: "none", color: zh_items.color }}>
                <h3>{zh_items.title}</h3>
                <p>{zh_items.text}</p>
                <h4>
                  {zh_items.sub}
                </h4>
              </Link>
            </div>
          ))}

          {hovered && (
            <div className="preview">
              <img src={hovered} alt="preview" />
            </div>
          )}
        </div>
      ) : (
          <div className="Text-Container">
            {items.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHovered(item.img)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link to={item.link} style={{ textDecoration: "none", color: item.color }}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <h4>
                    {item.sub}
                  </h4>
                </Link>
              </div>
            ))}

            {hovered && (
              <div className="preview">
                <img src={hovered} alt="preview" />
              </div>
            )}
          </div>
      )}
      
    </div>
  )
}

export default MiddleSection
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
      id: "hkaga",
      color: "var(--font-color-yellow)",
      title: "HKAGA Art Guide",
      sub: "map, 2025 spring",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "grass",
      color: "var(--font-color-lightBlue)",
      title: "Solveig Qu Suess: Little Grass",
      sub: "posters, 2025 spring",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "spaceCity",
      color: "var(--font-color-purple)",
      title: "Space City: Art in the Age of Artemis",
      sub: "exhibition, 2024 autumn",
      img: "/picture/SpaceCity/Space_main.png",
      link: "/spacecity",
    },
    {
      id: "shadow",
      color: "var(--font-color-darkBlue)",
      title: "The Shadow of Metaphor",
      text: "Illness is the night side of life, a more onerous citizenship.",
      sub: "publication, 2024 autumn",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "caoFei",
      color: "var(--font-color-caofei)",
      title: "Cao Fei: Tidal Flux",
      sub: "exhibition, 2024 summer",
      img: "/picture/CaoFei/cftf_main.png",
      link: "/caifei",
    },
    {
      id: "cyber",
      color: "var(--font-color-cyber)",
      title: "Cybernetics for the 21st Century",
      sub: "publication, 2023 winter",
      img: "/picture/Cyber/cybernetics_main.png",
      link: "/cyber",
    },
    {
      id: "museum",
      color: "var(--font-color-museum)",
      title: "Chinese Canadian Museum – New Year Parade Flags",
      sub: "traditional, 2023 winter",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "Apotheosis",
      color: "var(--font-color-apotbeosis)",
      title: "Apotheosis",
      sub: "publication, 2023 autumn",
      text:"How empty and idle, can’t help finding anything to deifying.",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "nainai",
      color: "var(--font-color-pink)",
      title: "nainai",
      text: "Only advocating for the arena of instinctive feelings in discourse.",
      sub: "publication, 2023 summer",
      img: "/picture/Nainai/nainai_main.png",
      link: "/nainai",
    },
    {
      id: "no024",
      color: "var(--font-color-green)",
      title: "No. 024",
      text: "I am a number, a denominator of data, an insignificant component\n of structure. I have never been my own self.",
      sub: "publication, 2023 summer",
      img: "/picture/024/024_main.png",
      link: "/zerotwofour",
    },
    {
      id: "discipline",
      color: "var(--font-color-brown)",
      title: "Discipline Archive",
      text: "Are human willing to be self-controlled? If so, do I have the\n courage to be different?",
      sub: "installation, 2023 summer",
      img: "/picture/Displine/displine_main.png",
      link: "/disciplinearchive",
    },
    {
      id: "cunt",
      color: "var(--font-color-red)",
      title: "CUNT Magazine",
      text: "I have a cunt, I must receive!",
      sub: "publication, 2022 spring",
      img: "/picture/CUNT/CUNT_main.png",
      link: "/cunt",
    },
    {
      id: "quench",
      color: "var(--font-color-blue)",
      title: "Quench Thirst",
      text: "It is futile to try to express the essence of a thing. The effects we perceive, and the complete history of these effects, are enough to define the essence of things.",
      sub: "publication, 2022 winter",
      img: "/picture/QuenchThirst/quench_main.png",
      link: "/quenchthirst",
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
      id: "hkaga_zh",
      color: "var(--font-color-yellow)",
      title: "香港画廊协会艺术指南",
      sub: "地图，二零二五年春",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "grass_zh",
      color: "var(--font-color-lightBlue)",
      title: "曲若汐：小草",
      sub: "海报，二零二五年春",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "spaceCity_zh",
      color: "var(--font-color-purple)",
      title: "Space City: Art in the Age of Artemis",
      sub: "展览，二零二五年秋",
      img: "/picture/SpaceCity/Space_main.png",
      link: "/spacecity",
    },
    {
      id: "shadow_zh",
      color: "var(--font-color-darkBlue)",
      title: "被隐喻的部分",
      text: "疾病是生命的暗面，是一种更沉重的身份。",
      sub: "书籍，二零二四年秋",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "caoFei_zh",
      color: "var(--font-color-caofei)",
      title: "曹斐：潮汐宙合",
      sub: "展览，二零二四年夏",
      img: "/picture/CaoFei/cftf_main.png",
      link: "/caifei",
    },
    {
      id: "cyber_zh",
      color: "var(--font-color-cyber)",
      title: "二十一世纪的控制论",
      sub: "书籍，二零二三年冬",
      img: "/picture/Cyber/cybernetics_main.png",
      link: "/cyber",
    },
    {
      id: "museum_zh",
      color: "var(--font-color-museum)",
      title: "加拿大华裔博物馆华埠庆会潮绣旗彩",
      sub: "传统物件，二零二三年冬",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "Apotheosis_zh",
      color: "var(--font-color-apotbeosis)",
      title: "崇拜",
      text: "何其空怠，惟能崇拜。",
      sub: "书籍，二零二三秋",
      img: "",
      link: "/yingyechang",
    },
    {
      id: "nainai_zh",
      color: "var(--font-color-pink)",
      title: "nainai",
      text: "创造没有中央，没有异端，甚至没有姓名，只呼吁本能\n感受的言论竞技场。",
      sub: "书籍，二零二三年秋",
      img: "/picture/Nainai/nainai_main.png",
      link: "/nainai",
    },
    {
      id: "no024_zh",
      color: "var(--font-color-green)",
      title: "No.024",
      text: "我是一个数字，是数据的分母，系统里无关紧要的元件。\n我从来都不是我自己。",
      sub: "书籍，二零二三年夏",
      img: "/picture/024/024_main.png",
      link: "/zerotwofour",
    },
    {
      id: "discipline_zh",
      color: "var(--font-color-brown)",
      title: "规训档案",
      text: "人类是否自愿自发带上脚铐？如果是，我是否有走出洞\n穴的勇气？",
      sub: "装置，二零二三年夏",
      img: "/picture/Displine/displine_main.png",
      link: "/disciplinearchive",
    },
    {
      id: "cunt_zh",
      color: "var(--font-color-red)",
      title: "CUNT 杂志",
      text: "我有一个阴道，我必须接受，也必须回应。",
      sub: "书籍，二零二二年春",
      img: "/picture/CUNT/CUNT_main.png",
      link: "/cunt",
    },
    {
      id: "quench_zh",
      color: "var(--font-color-blue)",
      title: "止渴",
      text: "试图表达事物的本质是徒劳的。我们所感知的，以及感\n知背后的历史，已足够界定事物的本质。",
      sub: "书籍，二零二二年春",
      img: "/picture/QuenchThirst/quench_main.png",
      link: "/quenchthirst",
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
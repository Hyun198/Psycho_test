import Link from "next/link";
import RevealSection from "./ScrollReveal/RevealSection";

export default async function Home() {


  const [sleepData, quizData, colorData] = await Promise.all([
    fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/sleepTests").then(res => res.json()),
    fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/quizTests").then(res => res.json()),
    fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/colorTests").then(res => res.json())
  ]);

  return (
    <div>
      <h2 className="main-title">심심할 때 해보는 심리 테스트</h2>
      <nav>
        <Link href="/sleep">수면자세로 알아보는 테스트</Link>
        <Link href="/color">좋아하는 색상으로 알아보는 테스트</Link>
        <Link href="/quiz">문방구에서 물건 구매 테스트</Link>
      </nav>

      <RevealSection className="reveal-left" animationOptions={{ origin: 'left', distance: '50px', duration: 1000 }}>
        <section className="sec-01">
          <div className="container">
            <div className="content">
              <div className="image">
                <img src={sleepData[0].img} />
              </div>
              <div className="text-box">
                <h3>{sleepData[0].testTitle}</h3>
                <p>{sleepData[0].description}</p>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection className="reveal-right" animationOptions={{ origin: 'right', distance: '50px', duration: 1000 }}>
        <section className="sec-02">
          <div className="container">
            <div className="content">
              <div className="image">
                <img src={quizData[0].img} />
              </div>
              <div className="text-box">
                <h3>{quizData[0].testTitle}</h3>
                <p>{quizData[0].description}</p>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection className="reveal-bottom" animationOptions={{ origin: 'bottom', distance: '50px', duration: 1000 }}>
        <section className="sec-03">
          <div className="container">
            <div className="content">
              <div className="image">
                <img src={colorData[0].img} />
              </div>
              <div className="text-box">
                <h3>{colorData[0].testTitle}</h3>
                <p>{colorData[0].description}</p>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>
    </div>

  );
}

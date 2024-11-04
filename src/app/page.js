'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const RevealSection = dynamic(() => import('../components/RevealSection'), {
  ssr: false
})

export default function Home() {
  const [sleepData, setSleepData] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [colorData, setColorData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [sleep, quiz, color] = await Promise.all([
          fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/sleepTests").then(res => res.json()),
          fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/quizTests").then(res => res.json()),
          fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/colorTests").then(res => res.json())
        ]);

        // 데이터를 상태에 설정
        setSleepData(sleep);
        setQuizData(quiz);
        setColorData(color);
      } catch (error) {
        console.error("데이터 로딩 중 오류 발생:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="main-title">심심할 때 해보는 심리 테스트</h2>
      <nav>
        <Link href="/sleep">수면자세로 알아보는 테스트</Link>
        <Link href="/color">좋아하는 색상으로 알아보는 테스트</Link>
        <Link href="/quiz">문방구에서 물건 구매 테스트</Link>
      </nav>

      {sleepData.length > 0 && (
        <RevealSection className="reveal-left" animationOptions={{ origin: 'left', distance: '50px', duration: 1000 }}>
          <section className="sec-01">
            <Link href="/sleep">
              <div className="container">
                <div className="content">
                  <div className="image">
                    <img src={sleepData[0].img} alt={sleepData[0].testTitle} />
                  </div>
                  <div className="text-box">
                    <h3>{sleepData[0].testTitle}</h3>
                    <p>{sleepData[0].description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </RevealSection>
      )}

      {quizData.length > 0 && (
        <RevealSection className="reveal-right" animationOptions={{ origin: 'right', distance: '50px', duration: 1000 }}>
          <section className="sec-02">
            <Link href="/quiz">
              <div className="container">
                <div className="content">
                  <div className="image">
                    <img src={quizData[0].img} alt={quizData[0].testTitle} />
                  </div>
                  <div className="text-box">
                    <h3>{quizData[0].testTitle}</h3>
                    <p>{quizData[0].description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </RevealSection>
      )}

      {colorData.length > 0 && (
        <RevealSection className="reveal-left" animationOptions={{ origin: 'left', distance: '50px', duration: 1000 }}>
          <section className="sec-03">
            <Link href="/color">
              <div className="container">
                <div className="content">
                  <div className="image">
                    <img src={colorData[0].img} alt={colorData[0].testTitle} />
                  </div>
                  <div className="text-box">
                    <h3>{colorData[0].testTitle}</h3>
                    <p>{colorData[0].description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </RevealSection>
      )}

    </div>

  );
}

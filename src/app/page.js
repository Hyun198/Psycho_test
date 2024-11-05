import Home from './home/page';

export default async function Page() {

  const [sleepData, quizData, colorData] = await Promise.all([
    fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/sleepTests").then(res => res.json()),
    fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/quizTests").then(res => res.json()),
    fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/colorTests").then(res => res.json())
  ]);

  return (
    <Home sleepData={sleepData} quizData={quizData} colorData={colorData} />
  );
}

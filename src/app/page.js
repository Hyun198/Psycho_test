import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>여러 가지 심리 테스트</h1>
      <ul>
        <li>
          <Link href="/sleep">수면자세로 알아보는 테스트</Link>
        </li>
        <li>
          <Link href="/color">좋아하는 색상으로 알아보는 테스트</Link>
        </li>
        <li>
          <Link href="/quiz">문방구에서 물건 구매 테스트</Link>
        </li>
      </ul>
    </div>

  );
}

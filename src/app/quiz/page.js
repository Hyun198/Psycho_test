'use client'
import React, { useState, useEffect } from "react"
import './quiz.style.css'
import Link from "next/link";
export default function Quiz() {

    const [quizTest, setQuizTest] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/quizTests")
            const data = await response.json()
            setQuizTest(data[0]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedDescription = quizTest.questions[0].options.find(
            option => option.text === selectedOption
        )?.description;
        setResult(selectedDescription || '선택한 옵션이 없습니다.');
    }

    return (
        <div className="quizTest-container">
            <h1>색깔로 알아보는 테스트</h1>
            <div className="description">
                {quizTest?.description}
            </div>
            <div className="img">
                <img src={quizTest?.img} />
            </div>
            <form onSubmit={handleSubmit}>
                {quizTest?.questions[0].options.map((option) => (
                    <div key={option.id}>
                        <input
                            type="radio"
                            id={`option-${option.id}`}
                            name="colorOption"
                            value={option.text}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option-${option.id}`}>{option.text}</label>
                    </div>
                ))}

            </form>
            <button onClick={handleSubmit}>결과보기</button>
            {result && (
                <div className="result">
                    <p>{result}</p>
                    <Link href="/">처음 화면</Link>
                </div>
            )}
        </div>
    )
}
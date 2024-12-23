'use client'
import React, { useState, useEffect } from "react"
import './sleep.style.css'
import Link from "next/link";
export default function Sleep() {

    const [sleepTest, setSleepTest] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [result, setResult] = useState('');
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/Hyun198/Psycho_test/sleepTests")
            const data = await response.json()
            setSleepTest(data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedDescription = sleepTest.questions[0].options.find(
            option => option.text === selectedOption
        )?.description;
        setResult(selectedDescription || alert('한가지는 선택해주세요!'));
    }

    return (
        <div className="SleepTest-container">
            <h1>수면 자세로 테스트</h1>
            <div className="description">
                {sleepTest?.description}
            </div>
            <div className="img">
                <img src={sleepTest?.img} />
            </div>
            <form onSubmit={handleSubmit}>
                {sleepTest?.questions[0].options.map((option) => (
                    <div key={option.id}>
                        <input
                            type="radio"
                            id={`option-${option.id}`}
                            name="sleepOption"
                            value={option.text}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option-${option.id}`}>{option.text}</label>
                    </div>
                ))}

            </form>
            <button onClick={handleSubmit}>결과보기</button>

            <div className="result">
                <p>{result}</p>
                <Link href="/">
                    <i className="fas fa-home"></i>
                </Link>
            </div>

        </div>
    )
}
// components/TestLayout.js
import Link from 'next/link';

const TestLayout = ({ description, imgSrc, options, onOptionChange, onSubmit, result }) => {



    return (
        <div className="Test-container">
            <h1></h1>
            <div className="description">
                {description}
            </div>
            <div className="img">
                <img src={imgSrc} alt={title} />
            </div>
            <form onSubmit={onSubmit}>
                {options.map((option) => (
                    <div key={option.id}>
                        <input
                            type="radio"
                            id={`option-${option.id}`}
                            name="testOption"
                            value={option.text}
                            onChange={onOptionChange}
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
    );
};

export default TestLayout;

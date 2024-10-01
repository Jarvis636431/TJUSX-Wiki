import { useState } from 'react';

const QuizQuestion = () => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);

    const question = "When is the most suitable time to eat probiotics?";
    const options = [
        { text: 'An hour and a half after meals', isCorrect: true },
        { text: 'Eating with food', isCorrect: false },
        { text: 'Just eat when you think of it', isCorrect: false },
    ];

    const handleOptionClick = (index: number) => {
        setSelectedOption(index);
        setShowResult(true);
    };

    return (
        <div
            style={{
                backgroundColor: '#FFECD3',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'start' ,
                width: '40%',
                margin: '0 auto' // Center the component horizontally
            }}>
            <h2 style={{ color: '#C38073', fontSize: '20px',fontWeight:'bold'}}>{question}</h2>
            <ul style={{ listStyleType: 'none', padding: 0 ,fontWeight:'bold'}}>
                {options.map((option, index) => {
                    // Generate option label (A, B, C, ...)
                    const optionLabel = String.fromCharCode(65 + index); // 65 is the ASCII code for 'A'
                    let displaySymbol = '';

                    if (showResult) {
                        if (index === selectedOption) {
                            displaySymbol = option.isCorrect ? '✔️' : '❌';
                        } else {
                            displaySymbol = option.isCorrect ? '✔️' : '❌';
                        }
                    }

                    return (
                        <li key={index}>
                            <button onClick={() => handleOptionClick(index)}
                            style={{
                                backgroundColor: '#FFF8EE',
                                color: '#A47A6C',
                                border: 'none',
                                padding: '10px 20px',
                                margin: '10px',
                                borderRadius: '10px',
                                cursor: 'pointer'
                            }}>
                                {showResult ? displaySymbol : optionLabel} {option.text}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default QuizQuestion;



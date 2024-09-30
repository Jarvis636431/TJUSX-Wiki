import React, { useState } from 'react';

interface QuizQuestionProps {
    question: string;
    options: { text: string; isCorrect: boolean }[];
}

const defaultIcons = ['A.png', 'B.png', 'C.png']; // 假设这些是默认的图标文件名
const correctIcon = 'correct.png'; // 正确图标的文件名
const wrongIcon = 'wrong.png'; // 错误图标的文件名

function QuizQuestion({ question, options }: QuizQuestionProps) {
    const [selectedOption, setSelectedOption] = useState<{ text: string; isCorrect: boolean } | null>(null);

    const handleOptionClick = (option: { text: string; isCorrect: boolean }) => {
        setSelectedOption(option);
    };

    const quizContainerStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
    };

    const optionStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const selectedStyle = {
        backgroundColor: '#f0f0f0',
    };

    const resultStyle = {
        marginTop: '20px',
        fontWeight: 'bold',
    };

    return (
        <div style={quizContainerStyle}>
            <h2>请选择正确的答案：</h2>
            <p>{question}</p>
            {options.map((option, index) => (
                <div
                    key={index}
                    style={{ ...optionStyle, ...(selectedOption === option ? selectedStyle : {}) }}
                    onClick={() => handleOptionClick(option)}
                >
                    <img src={selectedOption === option ? (option.isCorrect ? correctIconUrl : wrongIconUrl) : defaultIcons[index]} alt="" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <span>{option.text}</span>
                </div>
            ))}
            {selectedOption && (
                <div style={resultStyle}>
                    {selectedOption.isCorrect
                        ? '恭喜您，答案正确！'
                        : `很遗憾，正确答案应该是 ${options.find(opt => opt.isCorrect)?.text}`.replace('undefined', '未知')}
                </div>
            )}
        </div>
    );
}

export default QuizQuestion;
import React, { useState } from 'react';

interface QuizQuestionProps {
    question: string;
    options: string[];
    correctAnswer: string;
}

function QuizQuestion({ question, options, correctAnswer }: QuizQuestionProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null); // 保存用户的选择
    const [showResult, setShowResult] = useState(false); // 控制结果是否显示

    const handleOptionClick = (option: string) => {
        setSelectedOption(option); // 更新用户的选择
    };

    const handleSubmit = () => {
        setShowResult(true); // 显示结果
    };

    return (
        <div>
            <h2>请选择正确的答案：</h2>
            <p>{question}</p>
            <form>
                {options.map((option, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            name="answer"
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => handleOptionClick(option)}
                        />
                        <label>{option}</label><br />
                    </div>
                ))}
            </form>
            <button onClick={handleSubmit} disabled={!selectedOption}>提交答案</button>
            {showResult && (
                <div>
                    {selectedOption && (
                        <p>
                            {selectedOption.substring(0, 1).trim() === correctAnswer
                                ? '恭喜您，答案正确！'
                                : `很遗憾，正确答案是 ${correctAnswer}。`}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default QuizQuestion;
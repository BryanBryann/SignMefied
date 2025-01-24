import React, { useState } from 'react';

const PracticeWords = ({ onProgressUpdate }) => {
    const [letters, setLetters] = useState(['A', 'B', 'C']);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [clickCount, setClickCount] = useState(0);

    const handleCorrect = () => {
        const nextLetters = [];
        for (let i = 0; i < 3; i++) {
            const currentIndex = alphabet.indexOf(letters[i]) + 1;
            if (currentIndex < alphabet.length) {
                nextLetters.push(alphabet[currentIndex]);
            } else {
                nextLetters.push('A');
            }
        }
        setLetters(nextLetters);
        setClickCount(clickCount + 1);
        const progress = Math.min(Math.floor((clickCount + 1) / 26 * 100), 100);
        onProgressUpdate(progress);
    };

    return (
        <div className="row container d-flex justify-content-center scroll-container">
            {letters.map((letter, index) => (
                <div
                    key={index}
                    className={`container m-2 az-card az-border rounded ${index === 0 ? 'bg-white' : 'bg-grey'}`}
                >
                    <p className="text-dark fw-bold fs-3">{letter}{letter.toLowerCase()}</p>
                    <div className="container d-flex justify-content-center">
                        <img
                            className="az-img"
                            src={`dist/img/${letter.toLowerCase()}.png`}
                            alt={`${letter} image`}
                        />
                    </div>
                </div>
            ))}
            <div className="container fixed-bottom mb-3 d-flex justify-content-center">
                <button className="btn bg-lightpurple text-white" onClick={handleCorrect}>
                    CORRECT
                </button>
            </div>
        </div>
    );
};

export default PracticeWords;
"use client";

import React, { useState } from "react";

// Your WhatsApp phishing quiz data
const quizData = [
  {
    question: "Which of the following is a common tactic used in WhatsApp phishing?",
    choices: [
      "a) Requesting personal info",
      "b) Sharing memes",
      "c) Group chats for socializing",
      "d) Sending legitimate messages",
    ],
    correctAnswer: "a) Requesting personal info",
  },
  {
    question: "How can you identify a potential WhatsApp phishing attempt?",
    choices: [
      "a) Emoji-filled messages",
      "b) Request for bank info",
      "c) Claim of winning lottery",
      "d) Attractive profile picture",
    ],
    correctAnswer: "b) Request for bank info",
  },
  {
    question: "What is WhatsApp phishing?",
    choices: [
      "a) Fraudulent info gathering",
      "b) Enhanced privacy tool",
      "c) Blocking unwanted contacts",
      "d) Encrypted messaging service",
    ],
    correctAnswer: "a) Fraudulent info gathering",
  },
  {
    question: "What should you do if you suspect a WhatsApp phishing attempt?",
    choices: [
      "a) Delete and ignore",
      "b) Reply with personal info",
      "c) Share with contacts",
      "d) Click provided links",
    ],
    correctAnswer: "a) Delete and ignore",
  },
  {
    question:
      "Which of the following measures can help prevent falling victim to WhatsApp phishing?",
    choices: [
      "a) Keep account public",
      "b) Regularly update status",
      "c) Never share personal info",
      "d) Accept unknown requests",
    ],
    correctAnswer: "c) Never share personal info",
  },
];

export default function DetailedFeatures() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleAnswerSelect = (choice: string) => {
    setSelectedAnswer(choice);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setShowQuiz(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsQuizCompleted(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e8f5e9] py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        {/* Video Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full min-h-[400px] flex">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/3SbOvB5L1G0"
            title="WhatsApp Phishing Awareness Training"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Quiz Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6 text-center border border-gray-100 h-full min-h-[400px] flex flex-col justify-center overflow-y-auto">
          {!showQuiz ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Cyber Security Awareness Quiz
              </h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Test your knowledge of phishing, social engineering, and safe
                digital practices.
              </p>
              <button
                onClick={() => setShowQuiz(true)}
                className="inline-block bg-[#45c2a4] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#3db194] transition-all shadow-md"
              >
                Start Quiz
              </button>
            </>
          ) : isQuizCompleted ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Quiz Completed!
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Your Score: {score} / {quizData.length}
              </p>
              <button
                onClick={handleRestart}
                className="inline-block bg-[#45c2a4] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#3db194] transition-all"
              >
                Restart Quiz
              </button>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Question {currentQuestion + 1} of {quizData.length}
              </h3>
              <p className="text-gray-700 text-base mb-6">
                {quizData[currentQuestion].question}
              </p>
              <div className="space-y-3 mb-6">
                {quizData[currentQuestion].choices.map((choice, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(choice)}
                    className={`block w-full text-left border px-4 py-2 rounded-lg ${
                      selectedAnswer === choice
                        ? "bg-[#45c2a4] text-white"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    {choice}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`bg-[#45c2a4] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#3db194] transition-all ${
                  !selectedAnswer ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {currentQuestion + 1 === quizData.length ? "Finish" : "Next"}
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

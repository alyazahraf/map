import React, { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { motion } from "framer-motion";

const Posttest = () => {
  const [activeCard, setActiveCard] = useState(false);
  const handleFlipCard = () => {
    setActiveCard(!activeCard);
  };

  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const questions = ['Question 1', 'Question 2', 'Question 3', /* ...more questions */];
  // const goToNextQuestion = () => {
  //   if (currentQuestion < questions.length - 1) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   }
  // };

  return (
    <motion.div
      className="container-1 overflow-y-auto justify-start"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col gap-6 h-full w-full ">
        <div className="container-2 items-center justify-center">
          <div>
            <h1>Post-Test</h1>
          </div>
          <div
            className={`card w-full h-full ${activeCard ? "flipped" : ""}`}
            onClick={handleFlipCard}
          >
            <div className="front">
              <div className=" flex flex-col gap-6 px-14 h-full ">
                <div className="h-full bg-question bg-cover bg-no-repeat bg-fixed bg-center w-full rounded-4xl text-white px-5 flex items-center justify-center">
                  <h1>Lorem Ipsum Lorem Ipsum </h1>
                </div>
                <div className="invisible">
                  <ButtonPrimary>Lanjutkan</ButtonPrimary>
                </div>
              </div>
            </div>
            <div className="back">
              <div className=" flex flex-col gap-6 px-14 h-full ">
                <div className="h-full bg-answer bg-cover bg-no-repeat bg-fixed bg-center w-full rounded-4xl text-white px-5 flex items-center justify-center">
                  <h1>Lorem Ipsum Lorem Ipsum </h1>
                  {/* <h1>{questions[currentQuestion]}</h1>
            </div>
            <div onClick={handleFlipCard}>
              <ButtonPrimary onClick={goToNextQuestion}>Lanjutkan</ButtonPrimary>
            </div> */}
                </div>
                <div>
                  <ButtonPrimary>Lanjutkan</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Posttest;

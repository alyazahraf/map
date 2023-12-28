import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Pretest = () => {
  const { id } = useParams();
  return (
    <motion.div
      className="container-1 overflow-auto justify-start"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col gap-5 h-full min-h-[500px]">
        <div className="container-2">
          <div>
            <h1>Pre-Test</h1>
          </div>
          <div className="overflow-y-scroll h-full">
            <p>
              1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique id totam ut iusto praesentium! Quas fuga veniam ipsum
              temporibus quibusdam, eligendi sint, exercitationem eos facere
              accusamus accusantium quo culpa explicabo!
            </p>
            <p>
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique id totam ut iusto praesentium! Quas fuga veniam ipsum
              temporibus quibusdam, eligendi sint, exercitationem eos facere
              accusamus accusantium quo culpa explicabo!
            </p>
            <p>
              3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique id totam ut iusto praesentium! Quas fuga veniam ipsum
              temporibus quibusdam, eligendi sint, exercitationem eos facere
              accusamus accusantium quo culpa explicabo!
            </p>
            <p>
              4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique id totam ut iusto praesentium! Quas fuga veniam ipsum
              temporibus quibusdam, eligendi sint, exercitationem eos facere
              accusamus accusantium quo culpa explicabo!
            </p>
            <p>
              5. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique id totam ut iusto praesentium! Quas fuga veniam ipsum
              temporibus quibusdam, eligendi sint, exercitationem eos facere
              accusamus accusantium quo culpa explicabo!
            </p>
            <p>
              6. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique id totam ut iusto praesentium! Quas fuga veniam ipsum
              temporibus quibusdam, eligendi sint, exercitationem eos facere
              accusamus accusantium quo culpa explicabo!
            </p>
            <p>
              7. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique id totam ut iusto praesentium! Quas fuga veniam ipsum
              temporibus quibusdam, eligendi sint, exercitationem eos facere
              accusamus accusantium quo culpa explicabo!
            </p>
          </div>
          <div>
            <ButtonPrimary href={`/${id}`}>Lanjutkan</ButtonPrimary>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pretest;

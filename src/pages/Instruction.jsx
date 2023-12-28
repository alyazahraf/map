import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { motion } from "framer-motion";

const Instruction = () => {
  return (
    <motion.div
      className="container-1 overflow-y-scroll justify-start"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col h-full min-h-[500px]">
        <div className="container-2 ">
          <div>
            <h1>Petunjuk</h1>
          </div>
          <div className="overflow-y-scroll h-full mx-10 hidebox-scrollbar">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptatem reiciendis, laborum expedita natus nihil facilis
              quisquam velit voluptates eveniet quam libero deleniti odio
              accusantium beatae provident iste, itaque nemo.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, vel cumque asperiores laboriosam ut nihil expedita
              neque nobis distinctio reiciendis culpa, fuga aliquam id impedit
              voluptatibus magnam. Quas, magni debitis.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              laborum dolorum ullam voluptatem laboriosam dolores in iusto
              similique harum quisquam cumque optio totam ducimus hic provident
              sed ad, commodi officiis?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              laborum dolorum ullam voluptatem laboriosam dolores in iusto
              similique harum quisquam cumque optio totam ducimus hic provident
              sed ad, commodi officiis?
            </h2>
          </div>
          <div>
            <ButtonPrimary href="/profile">Lanjutkan</ButtonPrimary>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Instruction;

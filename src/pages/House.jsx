import React from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import house from "../assets/images/house.png";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useParams } from "react-router-dom";

const House = ({ closeModal }) => {
  const { id } = useParams();
  return (
    <motion.div
      className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-70 flex items-center justify-center"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="relative rounded-lg text-left overflow-hidden transform transition-all w-[50%] flex flex-col items-center">
        <div className="flex items-center justify-center flex-col invisible">
          <a href={`/${id}`}>
            <button className="px-3 py-3 bg-yellow-0 rounded-full">
              <IoClose className="title-profile cursor-pointer text-white" />
            </button>
          </a>
        </div>
        <div className="px-4 ">
          <div className="invisible">
            <h1>DKI Jakarta</h1>
          </div>
          <div className="container-culture h-full">
            <div className="py-4 px-6 flex gap-2 flex-col ">
              <label className="title-profile">Lorem Ipsum</label>
              <p className="text-justify h-60 2xl:h-full overflow-y-auto scrollbar-hide">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi excepturi natus nisi repellendus beatae, voluptatibus
                pariatur quia a quos aliquam dolore autem vero, totam nemo error
                aperiam recusandae, maxime cum.
              </p>
            </div>
            <img src={house} className="rounded-tr-3xl w-[44%] 2xl:w-[50%]" />
          </div>
          <div className="button-culture" onClick={closeModal}>
            <label className="title-profile text-white">Makanan</label>
            <div>
              <FaAnglesLeft className="text-white title-profile" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default House;

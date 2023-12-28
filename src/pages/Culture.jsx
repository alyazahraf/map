import React, { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import food from "../assets/images/food.png";
import house from "../assets/images/house.png";
import Food from "./Food";
import House from "./House";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import cultureData from "../data/culture.json"; // Check if this path and import statement are correct

const Culture = () => {
  const { id } = useParams();
  const [showFoodModal, setShowFoodModal] = useState(false);
  const [showHouseModal, setShowHouseModal] = useState(false);
  const [provinceData, setProvinceData] = useState(null);
  useEffect(() => {
    const fetchDataById = () => {
      const data = cultureData.data.find((item) => item[id]);
      if (data && data[id]) {
        setProvinceData(data[id]);
      } else {
        console.log(`Tidak ada data untuk ID: ${id}`);
      }
    };

    fetchDataById();
  }, [id]);

  console.log(provinceData);
  console.log(id);
  // console.log(cultureData.data);

  const openFoodModal = () => {
    setShowFoodModal(true);
  };

  const closeFoodModal = () => {
    setShowFoodModal(false);
  };

  const openHouseModal = () => {
    setShowHouseModal(true);
  };

  const closeHouseModal = () => {
    setShowHouseModal(false);
  };

  return (
    <motion.div
      className="overflow-hidden container-1 fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-70 flex items-center justify-center"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col items-center justify-center lg:py-1 relative dark:bg-gray-700 rounded-lg text-left overflow-hidden transform transition-all">
        <div className="flex items-center justify-center flex-col relative z-50">
          <a href={`/${id}`}>
            <button className="px-3 py-3 bg-yellow-0 rounded-full">
              <IoClose className="title-profile cursor-pointer text-white" />
            </button>
          </a>
        </div>
        <div className="px-8 pb-2 pt-0 gap-6 flex flex-col">
          <div className="relative z-50">
            {/* <h1>Text Rumah Bali: {provinceData[id]["text-rumah"]}</h1> */}
          </div>

          <div className="flex flex-row gap-14 items-center justify-center cursor-pointer">
            <div
              className="shadow-lg w-[30%] 2xl:w-[50%] overflow-hidden food"
              onClick={openFoodModal}
            >
              <img
                src={food}
                className="rounded-tl-lg rounded-tr-lg w-full object-cover"
              />
              <div className="button-culture w-full ">
                <label className="title-profile text-white">
                  {provinceData && provinceData.province ? ( // Add conditional check before accessing 'provinceData.province'
                    <h1>{provinceData.province}</h1>
                  ) : (
                    <h1>Loading...</h1> // Or display a loading indicator while data is being fetched
                  )}{" "}
                </label>
                <div>
                  <FaAngleRight className="text-white title-profile" />
                </div>
              </div>
            </div>

            <div
              className="shadow-lg w-[30%] 2xl:w-[50%] overflow-hidden house"
              onClick={openHouseModal}
            >
              <img
                src={house}
                className="rounded-tl-lg rounded-tr-lg w-full "
              />
              <div className="button-culture w-full ">
                <label className="title-profile text-white cursor-pointer">
                  {provinceData && provinceData.province ? ( // Add conditional check before accessing 'provinceData.province'
                    <h1>{provinceData.province}</h1>
                  ) : (
                    <h1>Loading...</h1> // Or display a loading indicator while data is being fetched
                  )}
                </label>
                <div>
                  <FaAngleLeft className="text-white title-profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFoodModal && <Food closeModal={closeFoodModal} />}
      {showHouseModal && <House closeModal={closeHouseModal} />}
    </motion.div>
  );
};

export default Culture;

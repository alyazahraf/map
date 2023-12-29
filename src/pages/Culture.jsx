import React, { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import food from "../assets/images/food.png";
import house from "../assets/images/house.png";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import cultureData from "../data/culture.json";

const Culture = ({ closeCulture }) => {
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data or any asynchronous task
    const fetchData = async () => {
      // Perform your data fetching logic here...
      // For demonstration purposes, use setTimeout to mimic data fetching delay
      setTimeout(() => {
        setLoading(false); // Once data is fetched, set loading state to false
      }, 10); // Adjust this time according to your actual data fetching time
    };

    fetchData();
  }, []);

  // console.log(provinceData.makanan);
  // console.log(id);
  // console.log(cultureData.data);

  console.log(closeCulture);
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
    <div>
      <motion.div
        className="overflow-hidden container-1 fixed inset-0 z-5  bg-gray-900 bg-opacity-50 flex items-center py-12 justify-center "
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{
          x: window.innerWidth,
          transition: { duration: 0.2, delay: 0.2 },
        }}
      >
        <div className="z-5 flex flex-col items-center justify-center lg:py-1 relative transform transition-all ">
          <div
            className="flex items-center justify-center flex-col relative z-50"
            onClick={closeCulture}
          >
            {/* <a href={`/${id}`}> */}
            <button className="px-3 py-3 bg-yellow-0 rounded-full">
              <IoClose className="title-profile cursor-pointer text-white" />
            </button>
            {/* </a> */}
          </div>
          <div className="px-8 pb-2 pt-0 gap-6 flex flex-col">
            <div className="relative" style={{ zIndex: 20 }}>
              <h1>DKI Jakarta</h1>
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
                  <label className="title-profile text-white">Makanan</label>
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
                    Rumah Adat
                  </label>
                  <div>
                    <FaAngleLeft className="text-white title-profile" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showFoodModal && (
          <motion.div
            className="fixed inset-0 z-10 overflow-hidden bg-gray-900 bg-opacity-70 flex items-center py-12 justify-center"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
          >
            <div className="relative rounded-lg text-left overflow-hidden transform transition-all w-[50%] flex flex-col items-center">
              <div className="flex items-center justify-center flex-col">
                {/* <a href={`/${id}`}> */}
                <button className="px-3 py-3 bg-yellow-0 rounded-full">
                  <IoClose className="title-profile cursor-pointer text-white" />
                </button>
                {/* </a> */}
              </div>
              <div className="px-4">
                <div className="">
                  <h1>DKI Jakarta</h1>
                </div>
                <div className="container-culture h-full">
                  <img
                    src={food}
                    className="rounded-tl-3xl w-[44%] 2xl:w-[50%]"
                  />
                  <div className="py-4 px-6 flex gap-2 flex-col ">
                    <label className="title-profile">Lorem Ipsum</label>
                    <p className="text-justify h-60 2xl:h-full overflow-y-auto">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Commodi excepturi natus nisi repellendus beatae,
                      voluptatibus pariatur quia a quos aliquam dolore autem
                      vero, totam nemo error aperiam recusandae, maxime cum.
                    </p>
                  </div>
                </div>
                <div>
                  <a>
                    <div className="button-culture" onClick={closeFoodModal}>
                      <label className="title-profile text-white">
                        Makanan
                      </label>
                      <div>
                        <FaAngleRight className="text-white title-profile" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {showHouseModal && (
          <motion.div
            className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-50 flex items-center justify-center"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
          >
            <div className="relative rounded-lg text-left overflow-hidden transform transition-all w-[50%] flex flex-col items-center">
              <div className="flex items-center justify-center flex-col invisible">
                {/* <a href={`/${id}`}> */}
                <button className="px-3 py-3 bg-yellow-0 rounded-full">
                  <IoClose className="title-profile cursor-pointer text-white" />
                </button>
                {/* </a> */}
              </div>
              <div className="px-4 ">
                <div className="invisible">
                  <h1>DKI Jakarta</h1>
                </div>
                <div className="container-culture h-full">
                  <div className="py-4 px-6 flex gap-2 flex-col ">
                    <label className="title-profile">Lorem Ipsum</label>
                    <p className="text-justify h-60 2xl:h-full overflow-y-auto ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Commodi excepturi natus nisi repellendus beatae,
                      voluptatibus pariatur quia a quos aliquam dolore autem
                      vero, totam nemo error aperiam recusandae, maxime cum.
                    </p>
                  </div>
                  <img
                    src={house}
                    className="rounded-tr-3xl w-[44%] 2xl:w-[50%]"
                  />
                </div>
                <div className="button-culture" onClick={closeHouseModal}>
                  <label className="title-profile text-white">Rumah Adat</label>
                  <div>
                    <FaAngleLeft className="text-white title-profile" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Culture;

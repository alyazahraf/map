import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { FaQuestion } from "react-icons/fa";
import SmallButton from "../components/SmallButton";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      className=" flex flex-col px-20 lg:px-40 min-h-screen justify-center items-center overflow-hidden w-full h-full"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="overflow-auto py-10">
        <div className="flex flex-col justify-center">
          <SmallButton href="/">
            <FaQuestion className="title-profile" />
          </SmallButton>
          <div className="flex flex-col items-center justify-center">
            <div className="container-2">
              <div>
                <h1>Profil</h1>
              </div>
              <div className="h-full">
                <div className="flex flex-row items-center justify-center h-full">
                  <div className="flex flex-row items-start md:px-16 justify-center">
                    <label className="text-xl lg:text-4xl 2xl:text-6xl font-poppins-bold transform -rotate-90 w-[50px] mt-[5.7rem] lg:mt-[11.6rem] 2xl:mt-[20.5rem]">
                      MAHASISWA
                    </label>
                    <div className="flex flex-col justify-center w-full xl:w-[70%] overflow-hidden">
                      <img
                        src="https://i.pinimg.com/736x/d6/a3/df/d6a3df974f4e15cf77d889e94ace5133.jpg"
                        alt="Dosen"
                        className="w-max rounded-xl"
                      />
                      <div className="flex flex-col w-full">
                        <label className="text-sm lg:text-2xl 2xl:text-4xl font-poppins-medium">
                          Nama : Lorem
                        </label>
                        <label className="text-xs lg:text-xl 2xl:text-3xl font-poppins-regular">
                          Usia: 90
                        </label>
                        <label className="text-xs lg:text-xl 2xl:text-3xl  font-poppins-regular">
                          Alamat: Lorem
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start md:px-16 justify-center">
                    <label className="text-xl lg:text-4xl 2xl:text-6xl font-poppins-bold transform -rotate-90 w-[50px] mt-[2rem] lg:mt-[4.7rem] 2xl:mt-[9.1rem]">
                      DOSEN
                    </label>
                    <div className="flex flex-col justify-center w-full xl:w-[70%] overflow-hidden">
                      <img
                        src="https://i.pinimg.com/736x/d6/a3/df/d6a3df974f4e15cf77d889e94ace5133.jpg"
                        alt="Dosen"
                        className="w-max rounded-xl"
                      />
                      <div className="flex flex-col w-full">
                        <label className="text-sm lg:text-2xl 2xl:text-4xl font-poppins-medium">
                          Nama : Lorem
                        </label>
                        <label className="text-xs lg:text-xl 2xl:text-3xl font-poppins-regular">
                          Usia: 90
                        </label>
                        <label className="text-xs lg:text-xl 2xl:text-3xl  font-poppins-regular">
                          Alamat: Lorem
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <ButtonPrimary href="/island">Tutup</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Profile;

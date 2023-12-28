import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-9">
      <div className="text-center">
        <h1>Oops!</h1>
        <label className="text-2xl font-poppins-bold">error type</label>
      </div>
      <ButtonPrimary>Refresh</ButtonPrimary>
    </div>
  );
};

export default Error;

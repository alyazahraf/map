import React from "react";

const ButtonPrimary = (props) => {
  const { href, children } = props;

  return (
    <div className="flex flex-end justify-end">
      <a
        href={href}
        className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl px-5 lg:px-8 py-1 lg:py-3 rounded-lg bg-blue-1 text-white font-poppins-bold hover:bg-blue-2"
      >
        {children}
      </a>
    </div>
  );
};

export default ButtonPrimary;

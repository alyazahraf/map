import React from "react";

const SmallButton = (props) => {
  const { href, children } = props;

  return (
    <div className="flex flex-end justify-end py-2 sm:pt-0">
          <a href={href}>
            <button className="p-3 bg-yellow-0 text-white rounded-full">
              {children}
            </button>
          </a>
        </div>
  );
};

export default SmallButton;

import React from "react";
import { useRouteError } from "react-router-dom";

const ErorPage = () => {
  const error = useRouteError();
  return (
    <div className="container w-[100%] h-[100vh] flex flex-col items-center justify-center ">
      <div className="">
        <h1 className="text-center font-[900] text-[30px]">ErorPage </h1>
      </div>
      <div>
        <p className="text-center font-[400]">{error.data}</p>
      </div>
    </div>
  );
};

export default ErorPage;

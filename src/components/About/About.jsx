import React from "react";

const About = () => {
  return (
    <>
      <div className="container flex flex-col items-center ">
        <div className="text-center mt-[50px] text-[2.5rem]">
          <span className="font-[200]">The Swiggy</span>{" "}
          <span className="font-[800]">Journey </span>
        </div>

        <div className="mt-[50px]">
          <img
            src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg"
            alt=""
          />
        </div>
        <div className="text-center mt-[50px] w-[700px] ">
          <h1 className="font-[900] text-[2.5rem]">
            What’s In Store For The Future?
          </h1>
          <span className="font-[400]">
            Swiggy has grand plans to be India’s most loved hyperlocal player.
            It aims to be the most accessible platform on the network -
            reimagining the meaning of convenience in the country through a
            variety of service offerings.
          </span>
        </div>
      </div>
      <hr className="mb-[50px] mt-[30px]" />
    </>
  );
};

export default About;

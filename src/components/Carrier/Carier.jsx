import React from "react";

const Carier = () => {
  return (
    <div>
      <div className=" ">
        <div className="w-[100%] h-[50vh] overflow-hidden pt-[10px] relative ">
          <img
            className="overflow-hidden absolute top-[-130px]"
            src="https://careers.swiggy.com/assets/img/programmes.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col w-[800px] text-center absolute left-[30%] top-[25%] z-10">
          <h2 className="font-[900] text-[3.5rem] text-white">
            Learn all about Swiggy-led programmes here.
          </h2>
          <span className="text-white text-[15px] font-[100]">
            Start your ride with Swiggy, through programmes that will help you
            learn all about the latest technologies, company's culture and work
            ethic, while providing you with a chance to become a Swiggster.
          </span>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center">
        <div className="text-center mt-[50px] mb-[20px] ">
          <h1 className="text-[2.5rem] font-[700] ">
            The Associate
            <br /> Software Developer (ASDE) Role
          </h1>
        </div>
        <div className="w-[1200px] text-center mb-[50px]">
          <p className="font-[400] text-[#2c2c2c] leading-[1.61rem] text-[1.2rem]">
            At Swiggy, it has always been our mantra to raise the bar in tech
            talent. And it is with the same spirit that we bring an industry
            pivoting role in the developer talent segment — Associate Software
            Development Engineer (aSDE). As an aSDE, you will be uniquely
            positioned at the intersection of product development and
            technology, with the aim to revolutionise the way we approach
            software engineering, and in turn enhance both collaboration and
            innovation practices.
            <br />
            <br />
            To ensure you are set up for success from the very beginning, we
            have introduced a customised training and immersion programme,
            tailor-made to the ever evolving need of the business and
            technology. This comprehensive programme will cover a spectrum of
            technical concepts, language skills and real world problem solving
            case studies. We believe this will provide you with a holistic
            understanding of the responsibilities associated with the role and
            will propel you in your developer journey far beyond.
            <br />
            <br />
            All of this comes with the added benefit of working at Swiggy, where
            we build innovative solutions to deliver unparalleled convenience to
            urban consumers. Furthermore, every bit of your work at Swiggy will
            help elevate the lives of our users across India.
            <br />
            <br />
            Need more proof? Here’s what aSDEs who were part of the first batch
            have to say:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carier;

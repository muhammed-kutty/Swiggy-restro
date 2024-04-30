import React from "react";
import "./style.css";
import { useState } from "react";
import { SWIGY_IMG_API } from "../utils/Constance";

const Accordian = ({ menuData }) => {
  const [isActive, setIsActive] = useState(false);

  const AccordionItem = (props) => {
    const { handleToggle, active, faq, id } = props;
    const item = faq;
    console.log("item length ==", item);

    return (
      <div className="rc-accordion-card">
        <div className="rc-accordion-header">
          <div
            className={`rc-accordion-toggle p-3 ${
              active === id ? "active" : ""
            }`}
            onClick={() => handleToggle(id)}
          >
            <h5 className="rc-accordion-title">{item?.card?.card?.title}</h5>
            <i className="fa fa-chevron-down rc-accordion-icon"></i>
          </div>
        </div>
        <div className={`rc-collapse ${active === id ? "show" : ""}`}>
          <div className="rc-accordion-body">
            {item?.card?.card?.itemCards
              ? item?.card?.card?.itemCards?.map((item) => {
                  return (
                    <>
                      <div
                        key={item?.card?.info?.id}
                        className="flex justify-between items-center"
                      >
                        <div className=" mt-[50px] mb-[50px]">
                          <h3 className="mb-[44px] font-[900]">
                            {item?.card?.info?.name}
                          </h3>
                          <h6 className="price">
                            Rs.{item?.card?.info?.price / 100}/-
                          </h6>
                          <p className="mt-[10px]">
                            {item?.card?.info?.description}
                          </p>
                        </div>
                        <div className="">
                          {item?.card?.info?.imageId ? (
                            <img
                              src={SWIGY_IMG_API + item?.card?.info?.imageId}
                              alt="sdsd"
                              className="w-[150px] h-[150px]"
                            />
                          ) : (
                            <p style={{ color: "red" }}>
                              {" "}
                              image Not Available{" "}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })
              : item?.card?.card?.carousel
              ? item?.card?.card?.carousel?.map((item) => {
                  return (
                    <>
                      <div
                        key={item?.dish?.info?.id}
                        className="flex justify-between items-center"
                      >
                        <div className=" mt-[50px] mb-[50px]">
                          <h3 className="mb-[44px] font-[900]">
                            {item?.dish?.info?.name}
                          </h3>
                          <h6 className="price">
                            Rs.{item?.dish?.info?.price / 100}/-
                          </h6>
                          <p className="mt-[10px] w-[600px]">
                            {item?.dish?.info?.description}
                          </p>
                        </div>
                        <div className="">
                          {item?.dish?.info?.imageId ? (
                            <img
                              src={SWIGY_IMG_API + item?.dish?.info?.imageId}
                              alt="sdsd"
                              className="w-[150px] h-[150px]"
                            />
                          ) : (
                            <p style={{ color: "red" }}>
                              {" "}
                              image Not Available{" "}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })
              : item?.card?.card?.categories &&
                item?.card?.card?.categories?.map((item) => {
                  return (
                    <>
                      <div className="mt-[20px] font-[900] text-[22px] text-center">
                        <span
                          className="bg-[#fc8019] p-[10px] px-[60px] text-white"
                          style={{ borderRadius: "15px" }}
                        >
                          {item?.title}{" "}
                        </span>
                      </div>
                      {item?.itemCards?.map((item) => {
                        return (
                          <>
                            <div
                              key={item?.card?.info?.id}
                              className="flex justify-between items-center"
                            >
                              <div className=" mt-[50px] mb-[50px]">
                                <h3 className="mb-[44px] font-[900]">
                                  {item?.card?.info?.name}
                                </h3>
                                <h6 className="price">
                                  Rs.{item?.card?.info?.price / 100}/-
                                </h6>
                                <p className="mt-[10px] w-[600px]">
                                  {item?.card?.info?.description}
                                </p>
                              </div>
                              <div className="">
                                {item?.card?.info?.imageId ? (
                                  <img
                                    src={
                                      SWIGY_IMG_API + item?.card?.info?.imageId
                                    }
                                    alt="sdsd"
                                    className="w-[150px] h-[150px]"
                                  />
                                ) : (
                                  <p style={{ color: "red" }}>
                                    {" "}
                                    image Not Available{" "}
                                  </p>
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <hr />
                    </>
                  );
                })}
          </div>
        </div>
      </div>
    );
  };

  const handleToggle = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };

  return (
    <div>
      {menuData?.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            active={isActive}
            handleToggle={handleToggle}
            faq={item}
            id={index}
          />
        );
      })}
    </div>
  );
};

export default Accordian;

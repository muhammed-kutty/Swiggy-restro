import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import useRestarentMenu from "../utils/useRestarentMenu";
import Accordian from "./Accordian";

const ResDetails = () => {
  let { resid } = useParams();
  const menu = useRestarentMenu(resid);

  const { name, cuisines, costForTwoMessage, areaName, avgRating } =
    menu?.cards?.[2].card?.card?.info || {};
  const { maxDeliveryTime, minDeliveryTime } =
    menu?.cards?.[2].card?.card?.info?.sla || {};
  const items = menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  let filterData;
  for (let i = 0; i <= items?.length; i++) {
    filterData = items?.filter((item) => {
      return item.card?.card?.title;
    });
  }

  // let data = filterData?.map((val)=>{
  //   return(
  //     <>
  //     <h1 style={{backgroundColor:"blue",color:"wheat"}}>{val?.card?.card.title}</h1>
  //     {
  //       val?.card?.card?.itemCards?.map((val)=>{

  //         return (
  //           <>
  //             <h3>{val?.card?.info?.name}</h3>
  //             <h5>{val?.card?.info?.price/100}</h5>
  //           </>
  //         )
  //       })
  //     }
  //     </>
  //   )
  // })

  // let menuData = items?.map((item) => {
  //   return(
  //     item?.card?.card?.itemCards?.map((item, index) => {
  //     return (
  //       <>
  //         <div
  //           key={item?.card?.info?.id}
  //           className="flex justify-between items-center"
  //         >
  //           <div className=" mt-[50px] mb-[50px]">
  //             <h3 className="mb-[44px] font-[900]">{item?.card?.info?.name}</h3>
  //             <h6 className="price">Rs.{item?.card?.info?.price / 100}/-</h6>
  //             <p className="mt-[10px]">{item?.card?.info?.description}</p>
  //           </div>
  //           <div className="">
  //             {item?.card?.info?.imageId ? (
  //               <img
  //                 src={SWIGY_IMG_API + item?.card?.info?.imageId}
  //                 alt="sdsd"
  //                 className="w-[150px] h-[150px]"
  //               />
  //             ) : (
  //               <p style={{ color: "red" }}> image Not Available </p>
  //             )}
  //           </div>
  //         </div>
  //       </>
  //     );
  //   }));
  // });

  return menu === null ? (
    <Loader />
  ) : (
    <div className="max-w-[900px] mx-auto mt-[50px]">
      <div className="">
        <h1 className="font-[900] text-[24px] leading-[28px] text-black">
          {name}
        </h1>
      </div>
      <hr />
      <div
        className="pt-[30px] pb-[30px] pl-[15px] mt-[30px] rounded-xl  "
        style={{
          border: "1px solid rgba(2, 6, 12, 0.15)",
          boxShadow: "rgba(66, 64, 64, 0.14) 7px 21px 26px 16px",
        }}
      >
        <div className="flex mb-4 ]">
          <h5 className="font-[700]">Ratting :- {avgRating}Ratig</h5>
          <h5 className="pl-[50px] font-[700] ">Rs :-{costForTwoMessage}</h5>
        </div>
        <h5 className="pl-[10px]  mb-4 font-[700] ">
          {" "}
          Items :-{cuisines?.join(" , ")}
        </h5>
        <h5 className="pl-[10px]  mb-4 font-[700]">Area :-{areaName}</h5>
        <h5 className="pl-[10px]  mb-4 font-[700] ">
          {" "}
          Delivery Time :-
          {minDeliveryTime} min to {maxDeliveryTime} min{" "}
        </h5>
        <hr />
        <h6 className="font-[200] text-[14px] mt-3 text-black ">
          2.5 km | Delivery fees applicable. Delivered & charged by the
          restaurant.
        </h6>
      </div>

      <h2 className="text-center mt-[50px] text-black mb-[20px] font-[900] text-[40px]">
        Menu
      </h2>
      <hr />

      <Accordian menuData={filterData} />
    </div>
  );
};

export default ResDetails;

import { SWIGY_IMG_API } from "./utils/Constance";



const Card = ({resData}) => {

      return (
        
       <>
          <div className="w-[100%] h-[60%] items-center justify-center flex">
            <img
              className=" w-[310px] h-[200px] rounded-[15px]"
              src={SWIGY_IMG_API+resData?.info?.cloudinaryImageId}
              alt=""
            />
          </div>
          <div className="flex flex-col items-start justify-center pl-[30px] pt-[5px]">
            <h3 className="text-2xl font-bold">{resData?.info?.name}</h3>
            <h4>{resData?.info?.cuisines?.join(" , ").substring(0,100)} </h4>
            <h4>{resData?.info?.avgRatingString} Rtng </h4>
            <h4>Rs.{resData?.info?.costForTwo}</h4>
          </div>
       </>
      );
   
  };

  export default Card
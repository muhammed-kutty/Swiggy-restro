import Card from "./Card";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import { Link } from "react-router-dom";
import { RESTAURENT_API } from "./utils/Constance";
import useOnlineSttaus from "./utils/useOnlineSttaus";
import InfiniteScroll from "react-infinite-scroll-component";

const Body = () => {
  const [data, setdata] = useState([]);
  const [searchdata, setsearchdata] = useState([]);
  const [filterdData, setfilterdData] = useState([]);
  const [moredata, setmoredata] = useState([]);
  const [hasMoreStatus, sethasMoreStatus] = useState(true);
  const status = useOnlineSttaus();

  useEffect(() => {
    fetcdata();
  }, []);

  const fetcdata = async () => {
    const data = await fetch(RESTAURENT_API);
    const result = await data.json();
    setdata(
      result.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterdData(
      result.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const fetchmoreData = () => {
    if (moredata.length > 0) {
      sethasMoreStatus(false);
    } else {
      setTimeout(async () => {
        const data = await fetch(RESTAURENT_API);
        const result = await data.json();
        setmoredata(
          result.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        console.log("fethced");
      }, 500);
    }
  };

  if (status)
    return (
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        You are Offline
      </h1>
    );

  return data?.length === 0 ? (
    <Loader name="main" />
  ) : (
    <div className="container">
      <div className="flex justify-evenly items-center mt-11 mb-9">
        <div className=" bg-[#fc8019] text-white px-[20px]  text-center rounded-md text-[16px] hover:scale-125 transition-all duration-500 cursor-pointer  ">
          <button
            className="  h-[32px]"
            onClick={() => {
              let ratedData = data.filter((res) => res.info.avgRating === 4.5);
              console.log("rated Rea==", ratedData);
              setfilterdData(ratedData);
            }}
          >
            Top Rated Restorent
          </button>
        </div>
        <div className="">
          <input
            className="bg-neutral-300/30 w-64 rounded-md pl-6 h-[32px]"
            type="text"
            placeholder="search"
            value={searchdata}
            onChange={(e) => setsearchdata(e.target.value)}
          />

          <button
            className="bg-neutral-300/30 w-[95px] rounded-md ml-6 h-[32px] hover:scale-110 transition-all duration-500 cursor-pointer "
            onClick={() => {
              let filterddata = data?.filter((item) => {
                return item?.info?.name
                  .toLowerCase()
                  .includes(searchdata.toLowerCase());
              });
              console.log("serach", filterddata);
              setfilterdData(filterddata);
            }}
          >
            <i className="fa fa-search"></i>Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-16  ">
        {filterdData?.map((item) => (
          <Link
            className=" w-[350px] h-[400px] hover:scale-90 transition-all duration-500 cursor-pointer "
            to={"/restarent/" + item?.info?.id}
            key={item.info.id}
          >
            <Card resData={item} />
          </Link>
        ))}
      </div>
      <InfiniteScroll
        dataLength={moredata.length}
        next={fetchmoreData}
        hasMore={hasMoreStatus}
        loader={<Loader name="Lazy-Load" />}
      >
        <div className="flex flex-wrap justify-center mt-16  ">
          {moredata?.map((item) => {
            console.log(moredata);
            return (
              <Link
                className=" w-[350px] h-[400px] hover:scale-90 transition-all duration-500 cursor-pointer "
                to={"/restarent/" + item?.info?.id}
                key={item.info.id}
              >
                <Card resData={item} />
              </Link>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default Body;

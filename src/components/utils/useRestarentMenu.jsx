import { useEffect, useState } from "react";
import { RESTAURENT_MENU } from "../utils/Constance";

const useRestarentMenu = (resid) => {
  const [resInfo, setresInfo] = useState([]);

  useEffect(() => {
    const fetcmenu = async () => {
      let data = await fetch(RESTAURENT_MENU + resid);
      const jsonData = await data.json();
      setresInfo(jsonData.data);
    };
    fetcmenu();
  }, [resid]);

 

  return resInfo;
};

export default useRestarentMenu;

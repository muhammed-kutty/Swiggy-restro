import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className=" sticky top-0 z-50 bg-white    w-full border-b-2  "
      style={{ boxShadow: " 0 15px 40px -20px rgba(40, 44, 63, .15)" }}
    >
      <div className="flex justify-between align-middle rounded-[2.375rem] w-[70%] mx-auto h-20">
        <div className="flex items-center">
          <div>
            <a href="/">
              <img
                className="w-[60px] ml-8 rounded-full hover:scale-110 transition-all duration-500 cursor-pointer"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex items-center ml-[50px]">
            <a
              href="/"
              className="hover:text-[#fc8019] border-b-2 border-black w-[45px] text-center "
            >
              <p className="pl-[2px] hover:border-b-2 border-[#fc8019]   font-bold ">
                Other
              </p>
            </a>
            <p className="text-sm font-thin ml-[20px]">
              Bangaluru,karnataka{" "}
              <i class="fa-solid fa-chevron-down pl-2 text-[#fc8019]"></i>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-10 mr-10 text-[#282c3f]">
            <li>
              <Link className="hover:text-[#fc8019]" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#fc8019]" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#fc8019]" to="/carier">
                Carrier{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

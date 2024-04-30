import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About/About";
import Body from "./components/Body";
import Carier from "./components/Carrier/Carier";
import ErorPage from "./components/Error/ErorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import ResDetails from "./components/RestroDetails/ResDetails";


function App() {

  return (
    <div >
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  );
}

export const appRouter =  createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/carier",
        element:<Carier/>
      },
     
      {
        path:"/restarent/:resid",
        element:<ResDetails/>
      }
    ],
    errorElement:<ErorPage/>
  },
  
])


export default App;

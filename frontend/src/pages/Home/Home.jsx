import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import { Outlet} from "react-router";

const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default Home;
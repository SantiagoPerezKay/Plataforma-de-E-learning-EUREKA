import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
    <div className="bg-gray-100 pt-12 h-60">
      <h1 className="text-3xl text-center font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2 className="text-2xl text-center font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    </div>
      <Footer />
    </>
  );
};

export default Home;

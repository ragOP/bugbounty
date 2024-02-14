import Badegs from "../common/Badegs";
import Cards from "../common/Cards";
import NavBar from "../layout/NavBar";
import Pagination from "../common/Pagination";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Badegs />
      <Cards />
      <Pagination />
      <Footer />
    </div>
  );
}

export default HomePage;

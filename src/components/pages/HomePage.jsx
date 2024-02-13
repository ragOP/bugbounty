import Badegs from "../common/Badegs";
import Cards from "../common/Cards";
import NavBar from "../layout/NavBar";
import Pagination from "../common/Pagination";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Badegs />
      <Cards />
      <Pagination />
    </div>
  );
}

export default HomePage;

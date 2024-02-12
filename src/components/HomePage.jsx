import Badegs from "./Badegs";
import Cards from "./Cards";
import NavBar from "./NavBar";
import Pagination from "./Pagination";

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

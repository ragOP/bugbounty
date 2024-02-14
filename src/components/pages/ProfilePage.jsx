import UpdateUserModal from "../common/UpdateUserModal";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

function ProfilePage() {
  return (
    <>
      <NavBar />
      <div className="container my-4 d-flex align-items-center justify-content-center flex-column">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
          className="rounded"
          alt="user-profile"
          style={{ width: "150px" }}
        />
        <h4 className="my-2">Farish Jamal</h4>
        <h6 className="my-2">farishjamal98@gmail.com</h6>
        <p className="my-2 text-center w-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          sequi dicta commodi cum eveniet maxime in magnam. Reiciendis
          temporibus, libero vel laboriosam sint porro dicta optio sunt eum esse
          soluta?
        </p>
        <UpdateUserModal />
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;

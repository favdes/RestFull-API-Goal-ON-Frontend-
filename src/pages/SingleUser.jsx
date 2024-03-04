import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import UpdateModal from "../component/UpdateModal";

const SingleUser = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useParams();
  const navigate = useNavigate();

  let getData = async () => {
    try {
      setIsLoading(true);

      let dataGotten = await axios.get(
         (`https://backend-xt2t.onrender.com/api/user/${userId}`)
      );
      console.log(dataGotten.data.user);
      setData(dataGotten.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://backend-xt2t.onrender.com/api/user/${userId}`);
      navigate("/AllUsers");
    } catch (error) {}
  };

  useEffect(() => {
    getData();
    document.title = 'User |` ${data.name}`';
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <h2 className="container">
        {isLoading && <Spinner animation="border" />}
      </h2>

      <main className="container pt-4 d-flex justify-content-center align-items-center">
        <div className="card w-50 text-center">
          <h2> {data.name} </h2>
          <h2> {data.email} </h2>
          <h2> {data.profession} </h2>
          <h2> {data.gender} </h2>
          <div className="d-flex gap-5">
            <button className="btn btn-success w-50">
                <UpdateModal/>
            </button>
            <button
              className="btn btn-danger w-50"
              onClick={() => handleDelete(data._id)}
            >
              DELETE
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleUser;
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UsersDetails = () => {
  const { user_id } = useParams();

  // console.log(user_id);

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getData = () => {
    setLoading(true);
    fetch(`https://reqres.in/api/users/${user_id}`)
      .then((res) => res.json())
      .then((res) => setUsers(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>Some went wrong..</h1>;
  }

  return (
    <>
      <h1>User Details</h1>
      <div>
        <img src={users.avatar} alt="prof-pic" />
        <p>
          {users.first_name} {users.last_name}
        </p>
        <p>{users.email}</p>
      </div>
      <button onClick={() => navigate("/users")}>GO TO USERS PAGE</button>
      <Link to="/users">
        <button>GO TO USER PAGE LINK</button>
      </Link>
    </>
  );
};

export default UsersDetails;

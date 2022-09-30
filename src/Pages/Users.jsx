import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function getPageNumber(val) {
  let value = Number(val);

  if (typeof value !== "number" || value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
}

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = getPageNumber(searchParams.get("page"));
  const [page, setPage] = useState(initPage);

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  // console.log();

  const getData = () => {
    setLoading(true);
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, [page]);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>Some went wrong..</h1>;
  }

  return (
    <div>
      <h1>Users</h1>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <img src={user.avatar} alt="pro-pic" />
            <p>
              <Link to={`/users/${user.id}`}>More Details..</Link>
            </p>
          </div>
        );
      })}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <p>{page}</p>
      <button disabled={page === 3} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
    </div>
  );
};

export default Users;

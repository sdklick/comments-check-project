import React, { useState, useEffect, useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [data, setdata] = useState([]);
  const [change, setchange] = useState([]);
  const myref = useRef();
  const myapi = async () => {
    const mydata = await fetch(
      `https://jsonplaceholder.typicode.com/comments${change}`
    );
    let newdata = await mydata.json();
    setdata(newdata);
    console.log(newdata);
  };
  const inputchange = () => {
    let data = `?postId=${myref.current.value}`;
    setchange(data);
  };
  useEffect(() => {
    myapi();
  }, [change]);

  console.log(change);

  return (
    <>
      <div className="text-center mt-4 mb-4">
        <input
          className="border border-success"
          ref={myref}
          placeholder="Enter your post id"
          type="number"
        />
        <br />
        <button onClick={inputchange} className="btn btn-success mt-2 mb-2">
          Check
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {data.map((val) => {
          return (
            <>
              <div key={val.id} className="col">
                <div className="card text-center border border-primary">
                  <div className="card-body">
                    <h4>{val.postId}</h4>
                    <h4>{val.id}</h4>
                    <h4 className="card-title">{val.name}</h4>
                    <h5 className="card-title">{val.body}</h5>
                    <h6 className="card-title">{val.email}</h6>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;

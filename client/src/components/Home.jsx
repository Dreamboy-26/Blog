import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [postedData, setPostedData] = useState([]);

const navigate =useNavigate()
  const handleShow=(e)=>{
   
   navigate(`/particular/${e._id}`)
  }

  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    axios
      .get("https://silly-wasp-fez.cyclic.app/posts", {
        headers: { Authorization: "Bearer " + jwt },
      })
      .then((res) => {
        setPostedData(res.data);
      });
  }, []);

  return (
    <div>
      <div>
        <img
          src="https://thumbs.dreamstime.com/z/paper-welcome-to-team-table-calculator-money-241977934.jpg"
          width="100%"
          height="500px"
          alt=""
        />
      </div>
      <div>
      <div>
          <h1>Click On Post to Read Data</h1>
        </div>
        <div className="homeDataContainer">
          {postedData.map((e) => {
            return (
              <div key={e._id} className="singleData" onClick={()=>handleShow(e)}>
                <div>
                  <img src={e.picture} width="100%" height="300px" alt="" />
                </div>
                <div>
                  <h3> {e.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Home;

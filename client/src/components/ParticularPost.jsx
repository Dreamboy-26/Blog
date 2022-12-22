import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ParticularPost = () => {
  const [data, setData] = useState([]);


  const {id}= useParams();

  const navigate = useNavigate();

  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    axios
      .get(`https://silly-wasp-fez.cyclic.app/${id}`, {
        headers: { Authorization: "Bearer " + jwt },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div>
     
          <div>
            <h1>{data.title}</h1>
            <div>
              <img src={data.picture} alt="" />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
          </div>
  
    </div>
  );
};

export default ParticularPost;

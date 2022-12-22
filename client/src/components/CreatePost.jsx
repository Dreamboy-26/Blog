import React, { useRef } from "react";
import { useState } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    categories: "",
    picture: "",
  });

  const navigate = useNavigate();
  const editor = useRef(null);

  const handlePostData = (e) => {
    const name = e.target.name;
    setPostData({ ...postData, [name]: e.target.value });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    axios
      .post("http://localhost:8080/create", postData, {
        headers: {
          Authorization: "Bearer " + jwt,
          "Content-Type": "application/json",
        },
      })
      .then(() => navigate("/"));

    console.log(postData);
  };

  return (
    <div>
        <h1>Enter Details</h1>
      <form action="" className="createForm" onSubmit={handlePostSubmit}>
        <div>
            <span> Enter Title </span>
          <input
          className="inputText"
            type="text"
            placeholder="Enter Title"
            name="title"
            onChange={(e) => handlePostData(e)}
          />
        </div>
<div>
    <span> <h4>Description</h4></span>
<JoditEditor
          ref={editor}
          value={postData.description}
          tabIndex={1} // tabIndex of textarea
          onChange={(newContent) => {
            setPostData({ ...postData, description: newContent });
          }}
        />
</div>
      
        <div>
            <span>Enter category </span>
          <input
          className="inputText"
            type="text"
            placeholder="Enter Category"
            name="categories"
            onChange={(e) => handlePostData(e)}
          />
        </div>
        <div>
            <span>Enter url for pic </span>
          <input
            type="text"
            placeholder="Url for Picture "
            name="picture"
            onChange={(e) => handlePostData(e)}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>

    
   
    </div>
  );
};

export default CreatePost;

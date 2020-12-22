import React, { useState } from "react";
import axios from "../Helpers/axios";
import Button from "@material-ui/core/Button";
import "./imageupload.css";
function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = async () => {
    const response = await axios.get("/tinder/card");
  };
  return (
    <div className="image_upload">
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;

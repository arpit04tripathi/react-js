import { useState } from "react";
import * as postsApi from "../api/global";

const OTPVerificationForm = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div id="otp-verification">
      <h1>OTP Verification Form</h1>
      <button onClick={postsApi.getAllPosts} className="btn btn-success">Get All Posts</button>
      <p>{posts}</p>
    </div>
  );
};

export default OTPVerificationForm;

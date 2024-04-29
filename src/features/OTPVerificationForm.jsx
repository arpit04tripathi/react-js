import { useState } from "react";
import * as postsApi from "../api/global";

const OTPVerificationForm = () => {
  const [post, setPost] = useState({a: "b"});

  async function updatePost() {
    const id = Math.floor(Math.random() * 100);
    const res = await postsApi.getPostById(id);
    setPost(res);
  }

  return (
    <div id="otp-verification">
      <h1>OTP Verification Form</h1>
      <button onClick={updatePost} className="btn btn-success">
        Get Me a random Post
      </button>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};

export default OTPVerificationForm;

import axios from "axios";

// public api used - https://jsonplaceholder.typicode.com/

const myAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  timeoutErrorMessage: "Timeout for axios - Arpit",
});

// GET	/posts
export const getAllPosts = async () => {
  try {
    const response = await myAxios.get("/posts");
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

// GET	/posts/1
const getPostById = (id) => {
  return {};
};

// POST	/posts
const postNewComment = (body) => {return {}};

// PUT	/posts/1
const replacePostById = (id, body) => {return {}};

// PATCH	/posts/1
const patchPostById = (id, body) => {return {}};

// DELETE	/posts/1
const deletePostById = (id, body) => {return {}};

// GET	/posts/1/comments
const getPostComments = (postId, body) => {return {}};

// GET	/comments?postId=1
const getCommentsForPost = (postId, body) => {return {}};


const getAllPostsAbc = () => {
  axios.post('/posts', {
    firstName: 'Finn',
    lastName: 'Williams'
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}
import axios from "axios";

const getAuthor = async (userId) => {
  try {
    const response = await axios.get(
      `https://quill-quest-server.onrender.com/user/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error occurred during fetching author:", error);
    return null;
  }
};

export default getAuthor;

import axios from "axios";

const getAuthor = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3001/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error occurred during fetching author:", error);
    return null;
  }
};

export default getAuthor;

import axios from "axios";
const baseURL = process.env.baseURL;

// here we can create AXios intercepters
// ALL DEFUALT CONFIGURATION HERE

export default axios.create({
  baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
  },
});

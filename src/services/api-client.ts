import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "697fff1533ed47cb9486253250805615",
  },
});

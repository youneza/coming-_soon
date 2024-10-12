const ISSERVER = typeof window === "undefined";

const token = !ISSERVER && JSON.parse(localStorage.getItem("user"))?.token;
const header = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default header;

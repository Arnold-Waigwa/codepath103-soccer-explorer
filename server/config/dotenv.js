import dotenv from "dotenv";
export default dotenv.config({
  path: new URL("../.env", import.meta.url),
});

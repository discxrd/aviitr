import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://kupi.k.vu",
  insecureHTTPParser: true,
});

export const storageInstance = axios.create({
  baseURL: "https://s3api.k.vu",
  insecureHTTPParser: true,
});

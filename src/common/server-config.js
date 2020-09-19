const devBaseURL = "http://127.0.0.1:1133"
const proBaseURL = "http://bmongo.top:1133"

export const baseURL = process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;
export const timeout = 500;

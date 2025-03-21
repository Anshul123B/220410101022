import axios from "axios";

const API_URL = "http://20.244.56.144/test/";
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTM0NTY1LCJpYXQiOjE3NDI1MzQyNjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk4OGE4NWU5LTNlYWMtNGI3Ny1hNjMwLTRmNjQxY2MwNjA0YSIsInN1YiI6ImJoYXR0YW5zaHVsMDAxQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IlNoaXZhbGlrIENvbGxlZ2Ugb2YgZW5naW5lZXJpbmciLCJjbGllbnRJRCI6Ijk4OGE4NWU5LTNlYWMtNGI3Ny1hNjMwLTRmNjQxY2MwNjA0YSIsImNsaWVudFNlY3JldCI6IkpxUmZvUUZ5Y2ZJUmx5dk0iLCJvd25lck5hbWUiOiJBbnNodWwgQmhhdHQiLCJvd25lckVtYWlsIjoiYmhhdHRhbnNodWwwMDFAZ21haWwuY29tIiwicm9sbE5vIjoiMjIwNDEwMTAxMDIyIn0.tDxFGQuEnoHM-z9GP9NJUvqaRN2QXv0Ja6lMOGT_LI0';

  const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

export const fPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const fUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

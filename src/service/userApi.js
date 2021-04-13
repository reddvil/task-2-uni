const getUsers = async ({ limit = 10 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_limit=${limit}`,
  );
  const data = await res.json();
  return data;
};

const API_SERVICE_USER = { getUsers };

export default API_SERVICE_USER;

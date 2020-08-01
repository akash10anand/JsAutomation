const axios = require('axios');

const listUser = async (page, per_page) => {
  const url = `https://reqres.in/api/users?page=${page}&per_page=${per_page}`;
  let r = await axios.get(url);
  return r;
}

// selected exporting
module.exports = { listUser };
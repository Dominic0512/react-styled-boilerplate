// get user info
const getUserInfoStart = () => ({
  type: "GET_USER_INFO_START",
  payload: {
    isFetching: true
  }
});
const getUserInfoSuccess = data => ({
  type: "GET_USER_INFO_SUCCESS",
  payload: {
    data
  }
});
const getUserInfoEnd = () => ({
  type: "GET_USER_INFO_END",
  payload: {
    isFetching: false
  }
});

export { getUserInfoStart, getUserInfoSuccess, getUserInfoEnd };

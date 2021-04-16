import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const GET_SMURFS_START = "GET_SMURF_START";
export const GET_SMURFS_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURF_FAILURE";
export const getSmurfs = (URL) => dispatch => {
  dispatch({ type:GET_SMURFS_START });
  axios.get(URL)
    .then( res => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: GET_SMURFS_FAILURE, payload: err});
    })
};
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const ADD_SMURF = "ADD_SMURF";
export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
}
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const ADD_ERROR = "ADD_ERROR";
export const addError = (error) => {
  return { type: ADD_ERROR, payload: error };
};
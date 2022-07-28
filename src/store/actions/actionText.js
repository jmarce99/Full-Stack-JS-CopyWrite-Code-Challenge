import axios from "axios";

let isLocal = true; // --> al momento de subir a la main cambiar a false
let originUrl = isLocal
  ? "http://localhost:3001"
  : "https://api-challenge-copywrite.herokuapp.com";

export function sendText(payload) {
  return async function (dispatch) {
    try {
        console.log(payload)
      var json = await axios.get(`https://api-challenge-copywrite.herokuapp.com/iecho?text=${payload}`);
      return dispatch({
        type: "sendText",
        payload: json.data,
      });
    } catch (error) {
      console.log("Error: " + error);
    }
  };
}
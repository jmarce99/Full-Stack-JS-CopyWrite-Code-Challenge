import axios from "axios";

export function sendText(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/iecho?text=${payload}`);
      return dispatch({
        type: "sendText",
        payload: json.data,
      });
    } catch (error) {
      console.log("Error " + error);
    }
  };
}

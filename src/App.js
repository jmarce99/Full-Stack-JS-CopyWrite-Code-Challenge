import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

import { sendText } from "./store/actions/actionText";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.data);
  return (
    <div>
      <Box alignItems="center">
        <AppBar position="static" width="100%" top="0" color="error">
          <Toolbar
            sx={{
              margin: "0 auto",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
            }}
          >
            <TextField
              placeholder="Insert text..."
              sx={{
                width: "80%",
                height: "30%",
                margin: "0 auto",
                backgroundColor: "white",
                borderRadius: 2,
                padding: "0",
              }}
            />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch(sendText("prueba"));
                }}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default App;

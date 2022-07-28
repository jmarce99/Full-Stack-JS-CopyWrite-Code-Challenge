import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendText } from "./store/action";

//MUI COMPONENTS
import {
  Button,
  AppBar,
  Toolbar,
  Box,
  TextField,
  CssBaseline,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    setText(input);
  };

  useEffect(() => {
    dispatch(sendText(text));
  }, [dispatch, text]);

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
              onChange={(e) => handleInput(e)}
            />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => handleSubmit(e)}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <Container
          maxWidth="fixed"
          sx={{
            bgcolor: "white",
            height: "65vh",
            width: "70%",
            margin: "auto",
            marginTop: "2rem",
            paddingTop: "2rem",
          }}
        >
          Results:
          <Box sx={{ width: "60%", margin: "auto" }}>
            <Stack spacing={2}>
              {state.data &&
                state.data.map((echo, index) => (
                  <Paper
                    key={index}
                    sx={{
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                      padding: 2,
                    }}
                  >
                    {echo.text}
                    {echo.palindrome === true ? (
                      <p style={{ color: "green" }}>This is a palindrome</p>
                    ) : null}
                  </Paper>
                ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default App;

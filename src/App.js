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
    <Box
      alignItems="center"
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <AppBar position="static" width="100%" top="0" color="error">
        <Toolbar
          sx={{
            width: { xs: "100%", md: "80%" },
            display: "flex",
            alignItems: "center",
            padding: "0",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            margin: { xs: "1rem auto", md: "0.2rem auto" },
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
              marginBottom: { xs: "1rem", md: "0" },
            }}
            onChange={(e) => handleInput(e)}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "80%", md: "10%" },
            }}
            onClick={(e) => handleSubmit(e)}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
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
              state.data
                .slice(0)
                .reverse()
                .map((echo, index) => (
                  <Paper
                    key={index}
                    sx={{
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                      padding: 2,
                    }}
                  >
                    {echo.text}
                    {echo.error}
                    {echo.palindrome === true ? (
                      <p style={{ color: "green" }}>This is a palindrome</p>
                    ) : null}
                  </Paper>
                ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default App;

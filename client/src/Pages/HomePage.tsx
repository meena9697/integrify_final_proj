import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import GoogleLogInComponent from "../GoogleLogInComponent";
import Paper from '@mui/material/Paper';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <img
        src="https://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png"
        alt=""
        className="login-image"
      ></img>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Welcome to The Beauty Store</Typography>
        <TextField
          id="login-field"
          label="Email"
          variant="outlined"
          sx={{ maxWidth: "40ch" }}
        />
        <TextField
          id="login-field"
          label="Password"
          variant="outlined"
          sx={{ maxWidth: "40ch" }}
        />
        <Button
          variant="contained"
          sx={{ background: "Blue", maxWidth: "20ch" }}
        >
          Login
        </Button>
        <Typography variant="body2">
          Don't have an account yet? <a href="#">Register</a>
        </Typography>
        <Divider>
          <Typography variant="body2">or</Typography>
        </Divider>
        <GoogleLogInComponent />
      </Box>
    </Box>
 );
}

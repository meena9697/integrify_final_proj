import axios from 'axios'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import GoogleLogInComponent from "../GoogleLogInComponent";

type FormData = {
  email: string
  password: string
}
  
export default function HomePage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async (payload) => {
   await axios
      .post('http://localhost:8000/api/v1/users/login', payload)
      .then(() => {  
        navigate('/products')
      })
      .catch((error) => {
        console.log(error.response.data, "SignIn error")
        if (error.response.data.message === `user ${payload.email} not found`) {
          toast.error('Couldnt find any account for this email. Please Register')
        } else if (error.response.data.message === 'password is incorrect') {
          toast.error('Invalid email or password. Please try again')
        } else {
          toast('Oops..Log in failed! Please try again')
        }
      })
  })
  
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
      <Form onSubmit = {onSubmit}
      >
        <Typography variant="h4">Welcome to The Beauty Store</Typography>
        <TextField
          id="login-field"
          label="Email"
          variant="outlined"
          sx={{ maxWidth: "40ch" }}
          {...register('email', {
            required: 'Email Address is required',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Oops..Invalid email address!',
            },
          })}
        />
        <p>{errors.email?.message}</p>
        <TextField
          id="login-field"
          label="Password"
          variant="outlined"
          sx={{ maxWidth: "40ch", justifyContent: "center" }}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Your password must contain minimum 8 characters',
            },
          })}
        />
        <p>{errors.password?.message}</p>
        <Typography> 
        <Button
        variant= "contained"
          type="submit"
          sx={{ background: "Blue", maxWidth: "20ch" }}
        >
          Login
        </Button>
        </Typography>
        <Typography variant="body2">
          Don't have an account yet? <a href="/register"> Register</a>
        </Typography>
        <Divider>
          <Typography variant="body2">or</Typography>
        </Divider>
        <GoogleLogInComponent />
      </Form>
    </Box>
 );
}

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

type FormData = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (response: any) => {
    console.log(response, "this is the response");
    await axios
      .post("http://localhost:8000/api/v1/users/register", response)
      .then(() => {
        navigate("/");
      });
  });

  return (
    <div>
      <h3>Register Form</h3>
      <Form onSubmit={onSubmit}>
        <Typography>
          <TextField
            type="firstname"
            label="Firstname"
            variant="outlined"
            sx={{ maxWidth: "40ch" }}
            {...register("firstname")}
          />
        </Typography>
        <Typography>
          <TextField
            type="lastname"
            label="Lastname"
            variant="outlined"
            sx={{ maxWidth: "40ch" }}
            {...register("lastname")}
          />
        </Typography>
        <Typography>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            sx={{ maxWidth: "40ch" }}
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address!",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </Typography>
        <Typography>
          <TextField
            id="login-field"
            label="Password"
            variant="outlined"
            sx={{ maxWidth: "40ch" }}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password must contain minimum 8 characters",
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </Typography>
        <Button
          variant="contained"
          type="submit"
          sx={{ background: "Blue", maxWidth: "20ch" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;

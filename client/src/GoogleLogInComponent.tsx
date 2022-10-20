import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import { fetchProducts } from "./redux/action/productsAction"

export default function GoogleLogInComponent() {
  const navigate = useNavigate()

  const googleResponseFunction = async (response: any) => {
    console.log(response, "response");

    await axios.post("http://localhost:8000/api/v1/users/google-authenticate", {
      id_token: response.credential,
    })
    .then((response: any) => {
      navigate('/products')
    })

  };

  return (
    <div>
      <GoogleLogin
        onSuccess={googleResponseFunction}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

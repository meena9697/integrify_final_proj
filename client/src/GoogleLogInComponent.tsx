import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

export default function GoogleLogInComponent() {
  return (
    <div>
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  />
  </div>
  )
}

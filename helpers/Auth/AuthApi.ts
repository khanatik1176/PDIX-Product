import { TBasicSignupFormInputs, TSignInFormInputs } from "@/types/Auth.types";
import { TEMP_BACKEND_URI } from "@/utils/config";
import axios from "axios";

export const handleBasicSignup = async (data: TBasicSignupFormInputs) => {
  const response = await axios.post(`${TEMP_BACKEND_URI}/auth/signup`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const handleSignIn = async (data: TSignInFormInputs) => {
  const response = await axios.post(`${TEMP_BACKEND_URI}/auth/user/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
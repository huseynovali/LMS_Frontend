import { axiosAuth } from "./axiosAuth.ts";

export const AuthService = {
  registerUser: async (
    name: string,
    phone: string,
    email: string,
    password: string
  ) => {
    return axiosAuth.post("user/register", {
      name,
      email,
      password,
      phone,
      role: "USER",
    });
  },
  registerSeller: async (
    name: string,
    phone: string,
    email: string,
    password: string
  ) => {
    return axiosAuth.post("seller/register", {
      name,
      email,
      password,
      phone,
      role: "SELLER",
    });
  },
  login: async (phone: string, password: string) => {
    return axiosAuth.post("user/login", {
      phone,
      password,
    });
  },
  loginAdmin: async (phone:string,email: string, password: string) => {
    return axiosAuth.post("admin/login", {
      phone,
      email,
      password,
    });
  }
  ,
  isValidToken: async (token: string, phone: string) => {
    return axiosAuth.post("token/isvalid", {
      token,
      phone,
    });
  },
  otpValidateRegister: async (otp: string, email: string) => {
    return axiosAuth.post("verify/otp/register", {
      otp,
      email,
    });
  },
  sendOtpEmail: async (email: string) => {
    return axiosAuth.post("send-email", {
      email,
    });
  },
  sendOtpEmailAdmin: async (email: string) => {
    return axiosAuth.post("send-email/admin", {
      email,
    });
  },
  otpValidateForgotPassword: async (otp: string, email: string) => {
    return axiosAuth.post("verify/otp/reset-password", {
      email,
      otp,
    });
  },
  resetPassword: async (email: string,password: string) => {
    return axiosAuth.post("reset-password", {
      password,
      email,
    });
  },
};
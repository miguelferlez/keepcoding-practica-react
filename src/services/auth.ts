import type { Credentials, Login } from "../pages/auth/types";
import {
  client,
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../api/client";
import storage from "../utils/storage";

export const login = async (credentials: Credentials) => {
  const response = await client.post<Login>("/auth/login", credentials);
  const { accessToken } = response.data;

  storage.set("auth", accessToken);

  setAuthorizationHeader(accessToken);
};

export const logout = async () => {
  storage.remove("auth");

  removeAuthorizationHeader();
};

import { createContext } from "react";
import { AuthTypes } from "./AuthTypes";

export const AuthContext = createContext<AuthTypes|null>(null)
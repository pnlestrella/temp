import { createContext } from "react";
import { AuthTypes } from "./auth.types";

export const AuthContext = createContext<AuthTypes|null>(null);
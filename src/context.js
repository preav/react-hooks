import { createContext } from "react";

export const UserContext = createContext();
export const AddressContext = createContext();

export const UserProvider = UserContext.Provider;
export const AddressProvider = AddressContext.Provider;

import { createContext } from "react";
import { ActiveSidebarTabType, DbContextType } from "../Types/Types";




export const ActiveSidebarTab = createContext<ActiveSidebarTabType | null>(null);

export const DbContext = createContext<DbContextType | null>(null);
import { PokemonsContext } from "@/context/PokemonsContext";
import { useContext } from "react";

export const usePoke = () => {
  const context = useContext(PokemonsContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
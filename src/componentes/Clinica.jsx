import { Box } from "@mui/material";
import { Header } from "./Header";
import { Servicios } from "./Servicios";
import { Contact } from "./Contact";
import { ProfesionalesM } from "./ProfesionalesM";

export const Clinica = () => {
  return (
    <Box>
      <Header />
      <Servicios />
      <ProfesionalesM />
      <Contact />
    </Box>
  );
};

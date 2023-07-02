import { Box } from "@mui/material";

export const Servicios = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: "30px",
        backgroundColor: "#f2f2f2",
        fontSize: "5mm",
      }}
    >
      <Box>
        <h2>Algunos de nuestros servicios incluyen:</h2>
        <ul>
          <li>Control y seguimiento de enfermedades crónicas</li>
          <li>Atención en pediatría y ginecología</li>
          <li>Tratamientos de fisioterapia y rehabilitación</li>
          <li>Realización de estudios médicos y diagnósticos</li>
        </ul>
      </Box>
    </Box>
  );
};

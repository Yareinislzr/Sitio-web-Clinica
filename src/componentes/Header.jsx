import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2020/08/03/09/43/medical-5459653_640.png)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "70%",
          p: "4px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "8mm",
            fontWeight: "700",
          }}
        >
          Bienvenidos a nuestra Clínica
        </Typography>
        <p>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "5mm",
            }}
          >
            En nuestra clínica ofrecemos los mejores servicios médicos para
            cuidar de su salud. Nuestro equipo de profesionales está altamente
            capacitado para brindarle la atención que necesita.
          </Typography>
        </p>
      </Box>
    </Box>
  );
};

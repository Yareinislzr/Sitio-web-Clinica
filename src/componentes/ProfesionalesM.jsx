import { Box, Typography } from "@mui/material";
import { Fotos } from "./Fotos";

export const ProfesionalesM = ({ doctor, especialidad, foto }) => {
  return (
    <>
      <Typography sx={{ textAlign: "center", fontSize: "8mm", pb: "8px" }}>
        Profesionales
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          gap: "10px",
          pb: "80px",
          backgroundColor: "#f3f3f3",
          pt: "20px",
        }}
      >
        <Box>
          <Fotos
            foto="https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710152_640.jpg"
            doctor="Dr. Juan Pérez"
            especialidad="Especialista en pediatría"
          />
        </Box>
        <Fotos
          foto="https://media.istockphoto.com/id/1393587823/es/foto/retrato-de-una-doctora-en-la-cl%C3%ADnica-m%C3%A9dica.jpg?s=1024x1024&w=is&k=20&c=7_lO4E-wimCzLDTXgKcmV9izuW83fNV8FGZ51GK1T1E="
          doctor="Dra. Ana García"
          especialidad="Especialista en ginecologí"
        />

        <Box>
          <Fotos
            foto="https://media.istockphoto.com/id/1203995945/es/foto/retrato-de-hombre-maduro-doctor-que-lleva-abrigo-blanco-de-pie-en-el-pasillo-del-hospital.jpg?s=612x612&w=0&k=20&c=TLFMEYbqmt5noGITcY6PRgaX4MfmfE2TYXehgiCDDuk="
            doctor="Dr. Carlos Rodríguez"
            especialidad="Especialista en fisioterapia"
          />
        </Box>
      </Box>
    </>
  );
};

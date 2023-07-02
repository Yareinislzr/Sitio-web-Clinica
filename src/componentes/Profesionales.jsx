import { Avatar, Box, Typography } from "@mui/material";

export const Profesionales = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Nuestro equipo de profesionales</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar
                src="https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710152_640.jpg"
                alt="Doctor 1"
                sx={{
                  display: "flex",
                  width: "50mm",
                  height: " 50mm",
                  borderRadius: "5%",
                }}
              />
              <h3>Dr. Juan Pérez</h3>
              <p>Especialista en pediatría</p>
            </Box>
            <Box>
              <Avatar
                src="https://media.istockphoto.com/id/1393587823/es/foto/retrato-de-una-doctora-en-la-cl%C3%ADnica-m%C3%A9dica.jpg?s=1024x1024&w=is&k=20&c=7_lO4E-wimCzLDTXgKcmV9izuW83fNV8FGZ51GK1T1E="
                alt="Doctor 2"
                sx={{
                  display: "flex",
                  width: "50mm",
                  height: " 50mm",
                  borderRadius: "5%",
                }}
              />
              <h3>Dra. Ana García</h3>
              <p>Especialista en ginecología</p>
            </Box>
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/1203995945/es/foto/retrato-de-hombre-maduro-doctor-que-lleva-abrigo-blanco-de-pie-en-el-pasillo-del-hospital.jpg?s=612x612&w=0&k=20&c=TLFMEYbqmt5noGITcY6PRgaX4MfmfE2TYXehgiCDDuk="
                alt="Doctor 2"
              />
              <h3>Dr. Carlos Rodríguez</h3>
              <p>Especialista en fisioterapia</p>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

import { Avatar, Box, Typography } from "@mui/material";

export const Fotos = ({ doctor, especialidad, foto }) => {
  const avatarStyles = {
    display: "flex",
    width: "50mm",
    height: "50mm",
    borderRadius: "5%",
  };

  const boxStyles = {
    display: "flex",
    flexDirection: "column",
    width: "50mm",
    height: "50mm",
    borderRadius: "5%",
    gap: "10px",
    pb: "10px",
  };

  return (
    <Box>
      <Box sx={boxStyles}>
        <Avatar src={foto} sx={avatarStyles}>
          {foto}
        </Avatar>
      </Box>
      <Box>
        <Typography variant="h6">{doctor}</Typography>
        <Typography variant="subtitle1">{especialidad}</Typography>
      </Box>
    </Box>
  );
};

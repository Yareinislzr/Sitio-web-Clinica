import { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

export const Contact = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");

  const manejarNombre = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const manejarEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const manejarArea = (e) => {
    setArea(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "sans-serif",
          fontSize: "8mm",
          fontWeight: "700",
          textAlign: "center",
          pb: "10px",
          pt: "20px",
        }}
      >
        Contacto
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "15px",
          pb: "40px",
          gap: "10px",
        }}
      >
        <Box>
          <label htmlFor="Name">Nombre:</label>
          <TextField
            onChange={manejarNombre}
            type="text"
            value={input}
            name="Name"
            required
          />
        </Box>
        <Box>
          <label htmlFor="email">Email:</label>
          <TextField
            onChange={manejarEmail}
            type="email"
            value={email}
            name="email"
            required
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          pb: "20px",
        }}
      >
        <label htmlFor="Message">Message:</label>
        <TextField
          sx={{ width: { xs: "80%", md: "40%" } }}
          onChange={manejarArea}
          cols="65"
          rows="10"
          type="text"
          value={area}
          name="Message"
          required
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" type="submit" color="primary">
            <Typography sx={{ color: "white" }}>Enviar</Typography>
          </Button>
        </Box>
        <form
          action="https://formsubmit.co/yareinisalazars@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value="http://127.0.0.1:5173/ruta3?Name=&Name=&Mesage="
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </Box>
    </Box>
  );
};

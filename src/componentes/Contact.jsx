import { Fragment, useState } from "react";
import { Box } from "@mui/system";
import { CustomAvatar } from "./Avatar";
import { Button, Typography } from "@mui/material";

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
    <Fragment>
      <CustomAvatar />
      <Box
        sx={{
          diplay: "flex",
          justifyContent: "center",
          alignItems: "center",
          Width: "100%",
          height: "100vh",
        }}
      >
        <form
          action="https://formsubmit.co/yareinisalazars@gmail.com"
          method="POST"
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              padding: "40px 40px 3px 40px",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box>
              <Typography>
                <label htmlFor="Name"></label>
              </Typography>
              Nombre:{" "}
              <input
                onChange={manejarNombre}
                type="text"
                value={input}
                name="Name"
                required
              />
            </Box>
            <Box>
              <Typography>
                <label htmlFor="email" />
              </Typography>
              Email:{" "}
              <input
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
              padding: "40px 40px 10px 40px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography>
              <label htmlFor="Message" />
            </Typography>
            Message
            <textArea
              onChange={manejarArea}
              cols="65"
              rows="8"
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
                width: "100%",
              }}
            >
              <Button variant="contained" type="submit" color="secondary">
                <Typography sx={{ color: "black" }}>Enviar</Typography>
              </Button>
            </Box>
            <input
              type="hidden"
              name="_next"
              value="http://127.0.0.1:5173/ruta3?Name=&Name=&Mesage="
            />
            <input type="hidden" name="_captcha" value="false" />
          </Box>
        </form>
      </Box>
    </Fragment>
  );
};

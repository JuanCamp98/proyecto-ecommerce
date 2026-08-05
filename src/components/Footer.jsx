import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1e293b",
        color: "white",
        textAlign: "center",
        py: 4,
        mt: 8,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 1,
        }}
      >
        La Tienda de Pocho
      </Typography>

      <Typography variant="body1">
        Proyecto Final - Desarrollo Web
      </Typography>

      <Typography sx={{ mt: 2 }}>
        📧 contacto@latiendadepocho.com
      </Typography>

      <Typography>
        📍 Posadas, Misiones - Argentina
      </Typography>

      <Typography sx={{ mt: 2 }}>
        © {new Date().getFullYear()} La Tienda de Pocho
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mt: 1,
          opacity: 0.8,
        }}
      >
        Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
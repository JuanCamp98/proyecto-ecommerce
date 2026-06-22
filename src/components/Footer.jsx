import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1976d2",
        color: "white",
        textAlign: "center",
        padding: 3,
        marginTop: 5,
      }}
    >
      <Typography variant="h6">
        Proyecto E-Commerce
      </Typography>

      <Typography>
        Email: contacto@ecommerce.com
      </Typography>

      <Typography>
        Teléfono: 3764123456
      </Typography>

      <Typography>
        Dirección: Posadas, Misiones
      </Typography>

      <Typography>
        Facebook | Instagram | X
      </Typography>

      <Typography sx={{ marginTop: 1 }}>
        © 2026 Proyecto E-Commerce
      </Typography>
    </Box>
  );
}

export default Footer;
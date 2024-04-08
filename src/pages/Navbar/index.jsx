import { Box, Button } from "@mui/material";

import Link from "@mui/material/Link";
const Navbar = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        backgroundColor: "red",
        position: "fixed",
        width: "100vw",
        top: "0rem",
        left: "0rem",
        display: "flex",
        flexDirection: "row-reverse",
        padding: "0.5rem",
      }}
    >
      <Link href="/invoices">
        <Button
          sx={{
            alignSelf: "flex-end",
            backgroundColor: "#E8EFCF",
            padding: "0.5rem",
          }}
        >
          Invoices
        </Button>
      </Link>
    </Box>
  );
};
export default Navbar;

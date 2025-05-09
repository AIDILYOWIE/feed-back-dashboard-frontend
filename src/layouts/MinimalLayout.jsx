import { Box } from "@mui/material";


const MinimalLayout = ({ children }) => {
  return (
        <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#F2F2F2" }}>{children}</Box>
);
};

export default MinimalLayout;

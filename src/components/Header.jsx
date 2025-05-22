import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
    >
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{
           m: "0 0 5px 0",
           fontSize: {
            xs: "2em",
            md: "2em"
           }
          }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}
        sx={{ 
          fontSize: {
            xs: "1.2em",
            md: "1.2em"
          }
         }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;

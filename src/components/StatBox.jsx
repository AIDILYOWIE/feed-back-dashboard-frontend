import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const formatRupiah = (value) => 
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)


const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box sx={{ width: "max-content", height: "max-content" }}>{icon}</Box>
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {subtitle == 'Total Profit' ? formatRupiah(title) : title}
          </Typography>
          <Typography
            mt={"5px"}
            variant="h4"
            sx={{ color: colors.greenAccent[500] }}
          >
            {subtitle}
          </Typography>

          <Box mt={"5px"} display={"flex"}>
            <Typography
              variant="h5"
              fontStyle="italic"
              sx={{ color: colors.greenAccent[600] }}
            >
              {increase}
            </Typography>
            <Typography
              fontSize={"12px"}
              m={"1px 5px"}
              sx={{ color: colors.grey[100] }}
            >
              ( dalam 1 bulan )
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;

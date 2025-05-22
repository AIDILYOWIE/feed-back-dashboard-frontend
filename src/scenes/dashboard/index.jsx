import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { mockLineData, dataTransaksi } from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const total = dataTransaksi[0].data.reduce((sum, item) => sum + item.y, 0);
  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: {
                xs: "10px",
              },
              fontWeight: "bold",
              padding: {
                xs: "10px 15px",
              },
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Laporan
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "repeat(12, 1fr)",
            lg: "repeat(12, 1fr)",
          },
        }}
        gridAutoRows="140px"
        gap="20px"
        mt={"20px"}
      >
        {/* ROW 1 */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "span 4",
              lg: "span 4",
            },
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Jumlah Transaksi"
            progress="0.90"
            increase="+14%"
            icon={
              <ReceiptLongIcon
                sx={{ color: colors.greenAccent[600], fontSize: "5em" }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "span 4",
              lg: "span 4",
            },
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={30000}
            subtitle="Total Profit"
            progress="0.50"
            increase="+21%"
            icon={
              <TrendingUpOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "4em" }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "span 4",
              lg: "span 4",
            },
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Total Kustomer"
            progress="0.30"
            increase="+5%"
            icon={
              <PeopleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "4em" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          sx={{
            gridColumn: { xs: "span 12" },
            gridRow: { xs: "span 2" },
            height: "max-content",
          }}
          backgroundColor={colors.primary[400]}
        >
          <Box
            p="15px 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={"100%"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Total Riview
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                300
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0" width={"100%"} sx={{ }}>
            <LineChart isDashboard={true} data={mockLineData} />
          </Box>
        </Box>

        <Box
          sx={{
            gridColumn: { xs: "span 12" },
            gridRow: { xs: "span 2" },
            height: "max-content",
          }}
          backgroundColor={colors.primary[400]}
        >
          <Box
            p="15px 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={"100%"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Grafik Transaksi
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                {formatRupiah(total)}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} data={dataTransaksi} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

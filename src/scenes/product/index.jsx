import { Box, colors, useTheme, Button, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Card from "./Product";
import { useCallback, useEffect, useState } from "react";
import { mockDataProduk } from "../../data/mockData";
import { Navigate, useNavigate } from "react-router-dom";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const navigate = useNavigate()

  // const [dataProduct, setDataProduct] = useState([])

  // const fetchDataProduct = useCallback( async () => {
  //   try {
  //       await mockDataProduk.map((item, i) => {
  //           setDataProduct(item)
  //       })
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }, [dataProduct])

  // useEffect(() => {
  //   fetchDataProduct()
  // }, [fetchDataProduct])

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <Box m="20px">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Header title="PRODUK" subtitle="Management Produk" />
        </Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            height: "max-content",
            padding: "10px 25px",
          }}  
          onClick={() => navigate("/produk/create")}
        >
          {<AddOutlinedIcon sx={{ mr: "5px" }} />}
          Tambah Produk
        </Button>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap="20px"
        mt={"20px"}
      >
        {mockDataProduk.map((item, i) => (
          <Box
            onClick={() => navigate(`/produk/${item.id}`) }
            key={i}
            sx={{
              width: "100%", // fleksibel ke grid track
              maxWidth: "300px", // opsional: batasi 300px
              minWidth: 0, // wajib agar bisa menyuszut
              background: colors.primary[400],
              borderRadius: "3px",
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "250px",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <img srcSet={item.img} width={"100%"} height={"100%"} />
            </Box>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={"10px"}
            >
              <Typography
                variant="h3"
                fontWeight={"bold"}
                letterSpacing={"1px"}
                ml={"5px"}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "180px",
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="h5" letterSpacing={"1px"} mr={"5px"}>
                {formatRupiah(item.price)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Products;

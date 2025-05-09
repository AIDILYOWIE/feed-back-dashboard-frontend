import {
  Box,
  Typography,
  useTheme,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import * as yup from "yup";
import { tokens } from "../../theme";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { mockDataProduk } from "../../data/mockData";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { MenuItem } from "react-pro-sidebar";
import { Item } from "../global/Sidebar";
import EditIcon from "@mui/icons-material/Edit";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { TextField, Select } from "@mui/material";

const Card = ({ title, image, price }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isClickCard, setIsClickCard] = useState(false);

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <Box
      width={"300px"}
      display={"flex"}
      flexDirection={"column"}
      gridRow={"span 2"}
      sx={{
        background: colors.primary[400],
        borderRadius: "3px",
        padding: "10px",
        cursor: "pointer",
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
        <img srcSet={image} width={"100%"} height={"100%"} />
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
        >
          {title}
        </Typography>
        <Typography variant="h5" letterSpacing={"1px"} mr={"5px"}>
          Rp {formatRupiah(price)}
        </Typography>
      </Box>
    </Box>
  );
};

export const DetailCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const parms = useParams();

  const comment = 2

  const stylesScrollbar = {
    scrollbar: {
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: colors.grey[400],
        borderRadius: "20px",
      },
    },
  };

  const detailProduk = mockDataProduk.find((item) => item.id == parms.id);
  return (
    <Box m="20px">
      <Box
        sx={{
          background: colors.primary[400],
          width: "100%",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "10em",
        }}
        borderRadius={"3px"}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(2, 1fr)"}
          gap={"40px"}
        >
          <Box
            width={"100%"}
            height={"100%"}
            display={"grid"}
            alignContent={"center"}
          >
            <Box
              sx={{
                width: "100%",
                height: "600px",
                borderRadius: "5px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img src={detailProduk.img} width={"100%"} height={"100%"} />
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"40px"}
            width={"100%"}
            height={"100%"}
          >
            <Box maxWidth={"100%"} height={"max-content"}>
              <Typography
                variant="h2"
                fontSize={"28px"}
                fontWeight={"bold"}
                letterSpacing={"1px"}
              >
                {detailProduk.title}
              </Typography>
              <Box display={"flex"} width={"100%"} gap={"20px"} mt={"10px"}>
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={"light"}
                    letterSpacing={"1px"}
                  >
                    Terjual : <span color={colors.grey[100]}>1</span>
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  width={"max-content"}
                  height={"max-content"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <StarOutlinedIcon sx={{ color: colors.yellowAccent[100] }} />
                  <Typography variant="h5">5</Typography>
                  <Typography sx={{ ml: "10px" }} variant="h5">
                    (terjual <span>10</span>)
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box width={"100%"}>
              <Typography variant="h1" fontWeight={"bold"}>
                Rp 30.000.000
              </Typography>
            </Box>

            <Box
              id="scrollbar-box"
              width={"100%"}
              maxHeight={"500px"}
              overflow={"auto"}
              sx={{ ...stylesScrollbar.scrollbar }}
            >
              <Typography
                variant="h5"
                fontWeight={"light"}
                letterSpacing={".5px"}
                lineHeight={"25px"}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                quae illo obcaecati adipisci perferendis blanditiis est commodi
                voluptate, architecto ratione esse eaque, nulla debitis
                aspernatur quidem tempora in fugit id optio animi numquam
                inventore! Voluptatum ipsam debitis dolor nam hic, velit atque.
                Veniam dolore cumque voluptates culpa. Asperiores excepturi enim
                quisquam, illo illum ipsam itaque dolores, saepe distinctio
                laboriosam deserunt quam? Consequatur, nulla. Adipisci,
                doloribus. Sint eius quidem pariatur iure numquam distinctio ab
                nam tempore molestias, quisquam delectus dolor fuga consequuntur
                error magnam sunt officiis mollitia ipsam, aperiam repellat
                nostrum adipisci, animi possimus velit! Ullam nulla magni
                officia vitae impedit!
              </Typography>
            </Box>

            <Box width={"100%"}>
              <Button
                sx={{
                  padding: ".5em 1.5em",
                  backgroundColor: colors.primary[100],
                  color: colors.grey[700],
                  letterSpacing: ".5px",
                  fontSize: "1.1em",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                <EditIcon sx={{ fontSize: "20px", mr: "5px" }} />
                edit detail
              </Button>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={"5em"}>
          <Box>
            <Typography
              variant="h3"
              letterSpacing={"1.5px"}
              fontWeight={"bold"}
            >
              ULASAN PEMBELI
            </Typography>

            <Box
              sx={{
                width: "100%",
                padding: "50px",
                border: `1px solid ${colors.grey[200]}`,
                borderRadius: "10px",
                mt: "20px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "max-content",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Box
                  display={"flex"}
                  width={"max-content"}
                  alignItems={"center"}
                  gap={"5px"}
                >
                  <StarOutlinedIcon
                    sx={{ color: colors.yellowAccent[100], fontSize: "50px" }}
                  />
                  <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                    <Typography variant="h1" fontWeight={"bold"}>
                      5.0
                    </Typography>
                    <Typography
                      variant="h3"
                      color={colors.grey[300]}
                      fontWeight={"normal"}
                    >
                      / 5.0
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontWeight={"light"}
                    letterSpacing={".5px"}
                  >
                    100% pemebeli merasa puas
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  height: "100%",
                  display: "grid",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    height={"100%"}
                    gap={"5px"}
                  >
                    <StarOutlinedIcon
                      sx={{ fontSize: "24px", color: colors.yellowAccent[100] }}
                    />
                    <Typography variant="h4">5</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "250px",
                      height: "7px",
                      borderRadius: "50px",
                      backgroundImage: `linear-gradient(to right, ${colors.yellowAccent[100]} 90%, white 90% 100%)`,
                    }}
                  ></Box>
                  <Box>
                    <Typography variant="h4">(9)</Typography>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    height={"100%"}
                    gap={"5px"}
                  >
                    <StarOutlinedIcon
                      sx={{ fontSize: "24px", color: colors.yellowAccent[100] }}
                    />
                    <Typography variant="h4">4</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "250px",
                      height: "7px",
                      borderRadius: "50px",
                      backgroundImage: `linear-gradient(to right, ${colors.yellowAccent[100]} 90%, white 90% 100%)`,
                    }}
                  ></Box>
                  <Box>
                    <Typography variant="h4">(9)</Typography>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    height={"100%"}
                    gap={"5px"}
                  >
                    <StarOutlinedIcon
                      sx={{ fontSize: "24px", color: colors.yellowAccent[100] }}
                    />
                    <Typography variant="h4">3</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "250px",
                      height: "7px",
                      borderRadius: "50px",
                      backgroundImage: `linear-gradient(to right, ${colors.yellowAccent[100]} 90%, white 90% 100%)`,
                    }}
                  ></Box>
                  <Box>
                    <Typography variant="h4">(9)</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "20px",
                }}
              >
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    height={"100%"}
                    gap={"5px"}
                  >
                    <StarOutlinedIcon
                      sx={{
                        fontSize: "24px",
                        color: colors.yellowAccent[100],
                        textShadow: "1px 1px black",
                      }}
                    />
                    <Typography variant="h4">2</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "250px",
                      height: "7px",
                      borderRadius: "50px",
                      backgroundImage: `linear-gradient(to right, ${colors.yellowAccent[100]} 90%, white 90% 100%)`,
                    }}
                  ></Box>
                  <Box>
                    <Typography variant="h4">(9)</Typography>
                  </Box>
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    height={"100%"}
                    gap={"5px"}
                  >
                    <StarOutlinedIcon
                      sx={{ fontSize: "24px", color: colors.yellowAccent[100] }}
                    />
                    <Typography variant="h4">1</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "250px",
                      height: "7px",
                      borderRadius: "50px",
                      backgroundImage: `linear-gradient(to right, ${colors.yellowAccent[100]} 90%, white 90% 100%)`,
                    }}
                  ></Box>
                  <Box>
                    <Typography variant="h4">(9)</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"50px"}>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
                height: "max-content",
                padding: "20px",
                borderBottom: `1.8px solid rgba(108, 108, 108, 0.88)`,
              }}
            >
              <Box
                display={"flex"}
                sx={{
                  width: "100%",
                  height: "max-content",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    background: "black",
                    borderRadius: "50%",
                  }}
                ></Box>

                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  letterSpacing={".5px"}
                >
                  Aidil Yowie
                </Typography>
              </Box>

              <Box sx={{ width: "100%", height: "max-content" }}>
                <Typography
                  variant="h5"
                  fontWeight={"100"}
                  letterSpacing={".3px"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  tenetur ut voluptas alias, cumque adipisci quo expedita quod
                  natus repellat qui. Debitis dolores numquam error pariatur
                  quos accusantium modi velit consequatur expedita inventore at
                  voluptates nihil consectetur perferendis, iusto cum quo
                  reprehenderit facilis nulla mollitia! Exercitationem alias
                  minima necessitatibus praesentium!
                </Typography>
              </Box>

              <Box width={"max-content"} display={"flex"} alignItems={"center"} gap={"5px"}>
                <StarOutlinedIcon
                  sx={{ fontSize: "25px", color: colors.yellowAccent[100] }}
                />
                <StarOutlinedIcon
                  sx={{ fontSize: "25px", color: colors.yellowAccent[100] }}
                />
                <StarOutlinedIcon
                  sx={{ fontSize: "25px", color: colors.yellowAccent[100] }}
                />
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const AddProduct = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);  
  };

  return (
    <Box m="20px">
      <Header title="TAMBAH PRODUK" subtitle="Buat Produk Baru" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
              mt={"20px"}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nama Produk"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nameProduk}
                name="nameProduk"
                error={!!touched.nameProduk && !!errors.nameProduk}
                helperText={touched.nameProduk && errors.nameProduk}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Detail Produk"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.detail}
                name="detail"
                error={!!touched.detail && !!errors.detail}
                helperText={touched.detail && errors.detail}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price Produk"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Tambah Produk Baru
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  nameProduk: yup.string().required("required"),
  detail: yup.string().required("required"),
  price: yup.number().required("required"),
});
const initialValues = {};
export default Card;

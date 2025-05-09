import { useTheme } from "@emotion/react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { tokens } from "../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Style } from "@mui/icons-material";

export const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleLogin = () => {
    return "login";
  };
  return (
    <Box
      sx={{
        width: "max-content",
        height: "max-content",
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        background: "white",
        borderRadius: "20px",
        overflow: "hidden",
        gridTemplateColumns: "repeat(2, 1fr)",
        boxShadow: ".5px .5px 5px rgba(0, 0, 0, 0.432);"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: colors.primary[400],
          cursor: "pointer"
        }}
      > 
        <img
          src={`../../dashboard-icon.png`}
          width={"250px"}
          height={"250px"}
        />
      </Box>

      <Box
        sx={{
          width: "358px",
          height: "395px",
          padding: "20px",
          display:"grid",
          alignContent: "center",
          gap: "30px",
          color: colors.primary[400],
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
            }}
          >
            Welcome Back!
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "light",
            }}
          >
            Thank you for coming back, and please never go away again
          </Typography>
        </Box>

        <Box>
          <Formik
            onSubmit={handleLogin}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleLogin,
            }) => (
              <form onSubmit={handleLogin}>
                <Box
                  display="grid"
                  gap="20px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="standard"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{
                      gridColumn: "span 4",
                      height: "50px",
                      input: { color: "gray" }, // warna teks
                      label: {
                        color: colors.primary[400],
                        fontWeight: "reguler",
                      }, // warna label
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "gray",
                      }, // border normal
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="standard"
                    type="text"
                    label="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{
                      gridColumn: "span 4",
                      height: "50px",
                      input: { color: "gray" }, // warna teks
                      label: {
                        color: colors.primary[400],
                        fontWeight: "reguler",
                      }, // warna label
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "gray",
                      }, // border normal
                    }}
                  />
                </Box>
              </form>
            )}
          </Formik>
        </Box>

        <Box display="flex" justifyContent="end" mt="20px" width={"100%"}>
          <Button
            sx={{ background: colors.primary[400], width: "100%" }}
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValues = {
  email: "",
  password: "",
};

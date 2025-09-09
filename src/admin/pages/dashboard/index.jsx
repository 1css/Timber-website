import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../theme";
import { mockSellersReq } from "../../data/mockData";

import EmailIcon from "@mui/icons-material/Email";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import ListAltIcon from "@mui/icons-material/ListAlt";

import Header from "../../components/Header";

import StatBox from "../../components/StatBox";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* HEADER */}

      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Link to="/admin/buyerlist" style={{ textDecoration: "none" }}>
            <Box
              width="100%"
              backgroundColor="#141b2d"
              // backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="12,361"
                subtitle="Total Buyer's Acc."
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Link>
        </Grid>

        {/* <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
        <Link to="/timberlistingtable" style={{ textDecoration: "none" }}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="431,225"
              subtitle="Total Products"
              // progress="0.50"
              // increase="+21%"
              icon={
                <ShoppingCartIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          </ Link >
        </Grid> */}
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Link to="/admin/productobjects" style={{ textDecoration: "none" }}>
            <Box
              width="100%"
              backgroundColor="#141b2d"
              // backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="431,225"
                subtitle="Total Products"
                icon={
                  <ShoppingCartIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Link>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Link to="/admin/sellerlist" style={{ textDecoration: "none" }}>
            <Box
              width="100%"
              backgroundColor="#141b2d"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="32,441"
                subtitle="Total Sellers requests"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Link>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Link
            to="/admin/productenquiryfrombuyers"
            style={{ textDecoration: "none" }}
          >
            <Box
              width="100%"
              backgroundColor="#141b2d"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="1,325,134"
                subtitle="Total Enquiries"
                icon={
                  <ListAltIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Link>
        </Grid>
      </Grid>

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Total Sellers requested"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid> */}
        {/* <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="431,225"
              subtitle="Total Approved Sellers"
              icon={
                <ShoppingCartIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid> */}
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            backgroundColor="#141b2d"
            // backgroundColor={colors.primary[400]}
            height="300px"
            maxHeight="300px"
            overflow="auto"
            m="25px 0 0 0"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p="15px"
              position="sticky"
              top="0"
              backgroundColor={colors.primary[400]}
              zIndex="1"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Resent Sellers Requests
              </Typography>
            </Box>
            {mockSellersReq.map((reqSellersPara, i) => {
              return (
                <Box
                  key={`${reqSellersPara}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.greenAccent[100]}
                    >
                      {reqSellersPara.txId}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {reqSellersPara.user}
                    </Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{reqSellersPara.date}</Box>
                  <Box
                    color={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    {reqSellersPara.location}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            // backgroundColor={colors.primary[400]}
            backgroundColor="#141b2d"
            height="300px"
            maxHeight="300px"
            overflow="auto"
            m="25px 0 0 0"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p="15px"
              position="sticky"
              top="0"
              backgroundColor={colors.primary[400]}
              zIndex="1"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Resent Enquiry
              </Typography>
            </Box>
            {mockSellersReq.map((reqSellersPara, i) => {
              return (
                <Box
                  key={`${reqSellersPara}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.greenAccent[100]}
                    >
                      {reqSellersPara.txId}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {reqSellersPara.user}
                    </Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{reqSellersPara.date}</Box>
                  <Box
                    color={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    {reqSellersPara.location}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

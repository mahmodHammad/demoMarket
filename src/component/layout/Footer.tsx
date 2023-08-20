"use client";
import theme from "@/ThemeRegistry/theme";
import { AtarWhiteLogo, FaceBook, LinkedIn, Twitter } from "@/assets";
import { Box, Text } from "@/common";
import { Container, Divider, Grid, Link } from "@mui/material";
import React from "react";

export default function Footer() {
  const description = "Our goal is at the heart of all that we do.";
  const title = AtarWhiteLogo;

  const columns = [
    {
      title: "Page",
      resources: [
        {
          name: "Rent",
          link: "/Rent",
        },
        {
          name: "Buy",
          link: "/Buy",
        },
        {
          name: "About Us",
          link: "/About Us",
        },
        {
          name: "Properties",
          link: "/Properties",
        },
      ],
    },
    {
      title: "Support",
      resources: [
        {
          name: "FAQ,s",
          link: "/FAQ,s",
        },
        {
          name: "Support Center",
          link: "/Support-Center",
        },
        {
          name: "Security",
          link: "Security",
        },
      ],
    },
  ];

  const contactUs = [
    {
      name: "+234- 70-1449-8006",
    },
    {
      name: "atarcloud@gmail.com",
    },
    {
      name: "4112 Al Narjis - Anas Bin Malik Road - Central Province - Riyadh 13327",
      link: ".",
    },
  ];

  const logos = [
    {
      icon: <FaceBook />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <Twitter />,
      link: "https://www.twitter.com/",
    },
    {
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <Box
      sx={{
        color: "#fff",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Box
        component="footer"
        sx={{
          py: { xs: "32px", md: "50px" },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} md={4.8}>
              <Box column>
                <AtarWhiteLogo
                  sx={{
                    height: "40px",
                    width: "95px",
                  }}
                />
                <Text
                  s={14}
                  bold
                  sx={{
                    color: "#fff",
                    mt: { xs: "12px", md: "40px" },
                    width: { xs: "220px", md: "227px" },
                  }}
                >
                  {description}
                </Text>{" "}
                <Box
                  row
                  gap={1}
                  sx={{ mt: "24px", display: { xs: "none", md: "flex" } }}
                >
                  {logos.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      color="inherit"
                      sx={{ mr: "10px" }}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
            {columns.map((column, index) => (
              <Grid item xs={5} md={1.9} key={index}>
                <Text
                  variant="label"
                  color="inherit"
                  sx={{ mb: "16px", fontSize: "18px" }}
                >
                  {column.title}
                </Text>
                {column.resources.map((item, index) => (
                  <Link
                    href={item.link}
                    color="inherit"
                    key={index}
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <Text
                      key={index}
                      variant="small"
                      light
                      color="inherit"
                      sx={{ display: "block", mb: { xs: "12px", md: "16px" } }}
                    >
                      {item.name}
                    </Text>
                  </Link>
                ))}
              </Grid>
            ))}
            <Grid item xs={10} md={3.4}>
              <Text
                variant="label"
                color="inherit"
                sx={{ mb: "16px", fontSize: "18px" }}
              >
                Contact Us
              </Text>
              {contactUs.map((item, index) => (
                <Text
                  key={item?.name}
                  variant="small"
                  color="inherit"
                  sx={{ mb: { xs: "12px", md: "16px" } }}
                >
                  {item?.name}
                </Text>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider variant="fullWidth" sx={{ backgroundColor: "#CACACA" }} />
      <Box sx={{ py: "24px" }}>
        <Box>
          <Text variant="body2" color="#fff" align="center">
            {"©  "}
            <Link
              color="inherit"
              href="https://www.atarcloud.com/"
              sx={{ textDecoration: "none" }}
            >
              Atarcloud
            </Link>{" "}
            . All Right Reserved {new Date().getFullYear()}
          </Text>
        </Box>
        <Box
          row
          xcenter
          gap={1}
          sx={{ mt: "20px", display: { xs: "flex", md: "none" } }}
        >
          {logos.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              color="inherit"
              sx={{
                mr: "10px",
              }}
            >
              {item.icon}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

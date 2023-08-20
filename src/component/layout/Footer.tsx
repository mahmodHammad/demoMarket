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
    // {
    //   title: "Contact Us",
    //   resources: [
    //     {
    //       name: "+234- 70-1449-8006",
    //     },
    //     {
    //       name: "Makeen@gmail.com",
    //     },
    //     {
    //       name: "4112 Al Narjis - Anas Bin Malik Road - Central Province - Riyadh 13327",
    //       link: ".",
    //     },
    //   ],
    // },
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
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        component="footer"
        sx={{
          p: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box column>
                {" "}
                <AtarWhiteLogo
                  sx={{
                    height: "40px",
                    width: "95px",
                  }}
                />
                <Text s={14} sx={{ color: "#fff", mt: 2 }}>
                  {description}
                </Text>{" "}
                <Box row gap={1} sx={{ mt: 2 }}>
                  {logos.map((item) => (
                    <Link href={item.link} color="inherit">
                      {item.icon}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
            {columns.map((column) => (
              <Grid item xs={6} sm={3}>
                <Text variant="label" color="inherit" gutterBottom>
                  {column.title}
                </Text>
                {column.resources.map((item) => (
                  <Link
                    href={item.link}
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    {" "}
                    <Text
                      variant="small"
                      light
                      color="inherit"
                      sx={{ display: "block" }}
                    >
                      {item.name}
                    </Text>
                  </Link>
                ))}
              </Grid>
            ))}
            <Grid item xs={12} sm={3}>
              <Text variant="label" color="inherit" gutterBottom>
                Contact Us
              </Text>
              <Text variant="body2" color="inherit">
                +234- 70-1449-8006
              </Text>
              <Text variant="body2" color="inherit">
                Makeen@gmail.com
              </Text>
              <Text variant="body2" color="inherit">
                4112 Al Narjis - Anas Bin Malik Road - Central Province - Riyadh
                13327
              </Text>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider
        variant="fullWidth"
        sx={{ backgroundColor: "#CACACA", height: 1, mt: 2 }}
      />
      <Box mt={2}>
        <Text variant="body2" color="#fff" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://www.atarcloud.com/">
            Atar
          </Link>
          {new Date().getFullYear()}
          {"."}
        </Text>
      </Box>
    </Box>
  );
}

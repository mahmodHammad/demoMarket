"use client";
import { Box, Button, Container, Item, Text } from "@/wrappers";
import Image from "next/image";
import React from "react";
import signupimg from "@/assets/images/signup.png";
import { FormLabel, Input } from "@mui/material";
import { Phoneinput } from "@/component";
import { useForm } from "react-hook-form";

type Props = {};

const Signup = (props: Props) => {
  const form = useForm();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    register,
    watch,
  } = form;
  return (
    <Container sx={{ height: "calc(100vh - 100px)" }}>
      <Item md={6}>
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 100px)",
            objectFit: "cover",
          }}
          component={Image}
          alt="houses and properties for rent"
          src={signupimg}
        />
      </Item>
      <Item md={6} center column>
        <Box maxWidth="370px" sx={{ textAlign: "center" }} column>
          <Text variant="h4">
            Welcome to{" "}
            <Text variant="h4" color="primary" sx={{ display: "inline" }}>
              Atar
            </Text>
          </Text>
          <Text variant="small" gray align="center" mt="16px">
            Take control of the service experience during your property search &
            ownership journey
          </Text>

          <Box sx={{ mt: "24px" }}>
            <FormLabel sx={{ display: "flex", fontSize: "12px", mb: "6px" }}>
              Full Name
            </FormLabel>
            <Input
              variant="outlined"
              fullWidth
              placeholder="Enter your Full name"
              variant="outlined"
            />

            <FormLabel
              sx={{ display: "flex", fontSize: "12px", mb: "6px", mt: "18px" }}
            >
              National ID / Residence Permit No.
            </FormLabel>
            <Input
              variant="outlined"
              fullWidth
              placeholder="Enter your national ID/residence Permit No."
            />

            <FormLabel
              sx={{ display: "flex", fontSize: "12px", mb: "6px", mt: "18px" }}
            >
              Phone Number
            </FormLabel>
            <Input
              variant="outlined"
              fullWidth
              placeholder="Enter your phone number"
            />
          </Box>
          {/* <Phoneinput control={form.control}/> */}

          <Text variant="small" gray align="left" mt="18px">
            By proceeding to create your account, you are agreeing to{" "}
            <b>our Terms of Use </b> and <b>Privacy Policy</b>
          </Text>
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: "24px" }}
          >
            sign up
          </Button>
          <Text mt="24px">
            Already have an account?{" "}
            <Text sx={{ display: "inline" }} color="primary" bold>
              Sign in{" "}
            </Text>
          </Text>
        </Box>
      </Item>
    </Container>
  );
};

export default Signup;

import { Box, Button, Text } from "@/wrappers";
import Link from "next/link";

export default function Default() {
  return (
    <Box center column sx={{ minHeight: "80vh" }}>
      <Text variant="h3">404</Text>
      <Text variant="h3" align="center" sx={{ mt: "12px" }}>
        Oops! Page Not Found
      </Text>
      <Button
        sx={{
          mt: { md: "60px", xs: "26px" },
        }}
        component={Link}
        href="/"
        variant="outlined"
      >
        Back Home
      </Button>
    </Box>
  );
}

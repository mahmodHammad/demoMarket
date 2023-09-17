import { Box, Button, Text } from "@/wrappers";
import Image from "next/image";
import neibourhoodcover2 from "@/assets/images/Rectangle 4535.png";

interface Props { }

export default function ForSale() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "16px",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "bottom",
                        position: "absolute",
                    }}
                    component={Image}
                    alt="houses and properties for rent"
                    src={neibourhoodcover2}
                />
                <Box>
                    <Text
                        variant="small"
                        sx={{
                            color: "#fff",
                            top: "20px",
                            left: "30px",
                            position: "absolute",
                            fontSize: { xs: "14px", md: "24px" },
                        }}
                    >
                        Dream House
                    </Text>
                    <Text
                        variant="h4"
                        sx={{
                            color: "#fff",
                            top: "70px",
                            left: "32px",
                            position: "absolute",
                            fontSize: { xs: "14px", md: "24px" },
                        }}
                    >
                        For Sale
                    </Text>
                    <Text
                        variant="label"
                        sx={{
                            color: "#fff",
                            top: "130px",
                            left: "32px",
                            position: "absolute",
                        }}
                    >
                        SAR 29,000.00
                    </Text>
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{
                            color: "#fff",
                            top: "180px",
                            left: "32px",
                            position: "absolute",
                        }}>
                        Schedule a Visit
                    </Button>
                </Box>
            </Box>
        </>
    );
}

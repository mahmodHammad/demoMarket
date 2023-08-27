import { Room } from "@/assets";
import { Box, Text } from "@/wrappers";
import { Avatar, Icon } from "@mui/material";

interface Props {
  icon?: string;
  title: string;
}
export default function FeaturesAndAmenities({ icon, title }: Props) {
  return (
    <Box
      center
      row
      gap={"8px"}
      sx={{
        mt: { xs: "5px", md: "16px" },
        mr: { xs: "5px", md: "16px" },
        height: { xs: "72px", md: "96px" },
        width: { xs: "72px", md: "96px" },
        borderRadius: "8px",
        backgroundColor: "rgba(0, 142, 165, 0.08)",
      }}
    >
      <Box column center>
        {icon} <Room></Room>
        <Text variant="small" bold>
          {title}
        </Text>
      </Box>
    </Box>
  );
}

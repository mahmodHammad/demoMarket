import { Room } from "@/assets";
import { Box, Text } from "@/wrappers";
import { Avatar, Icon } from "@mui/material";

interface Props {
  icon?: string;
  title: string;
}
export default function BuildingSchemeIcons({ icon, title }: Props) {
  return (
    <Box row gap={"8px"} sx={{ mt: { xs: "5px", md: "10px" } }}>
      <Box row center>
        {icon} <Room></Room>
        <Text variant="label" gray>
          {title}
        </Text>
      </Box>
    </Box>
  );
}

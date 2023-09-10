import { Room } from "@/assets";
import { Box, Text } from "@/wrappers";
import { Avatar, Icon } from "@mui/material";

interface Props {
  icon?: any;
  title: string;
}
export default function BuildingSchemeIcons({ icon, title }: Props) {
  return (
    <Box row gap={"8px"} sx={{ mt: { xs: "5px", md: "10px" } }}>
      <Box row center>
        {icon}
        <Text variant="label" gray>
          {title}
        </Text>
      </Box>
    </Box>
  );
}

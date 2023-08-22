import { Box, Text } from "@/wrappers";
import { Avatar } from "@mui/material";

interface Props {
  avatar: string;
  title: string;
  body: string;
}
export default function OwnerCard({ avatar, title, body }: Props) {
  return (
    <Box row gap={"8px"} sx={{ mt: { xs: "5px", md: "10px" } }}>
      <Box center>
        <Avatar>{avatar} </Avatar>
      </Box>

      <Box column xcenter>
        <Text variant="label"> {title}</Text>
        <Text variant="small" gray>
          {body}
        </Text>
      </Box>
    </Box>
  );
}

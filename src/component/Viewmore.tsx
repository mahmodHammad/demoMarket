import React from "react";
import { Rightrounded } from "@/assets";
import { Button } from "@/wrappers";
import Link from "next/link";

interface Viewmore {
  link: string;
}
export default function Viewmore({ link }: Viewmore) {
  return (
    <Button component={Link} href={link} endIcon={<Rightrounded />}>
      View more
    </Button>
  );
}

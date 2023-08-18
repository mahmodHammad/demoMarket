import Link from "next/link";
import { useRouter } from "next/navigation";

const getData = async () => {
  const data = await fetch("https://www.reddfit.com/.json");
  return data.json();
};
export default async function ContactPage() {
  const data = await getData();
  const post = data.data.children[0].data.title;

  return (
    <div>
      <h1>this is the contact page</h1>
      <h4>{post}</h4>
      <Link href="/">Home</Link>
    </div>
  );
}

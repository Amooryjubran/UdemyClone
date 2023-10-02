import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant="destructive">Click</Button>
      <p className="text-3xl font-medium text-sky-700">Hello World</p>;
    </div>
  );
}

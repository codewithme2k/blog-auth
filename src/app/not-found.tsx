"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const notfound = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/");
  };
  return <Button onClick={onClick}>Back Home</Button>;
};

export default notfound;

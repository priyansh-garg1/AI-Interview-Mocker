import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div onLoad={()=>router.replace('/dashboard')}></div>
  );
}

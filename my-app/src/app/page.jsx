import Image from "next/image";
import Input from "./Components/Tags/Input/Input";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen ">
      <form className="login-form">
        <Image
          src="/insta.png" // Use the correct path for your image
          alt="Instagram Logo"
          width={175}
          height={81}
          className="h-[51px] w-full"
        />
        <div className="flex flex-col items-center justify-center">
          <Input type={"text"} placeholder={"username or email"} />
          <Input type={"text"} placeholder={"password"} />
        </div>
      </form>
    </div>
  );
}

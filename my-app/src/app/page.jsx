"use client"
import Image from "next/image";
import Input from "./Components/Tags/Input/Input";
import Button from "./Components/Tags/Button/Button";
import Paragraph from "./Components/Tags/Paragraph/Paragraph";
import Heading from "./Components/Tags/Heading/Heading";
import { RiFacebookBoxFill } from "react-icons/ri";
import Footer from "./Components/Footer/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="flex items-center justify-center h-[85%] gap-x-12  ">
        <div className="flex flex-col gap-y-4 ">
          <form className="login-form">
            <Image
              src="/insta.png" // Use the correct path for your image
              alt="Instagram Logo"
              width={175}
              height={175}
            />
            <div className="flex flex-col items-center justify-center gap-y-5 ">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <Input
                  type={"text"}
                  placeholder={"username or email"}
                  className={"login-input"}
                />
                <Input
                  type={"text"}
                  placeholder={"password"}
                  className={"login-input"}
                />
              </div>
              <Button text={"Log In"} className={"login-button"} />
            </div>
            <div className="my-5">
              <div className="flex items-center gap-x-5 ">
                <span className="login-border-bar"></span>
                <Paragraph
                  text={"OR"}
                  className={"text-[13px] text-secondary_gray font-semibold"}
                />
                <span className="login-border-bar"></span>
              </div>
              <div className="flex flex-col items-center mt-[30px] gap-y-3 ">
                <div className="flex items-center cursor-pointer gap-x-2 ">
                  <RiFacebookBoxFill className="text-xl text-secondary_blue " />
                  <Heading
                    Variant={"h4"}
                    text={"Log in with facebook"}
                    className={" text-secondary_blue font-medium text-[14px] "}
                  />
                </div>
                <Heading
                  Variant={"h4"}
                  text={"Forgot password ?"}
                  className={
                    "text-[14px] font-normal text-meduim_blue cursor-pointer "
                  }
                />
              </div>
            </div>
          </form>
          <div className="forgot-box">
            <Heading
              Variant={"h4"}
              text={"Don't have an account ?"}
              className={"text-[14px]"}
            />
            <Heading
              Variant={"h4"}
              text={"sign up"}
              className={"text-[14px] text-customBlue font-bold cursor-pointer"}
              onClick={handleSignup}
            />
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <Heading
              Variant={"h4"}
              text={"Get the app"}
              className={"text-[14px]"}
            />
            <div className="flex gap-x-2">
              <Image
                src={"/play_store.png"}
                width={134}
                height={40}
                alt="not found"
                className="cursor-pointer "
              />
              <Image
                src={"/micro.png"}
                width={111}
                height={40}
                alt="not found"
                className="cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

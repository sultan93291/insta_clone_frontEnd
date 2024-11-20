"use client";
import Image from "next/image";
import Input from "./Components/Tags/Input/Input";
import Button from "./Components/Tags/Button/Button";
import Paragraph from "./Components/Tags/Paragraph/Paragraph";
import Heading from "./Components/Tags/Heading/Heading";
import { RiFacebookBoxFill } from "react-icons/ri";
import Footer from "./Components/Footer/Footer";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FastField, useFormik } from "formik";
import axios from "axios";

export default function Home() {
  const images = [
    "/women_cat.png",
    "/message.png",
    "/profile.png",
    "/reels.png",
  ];
  const [Show, setShow] = useState(false);
  const [isPass, setisPass] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        if (currentIndex === images.length-1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }
        setIsFading(false);
      }, 1700);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const router = useRouter();
  const handleSignup = () => {
    router.push("/signup");
  };

  const handlePassBtn = e => {
    if (e.target.value.length > 0) {
      setisPass(true);
    } else {
      setisPass(false);
    }
  };

  const handleShow = () => {
    setShow(!Show);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      console.log(values);

      axios({
        method: "post",
        url: "https://insta-clone-backend-i0e4.onrender.com/api/v1.0.0/insta/login",
        data: values,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => {
          setisPass(false);
          actions.resetForm({
            values: initialValues,
          });
          if (res.status === 200) {
            console.log("successfully logged in");
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
  });

  return (
    <div className="relative w-screen h-screen">
      <div className="flex items-center justify-center h-[85%]   ">
        <div
          className="relative h-[611px] w-[445px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/insta_home.png")' }}
        >
          <div
            className={` absolute top-0 left-0 w-[248px] h-[520.83px] bg-center bg-no-repeat bg-contain ml-[145px] mt-[22px]  transition-opacity duration-[2000ms] ease-in-out ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          ></div>
        </div>

        <div className="flex flex-col gap-y-4 ">
          <form className="login-form" onSubmit={formik.handleSubmit}>
            <Image
              src="/insta.png"
              alt="Instagram Logo"
              width={175}
              height={51}
              className=" my-12 h-[51px] w-[175px] bg-center bg-no-repeat bg-cover "
            />
            <div className="flex flex-col items-center justify-center gap-y-5 ">
              <div className="flex flex-col items-center justify-center gap-y-1.5">
                <Input
                  type={"text"}
                  placeholder={"username or email"}
                  className={"login-input"}
                  name={"email"}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className="relative ">
                  <Input
                    type={Show ? "text" : "password"}
                    placeholder={"password"}
                    className={"login-input pr-14 "}
                    name={"password"}
                    onChange={e => {
                      handlePassBtn(e), formik.handleChange(e);
                    }}
                    value={formik.values.password}
                  />
                  {isPass && (
                    <span
                      className="absolute ml-[-50px] mt-2 text-sm text-secondary_black font-semibold cursor-pointer hover:text-heading_gray "
                      onClick={handleShow}
                    >
                      {" "}
                      {Show ? "Hide" : "Show"}{" "}
                    </span>
                  )}
                </div>
              </div>
              <Button
                disabled={!formik.values.email || !formik.values.password}
                text={"Log In"}
                className={"login-button"}
              />
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

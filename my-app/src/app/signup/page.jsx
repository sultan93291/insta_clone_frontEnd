"use client";
import Image from "next/image";
import Input from "../Components/Tags/Input/Input";
import Button from "../Components/Tags/Button/Button";
import Paragraph from "../Components/Tags/Paragraph/Paragraph";
import Heading from "../Components/Tags/Heading/Heading";
import { RiFacebookBoxFill } from "react-icons/ri";
import Footer from "../Components/Footer/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const Page = () => {
  const [Show, setShow] = useState(false);
  const [isPass, setisPass] = useState(false);

  const router = useRouter();

  const handleSignup = () => {
    router.push("/"); // Redirect to the homepage after successful signup
  };

  const handleShow = () => {
    setShow(!Show); // Toggle password visibility
  };

  const handlePassBtn = e => {
    if (e.target.value.length > 0) {
      setisPass(true);
    } else {
      setisPass(false);
    }
  };

  const initialValues = {
    email: "",
    password: "",
    userName: "",
    fullName: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      // Make API request to signup
      axios({
        method: "post",
        url: "https://insta-clone-backend-i0e4.onrender.com/api/v1.0.0/insta/signup",
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
            console.log("Successfully registered");
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
  });

  return (
    <div className="relative flex flex-col w-screen h-screen justify-evenly">
      <div className="flex justify-center h-[90%] gap-x-12">
        <div className="flex flex-col gap-y-3">
          <form onSubmit={formik.handleSubmit} className="login-form">
            <div className="flex flex-col items-center mt-10 gap-y-5">
              <Image
                src="/insta.png"
                alt="Instagram Logo"
                width={175}
                height={51}
                className="h-[51px] w-[175px] bg-center bg-no-repeat bg-cover"
              />
              <Heading
                text={"Sign up to see photos and videos from your friends."}
                Variant={"h4"}
                className={"signup-heading"}
              />
              <Button
                text={
                  <>
                    <RiFacebookBoxFill className="mr-2 text-2xl text-white" />
                    Log in with Facebook
                  </>
                }
                className={
                  "login-button mb-2.5 bg-dark_blue flex items-center justify-center text-center text-sm"
                }
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5">
              <div className="flex items-center gap-x-5">
                <span className="login-border-bar"></span>
                <Paragraph
                  text={"OR"}
                  className={"text-[13px] text-secondary_gray font-semibold"}
                />
                <span className="login-border-bar"></span>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-1.5">
                <Input
                  type={"email"}
                  placeholder={"Email"}
                  className={"login-input"}
                  name={"email"}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className="relative">
                  <Input
                    type={Show ? "text" : "password"}
                    placeholder={"Password"}
                    className={"login-input pr-14"}
                    name={"password"}
                    onChange={e => {
                      handlePassBtn(e), formik.handleChange(e);
                    }}
                    value={formik.values.password}
                  />
                  {isPass && (
                    <span
                      className="absolute ml-[-50px] mt-2 text-sm text-secondary_black font-semibold cursor-pointer hover:text-heading_gray"
                      onClick={handleShow}
                    >
                      {Show ? "Hide" : "Show"}
                    </span>
                  )}
                </div>
                <Input
                  type={"text"}
                  placeholder={"Full name"}
                  className={"login-input"}
                  name={"fullName"}
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                />
                <Input
                  type={"text"}
                  placeholder={"Username"}
                  className={"login-input"}
                  name={"userName"}
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                />
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <Paragraph
                  className={
                    "w-[258px] text-xs text-center text-heading_gray font-normal"
                  }
                  text={
                    <>
                      People who use our service may have uploaded your contact
                      information to Instagram
                      <a href="#" className="text-link_blue">
                        {" "}
                        Learn More
                      </a>
                    </>
                  }
                />
                <Paragraph
                  className={
                    "w-[258px] text-xs text-center text-heading_gray font-normal"
                  }
                  text={
                    <>
                      By signing up, you agree to our
                      <a href="#" className="text-link_blue">
                        {" "}
                        Terms , Privacy Policy
                      </a>
                      and
                      <a href="#" className="text-link_blue">
                        {" "}
                        Cookies Policy .
                      </a>
                    </>
                  }
                />
              </div>
              <Button
                disabled={
                  !formik.values.email ||
                  !formik.values.password ||
                  !formik.values.userName ||
                  !formik.values.fullName
                }
                text={"Sign up"}
                className={"login-button mb-10"}
              />
            </div>
          </form>
          <div className="forgot-box">
            <Heading
              Variant={"h4"}
              text={"Have an account ?"}
              className={"text-[14px]"}
            />
            <Heading
              Variant={"h4"}
              text={"Log in"}
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
                className="cursor-pointer"
              />
              <Image
                src={"/micro.png"}
                width={111}
                height={40}
                alt="not found"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

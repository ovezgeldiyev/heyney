/* eslint-disable @next/next/no-img-element */
"use client";
import React, { Fragment } from "react";
import Button from "@/components/common/Button";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseConfig from "@/firebaseConfig";
import { motion } from "framer-motion";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface EmailFieldProps {
  onClose?: () => void;
  theme?: "light" | "dark";
}

function EmailFieldWait(props: EmailFieldProps) {
  const { onClose, theme = "light" } = props;

  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSumitted, setIsSubmitted] = React.useState(false);

  const addWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const docRef = await addDoc(collection(db, "waitlists"), {
      email: email,
      date: getCurrentFormattedTime(),
    });
    setEmail("");
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <Fragment>
      {isSumitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 mb-2">
            <img
              className="w-[100%] h-[100%] object-contain"
              src="/images/congrats.svg"
              alt=""
            />
          </div>
          <p className="text-[13px] md:text-[16px] xl:text-[20px] font-medium mb-5 md:mb-8 text-[#072A49] ">
            You have been added to the Heynay waitlist!
          </p>
          {theme === "light" && (
            <button
              className="rounded-[50px] py-3 text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[22px] leading-[1] text-cyan-950 font-medium flex justify-center 
            items-center w-[95px] md:w-[148px] xl:w-[166px] 2xl:w-[207px] bg-[#7CCFFF]"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          )}
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
          onSubmit={addWaitlist}
          className="relative bg-white shadow-input flex justify-between rounded-full max-w-[549px] w-[100%] mx-auto xl:max-w-[619px] 2xl:max-w-[771px]"
        >
          <input
            className="pt-[13px] md:pt-[15px] xl:pt-[18px] 2xl:pt-[19px] pb-[13px] md:pb-[15px] xl:pb-[18px] 2xl:pb-[19px] pl-[20px] md:pl-[32px] xl:pl-[36px] 2xl:pl-[44px] 
            pr-[105px] md:pr-[155px] xl:pr-[170px] 2xl:pr-[215px] w-[100%] text-[12px] md:text-[16px] xl:text-[18px] 
            2xl:text-[22px] leading-[1] font-light placeholder:text-[#9CBACC] text-cyan-950"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            required
            autoComplete="off"
          />
          <button
            type="submit"
            className="absolute top-[3px] right-[3px] rounded-[50px] text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[22px] leading-[1] text-cyan-950 font-medium flex justify-center 
            items-center w-[95px] md:w-[148px] xl:w-[166px] 2xl:w-[207px] bg-[#7CCFFF]  h-[calc(100%-6px)] hover:bg-[#5DC4FF]"
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </button>
        </motion.form>
      )}
    </Fragment>
  );
}

export default EmailFieldWait;

function getCurrentFormattedTime(): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedTime = formatter.format(new Date());

  return formattedTime;
}

/* eslint-disable @next/next/no-img-element */
"use client";
import React, {Fragment} from "react";
import Button from "@/components/common/Button";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import firebaseConfig from "@/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface EmailFieldProps {
  onClose?: () => void;
  theme?: "light" | "dark";
}

function EmailField(props: EmailFieldProps) {
  const {onClose, theme = "light"} = props;

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
        <div className="flex flex-col items-center text-center">
          <img className="md:w-[60px]" src="/images/congrats.svg" alt="" />
          <p
            className={`text-4xl md:text-10xl font-medium mb-5 md:mb-8 ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            You have been added to the Heynay waitlist!
          </p>
          {theme === "light" && <Button onClick={onClose}>Close</Button>}
        </div>
      ) : (
        <form
          onSubmit={addWaitlist}
          className="bg-white shadow-lg flex justify-between rounded-full max-w-[300px] md:max-w-[644px] mx-auto"
        >
          <input
            className="md:placeholder:text-6xl placeholder:text-xs placeholder:font-light placeholder:text-gray-400 md:px-6 px-3 md:text-6xl text-xs flex-grow"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            required
            autoComplete="off"
          />

          <Button type="submit" size="small">
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      )}
    </Fragment>
  );
}

export default EmailField;

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

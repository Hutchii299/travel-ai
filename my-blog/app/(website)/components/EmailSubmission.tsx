"use client";

import { useState } from "react";
import * as EmailValidator from "email-validator";
import Skeleton from "./Skeleton";
import cn from "classnames";

export default function EmailSubmission() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState({
    type: "success",
    message: "Thank you for subscribing to our newsletter",
  });

  const handleEmailSubmission = async () => {
    if (!EmailValidator.validate(email)) return;
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 200) {
        //success
        setShowMessage(true);
        setMessageType({
          type: "success",
          message: "Thank you for subscribing to our newsletter",
        });
      } else {
        //failure
        setShowMessage(true);
        setMessageType({
          type: "fail",
          message:
            data.message === "ERROR_CONTACT_EXISTS"
              ? "You are already subscribed to our newsletter"
              : "Something went wrong. Please try again later",
        });
      }

      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setLoading(false);
      }
    }
  };

  return loading ? (
    <Skeleton height={36} className="mt-2" />
  ) : (
    <div>
      <div
        className={cn(
          "fixed bottom-0 sm:bottom-16 left-0 sm:left-1/2 sm:-translate-x-1/2 z-50 w-full sm:w-max transition sm:rounded-xl  dark:bg-white shadow-lg text-white dark:text-gray-900 py-3 px-4",
          { "pointer-events-auto opacity-100": showMessage },
          { "pointer-events-none opacity-0": !showMessage },
          { "bg-green-500": messageType.type === "success" },
          { "bg-red-500": messageType.type === "fail" }
        )}
      >
        <div className="grid grid-cols-[min-content_1fr] gap-x-4 items-center">
          <div
            className={cn(
              { "dark:text-green-500": messageType.type === "success" },
              { "dark:text-red-500": messageType.type === "fail" }
            )}
          >
            {messageType.type === "success" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            )}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold leading-none">
              {messageType.type === "success" ? "Subscribed!" : "Error!"}
            </p>
            <button
              type="button"
              className="inline-flex rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                setShowMessage(false);
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-white/80 dark:text-gray-500 col-start-2 mr-6">
            {messageType.message}
          </p>
        </div>
      </div>

      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(161 161 170)"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 outline-0"
            placeholder="your@email.com"
          />
        </div>
        <button
          type="button"
          onClick={handleEmailSubmission}
          className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 bg-blue-600 hover:bg-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

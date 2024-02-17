"use client";
import { useState } from "react";
import Toggle from "../components/Toggle";
import * as EmailValidator from "email-validator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Us`,
  description: `Write description here`,
  openGraph: {
    title: `Contact Us |${process.env.NEXT_PUBLIC_SITENAME} `,
    description: `Write description here`,
    url: `${process.env.NEXT_PUBLIC_URL}/contact`,
    siteName: `${process.env.NEXT_PUBLIC_SITENAME}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${process.env.NEXT_PUBLIC_SITENAME}`,
    description: `Write description here`,
  },
};

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    company: "",
  });
  const [validator, setValidator] = useState({
    firstName: true,
    lastName: true,
    email: true,
    message: true,
    privacy: true,
  });

  const onFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const checkEmptyString = (field: string) => {
    return field.trim() === "";
  };

  const checkIfAllValuesValid = (object: { [key: string]: boolean }) => {
    return Object.values(object).every((value) => value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newValidator = { ...validator };
    Object.entries(form).forEach(([key, value]) => {
      if (key !== "company") {
        if (checkEmptyString(value)) {
          // @ts-ignore
          newValidator[key] = false;
        } else {
          // @ts-ignore
          newValidator[key] = true;
        }
      }
    });
    if (!EmailValidator.validate(form.email)) {
      newValidator.email = false;
    }
    if (!agreed) {
      newValidator.privacy = false;
    } else {
      newValidator.privacy = true;
    }

    if (checkIfAllValuesValid(newValidator)) {
      // Submit form
      console.log(form);
      setValidator(newValidator);
    } else {
      setValidator(newValidator);
    }
  };

  return (
    <div className="isolate px-6  lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="tracking-tight ">Contact Us</h1>
        <p className="mt-2 text-lg leading-8 dark:text-white/80">
          Lets talk. Fill out the form below and we will get back to you as soon
          as we can.
        </p>
      </div>
      <form onSubmit={onFormSubmit} className="mx-auto mt-8 max-w-xl ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 "
            >
              First name*{" "}
              <span
                className={`text-red-500 ${
                  validator.firstName ? "hidden" : ""
                }`}
              >
                Required
              </span>
            </label>
            <div className="mt-2.5">
              <input
                onChange={onFormChange}
                type="text"
                name="firstName"
                value={form.firstName}
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:bg-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 "
            >
              Last name*{" "}
              <span
                className={`text-red-500 ${validator.lastName ? "hidden" : ""}`}
              >
                Required
              </span>
            </label>
            <div className="mt-2.5">
              <input
                onChange={onFormChange}
                type="text"
                name="lastName"
                value={form.lastName}
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:bg-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 "
            >
              Company{" "}
              <span className="text-gray-400 dark:text-white/70">
                (Optional)
              </span>
            </label>
            <div className="mt-2.5">
              <input
                onChange={onFormChange}
                type="text"
                name="company"
                value={form.company}
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:bg-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 "
            >
              Email*{" "}
              <span
                className={`text-red-500 ${validator.email ? "hidden" : ""}`}
              >
                Required
              </span>
            </label>
            <div className="mt-2.5">
              <input
                onChange={onFormChange}
                type="email"
                name="email"
                value={form.email}
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:bg-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 "
            >
              Message*{" "}
              <span
                className={`text-red-500 ${validator.message ? "hidden" : ""}`}
              >
                Required
              </span>
            </label>
            <div className="mt-2.5">
              <textarea
                onChange={onFormChange}
                name="message"
                id="message"
                value={form.message}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 dark:bg-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <Toggle
            text="By selecting this, you agree to our Privacy Policy*"
            enabled={agreed}
            onToggle={(selection) => setAgreed(selection)}
            isValid={validator.privacy}
          />
        </div>
        <div className="mt-10">
          <p
            className={`mb-2 text-red-500 ${
              checkIfAllValuesValid(validator) ? "hidden" : ""
            }`}
          >
            Please fix the highlighted values in the form and re-submit
          </p>
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

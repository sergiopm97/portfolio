import { useState } from "react";
import { useFormik } from "formik";
import { signUpValidation, signUpEmailError } from "../validation/signUp";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";

function Contact() {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  function sendEmail(contactData) {
    emailjs
      .send(
        "service_xrd91t3",
        "template_jfif8g5",
        contactData,
        import.meta.env.VITE_EMAILJS_API_KEY
      )
      .then((result) => {
        if (result) {
          setEmailSent(true);
          setSendingEmail(false);
        }
      });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      reason: "Job",
    },
    validationSchema: signUpValidation,
    validateOnChange: false,
    onSubmit: (values, actions) => {
      setSendingEmail(true);
      sendEmail(values);
      actions.resetForm({
        name: "",
        email: "",
        reason: "Job",
      });
    },
  });

  return (
    <div
      className="mt-[-8rem] mb-40 w-full pt-32 pl-5 pr-5 xs:pl-8 xs:pr-8 sm:pl-10 sm:pr-10 md:pl-16 md:pr-16 lg:pl-40 lg:pr-20"
      id="contact"
    >
      <motion.div
        className="mb-10 text-3xl xs:mb-16 xs:text-4xl lg:text-3xl xl:text-4xl"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-semibold text-std-white">
          <span className="mr-2 font-spaceMono font-normal text-std-green">
            3.
          </span>
          Contact
        </h1>
      </motion.div>
      <motion.div
        className="flex items-center justify-around rounded-2xl bg-dark-navy/[0.5] py-10 md:py-14"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <form
          className="flex w-11/12 flex-col gap-6 md:w-6/12"
          onSubmit={formik.handleSubmit}
        >
          <div className="relative flex flex-col gap-4">
            <label
              className="font-roboto text-xl text-std-white xs:text-2xl lg:text-xl xl:text-2xl"
              htmlFor="name"
            >
              Name
            </label>
            {formik.errors.name && (
              <span className="absolute right-0 bottom-12 font-spaceMono text-sm text-red-500 xs:text-base">
                Name is required
              </span>
            )}
            <input
              className={`h-10 border-[0.1rem] border-transparent ${
                formik.errors.name && "!border-red-500"
              } bg-dark-navy pl-3 text-std-white placeholder-std-slate transition-colors placeholder:font-roboto focus:border-std-white focus:outline-none`}
              id="name"
              name="name"
              placeholder="Your name..."
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="relative flex flex-col gap-4">
            <label
              className="font-roboto text-xl text-std-white xs:text-2xl lg:text-xl xl:text-2xl"
              htmlFor="email"
            >
              Email
            </label>
            {formik.errors.email && formik.errors.email != signUpEmailError && (
              <span className="absolute right-0 bottom-12 font-spaceMono text-sm text-red-500 xs:text-base">
                Email is required
              </span>
            )}
            {formik.errors.email == signUpEmailError && (
              <span className="absolute right-0 bottom-12 font-spaceMono text-sm text-red-500 xs:text-base">
                Use a valid email
              </span>
            )}
            <input
              className={`h-10 border-[0.1rem] border-transparent ${
                formik.errors.email && "!border-red-500"
              } bg-dark-navy pl-3 text-std-white placeholder-std-slate transition-colors placeholder:font-roboto focus:border-std-white focus:outline-none`}
              id="email"
              name="email"
              placeholder="Your email..."
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              className="font-roboto text-xl text-std-white xs:text-2xl lg:text-xl xl:text-2xl"
              htmlFor="reason"
            >
              Reason
            </label>
            <select
              className="h-10 border-[0.1rem] border-transparent bg-dark-navy pl-3 font-roboto text-std-white transition-colors focus:border-std-white focus:outline-none"
              id="reason"
              name="reason"
              onChange={formik.handleChange}
              value={formik.values.reason}
            >
              <option value="Job">Job</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mt-3 flex h-10 items-center justify-center gap-1 border-2 border-std-green font-spaceMono text-std-green transition-colors hover:bg-std-green/[0.1]">
            <button
              className={`${!sendingEmail && !emailSent && "h-full w-full"}`}
              type="submit"
            >
              {!sendingEmail && !emailSent && "Send"}{" "}
              {sendingEmail && "Sending email..."}
              {emailSent && "Email sent"}
            </button>
            {sendingEmail && <img className="w-5" src="spinner_loader.gif" />}
            {emailSent && <TiTick className="w-5 stroke-std-green" />}
          </div>
        </form>
        <div className="hidden w-4/12 justify-center md:flex">
          <img className="w-96" src="/email.gif" />
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;

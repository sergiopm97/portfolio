import { useFormik } from "formik";
import { signUpValidation, signUpEmailError } from "../validation/signUp";
import { motion } from "framer-motion";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      reason: "Job",
    },
    validationSchema: signUpValidation,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div
      className="w-full pt-32 mt-[-8rem] mb-40 lg:pl-40 md:pl-16 sm:pl-10 xs:pl-8 pl-5 lg:pr-20 md:pr-16 sm:pr-10 xs:pr-8 pr-5"
      id="contact"
    >
      <motion.div
        className="xl:text-4xl lg:text-3xl xs:text-4xl text-3xl xs:mb-16 mb-10"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-std-white font-semibold">
          <span className="mr-2 text-std-green font-spaceMono font-normal">3.</span>
          Contact
        </h1>
      </motion.div>
      <motion.div
        className="flex items-center justify-around rounded-2xl md:py-14 py-10 bg-dark-navy/[0.5]"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <form className="md:w-6/12 w-11/12 flex flex-col gap-6" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4 relative">
            <label
              className="xl:text-2xl lg:text-xl xs:text-2xl text-xl text-std-white font-roboto"
              htmlFor="name"
            >
              Name
            </label>
            {formik.errors.name && (
              <span className="right-0 bottom-12 xs:text-base text-sm absolute text-red-500 font-spaceMono">
                Name is required
              </span>
            )}
            <input
              className={`h-10 border-[0.1rem] border-transparent ${
                formik.errors.name && "!border-red-500"
              } text-std-white placeholder-std-slate placeholder:font-roboto pl-3 bg-dark-navy focus:outline-none focus:border-std-white transition-colors`}
              id="name"
              name="name"
              placeholder="Your name..."
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="flex flex-col gap-4 relative">
            <label
              className="xl:text-2xl lg:text-xl xs:text-2xl text-xl text-std-white font-roboto"
              htmlFor="email"
            >
              Email
            </label>
            {formik.errors.email && formik.errors.email != signUpEmailError && (
              <span className="right-0 bottom-12 xs:text-base text-sm absolute text-red-500 font-spaceMono">
                Email is required
              </span>
            )}
            {formik.errors.email == signUpEmailError && (
              <span className="right-0 bottom-12 xs:text-base text-sm absolute text-red-500 font-spaceMono">
                Use a valid email
              </span>
            )}
            <input
              className={`h-10 border-[0.1rem] border-transparent ${
                formik.errors.email && "!border-red-500"
              } text-std-white placeholder-std-slate placeholder:font-roboto pl-3 bg-dark-navy focus:outline-none focus:border-std-white transition-colors`}
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
              className="xl:text-2xl lg:text-xl xs:text-2xl text-xl text-std-white font-roboto"
              htmlFor="reason"
            >
              Reason
            </label>
            <select
              className="h-10 border-[0.1rem] border-transparent pl-3 text-std-white bg-dark-navy font-roboto focus:outline-none focus:border-std-white transition-colors"
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
          <button
            className="h-10 border-2 mt-3 text-std-green border-std-green font-spaceMono font-semibold hover:bg-std-green/[0.1] transition-colors"
            type="submit"
          >
            Send
          </button>
        </form>
        <div className="md:flex hidden justify-center w-4/12">
          <img className="w-96" src="/email.gif" />
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;

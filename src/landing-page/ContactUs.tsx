import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TrustedFormScript from "../components/TrustedFormScript";

type FormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  age: string;
  state: string;
  zipCode: string;
};

const ContactUs = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      age: "",
      state: "",
      zipCode: "",
    },
  });

  const [loading, setLoading] = useState(false);

//   const onSubmit: SubmitHandler<FormValues> = async (values) => {
//     setLoading(true);
//     try {
//       values.state = values.state;
//       const trustedFormUrl = (
//         document.getElementById("xxTrustedFormCertUrl") as HTMLInputElement
//       )?.value;
//       const APIURL =
//         "https://bb-backend-v1-648bba4d2433.herokuapp.com/api/v1/usdisability-new";

//       const formData = {
//         first_name: values.firstName,
//         last_name: values.lastName,
//         phone: values.phoneNumber,
//         email: values.email,
//         state: values.state,
//         zipcode: values.zipCode,
//         age: values.age,
//         trusted_form: trustedFormUrl,
//         submission_date: new Date().toLocaleString(),
//       };
// console.log("formData-----",formData);

//       const response = await fetch(APIURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`API call failed: ${response.status}`);
//       }

//       reset();
//       alert("Form Submitted Successfully");
//     } catch (error) {
//       console.log("______");
//       alert("Failed to submit the form. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);
const onSubmit: SubmitHandler<FormValues> = async (values) => {
  const trustedFormUrl = (
    document.getElementById("xxTrustedFormCertUrl") as HTMLInputElement
  )?.value;
  setLoading(true);
  try {
    // Prepare params for the second API (Retreaver)
    const params = new URLSearchParams({
      key: "7f67fee2-73d4-4f10-b827-71ee386fce62",
      caller_number: values.phoneNumber,
      first_name: values.firstName,
      last_name: values.lastName,
      age: values.age.toString(),
      caller_zip: values.zipCode,
      email: values.email,
      ipaddress: ipAddress, // You should get the user's IP address somehow
      state: values.state,
      jornaya_lead_id: trustedFormUrl, // Make sure this variable is available
      optin_timestamp: new Date().toISOString(),
    });

    const apiUrl = `https://retreaverdata.com/data_writing?${params.toString()}`;

    // Call the second API first
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Handle failure in calling the second API
    if (!response.ok) {
      throw new Error(`Retreaver API call failed: ${response.status}`);
    }

    // If the second API call is successful, proceed with the first API
    values.state = values.state;
    
    const APIURL =
      "https://bb-backend-v1-648bba4d2433.herokuapp.com/api/v1/usdisability-advocate";
  // "http://localhost:5001/api/v1/usdisability-advocate"

    const formData = {
      first_name: values.firstName,
      last_name: values.lastName,
      phone: values.phoneNumber,
      email: values.email,
      state: values.state,
      caller_zip: values.zipCode,
      age: values.age,
      trusted_form: trustedFormUrl,
      submission_date: new Date().toLocaleString(),
    };

    console.log("formData-----", formData);

    // Call the first API
    const apiResponse = await fetch(APIURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Handle failure in calling the first API
    if (!apiResponse.ok) {
      throw new Error(`API call failed: ${apiResponse.status}`);
    }

    // Reset the form and show success message
    reset();
    alert("Form Submitted Successfully");
  } catch (error) {
    console.log("Error occurred: ", error);
    alert("Failed to submit the form. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const states = [
    { name: "Alabama", short: "AL" },
    { name: "Washington", short: "DC" },
    { name: "Alaska", short: "AK" },
    { name: "Arizona", short: "AZ" },
    { name: "Arkansas", short: "AR" },
    { name: "California", short: "CA" },
    { name: "Colorado", short: "CO" },
    { name: "Connecticut", short: "CT" },
    { name: "Delaware", short: "DE" },
    { name: "Florida", short: "FL" },
    { name: "Georgia", short: "GA" },
    { name: "Hawaii", short: "HI" },
    { name: "Idaho", short: "ID" },
    { name: "Illinois", short: "IL" },
    { name: "Indiana", short: "IN" },
    { name: "Iowa", short: "IA" },
    { name: "Kansas", short: "KS" },
    { name: "Kentucky", short: "KY" },
    { name: "Louisiana", short: "LA" },
    { name: "Maine", short: "ME" },
    { name: "Maryland", short: "MD" },
    { name: "Massachusetts", short: "MA" },
    { name: "Michigan", short: "MI" },
    { name: "Minnesota", short: "MN" },
    { name: "Mississippi", short: "MS" },
    { name: "Missouri", short: "MO" },
    { name: "Montana", short: "MT" },
    { name: "Nebraska", short: "NE" },
    { name: "Nevada", short: "NV" },
    { name: "New Hampshire", short: "NH" },
    { name: "New Jersey", short: "NJ" },
    { name: "New Mexico", short: "NM" },
    { name: "New York", short: "NY" },
    { name: "North Carolina", short: "NC" },
    { name: "North Dakota", short: "ND" },
    { name: "Ohio", short: "OH" },
    { name: "Oklahoma", short: "OK" },
    { name: "Oregon", short: "OR" },
    { name: "Pennsylvania", short: "PA" },
    { name: "Rhode Island", short: "RI" },
    { name: "South Carolina", short: "SC" },
    { name: "South Dakota", short: "SD" },
    { name: "Tennessee", short: "TN" },
    { name: "Texas", short: "TX" },
    { name: "Utah", short: "UT" },
    { name: "Vermont", short: "VT" },
    { name: "Virginia", short: "VA" },
    { name: "Washington", short: "WA" },
    { name: "West Virginia", short: "WV" },
    { name: "Wisconsin", short: "WI" },
    { name: "Wyoming", short: "WY" },
  ];

  return (
    <div className="bg-[#A661A8] shadow-md p-6">
      <div className="flex flex-col items-center p-6">
        <div className="w-full max-w-2xl">
          <h1 className="text-white justify-center text-center py-10 text-4xl">
            <span>
              Apply Now - Fill the Following <br />
              Information
            </span>
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white text-gray-900 shadow-md rounded-lg p-6"
          >
            {/* First Name */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="firstName"
              >
                First Name. 
                <span className="text-red-500"> *</span>
              </label>
              <Controller
                control={control}
                name="firstName"
                rules={{ required: "First Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="firstName"
                    className={`w-full border rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-400 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } focus:border-gray-300 focus:ring-0 focus:outline-none`}
                    placeholder="Enter First Name"
                  />
                )}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="lastName"
              >
                Last Name
                <span className="text-red-500"> *</span>
              </label>
              <Controller
                control={control}
                name="lastName"
                rules={{ required: "Last Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="lastName"
                    className={`w-full border rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-400 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } focus:border-gray-300 focus:ring-0 focus:outline-none`}
                    placeholder="Enter Last Name"
                  />
                )}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="phoneNumber"
              >
                Phone Number
                <span className="text-red-500"> *</span>
              </label>
              <Controller
                control={control}
                name="phoneNumber"
                rules={{ required: "Phone Number is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="phoneNumber"
                    className={`w-full border rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-400 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } focus:border-gray-300 focus:ring-0 focus:outline-none`}
                    placeholder="Enter Phone Number"
                  />
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email Address
                <span className="text-red-500"> *</span>
              </label>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    id="email"
                    className={`w-full border rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-400 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } focus:border-gray-300 focus:ring-0 focus:outline-none`}
                    placeholder="Enter Email Address"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Age */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="age">
                Age
                <span className="text-red-500"> *</span>
              </label>
              <Controller
                control={control}
                name="age"
                rules={{ required: "Age is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="string"
                    id="age"
                    className={`w-full border rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-400 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } focus:border-gray-300 focus:ring-0 focus:outline-none`}
                    placeholder="Enter Age"
                  />
                )}
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.age.message}
                </p>
              )}
            </div>

            {/* State */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="state">
                State
                <span className="text-red-500"> *</span>
              </label>
              <Controller
                control={control}
                name="state"
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    id="state"
                    className={`w-full border rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-400 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } focus:border-gray-300 focus:ring-0 focus:outline-none`}
                  >
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state.short}>
                        {state.short}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>

            {/* Zip Code */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="zipCode"
              >
                Zip Code
                <span className="text-red-500"> *</span>
              </label>
              <Controller
                control={control}
                name="zipCode"
                rules={{ required: "Zip Code is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="zipCode"
                    className={`w-full border rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-400 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } focus:border-gray-300 focus:ring-0 focus:outline-none`}
                    placeholder="Enter Zip Code"
                  />
                )}
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.zipCode.message}
                </p>
              )}
            </div>
            <input
              type="hidden"
              name="xxTrustedFormCertUrl"
              id="xxTrustedFormCertUrl"
            />

            <p className="text-xs text-gray-900 mt-4">
              By clicking "Agree & Submit" below I am providing my ESIGN
              signature and express written consent agreement to ESP Inc., and parties calling on their behalf, to contact me at the
              number provided below for marketing purposes in order to provide
              brokerage services to connect me with a disability advocate. I
              understand that these calls and/or SMS/MMS messages include those
              using automated technology, AI generative voice, and prerecorded
              and/or artificial voice messages. I confirm that the phone number
              below is accurate, and I am the regular user of that phone. I also
              agree to ESP Inc Terms and Conditions and Privacy Policy. For SMS
              messages campaigns, text “STOP” to stop and “HELP” for help. Msg &
              data rates may apply. I acknowledge that my consent is not
              required to obtain any good or service, and to contact ESP Inc without
              providing consent I can call +1(773)683-3032.
            </p>

            <div className="flex w-full items-center justify-center bg-white py-8 rounded-bl-lg rounded-br-lg">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="loader"></span>
                ) : (
                  <>
                    <span>Agree & Submit</span>
                  </>
                )}
              </button>
            </div>
          </form>
          <TrustedFormScript />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

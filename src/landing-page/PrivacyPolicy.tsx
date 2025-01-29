import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <div
        className="relative py-20 text-center "
        style={{
          backgroundImage: `url('/tac.png')`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30%",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-70"
          style={{ zIndex: 1 }}
        ></div>

        <div className="relative z-10 text-white">
          <h1 className="text-[50px] text-bold text-white">Privacy Policy</h1>

          <h5 className="bg-pink-300 w-auto inline-block px-2 text-white mt-8">
          <Link to="/">yourdisabilityadvocate.com</Link> Privacy Policy
          </h5>
        </div>
      </div>

      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This privacy policy outlines how{" "}
          <a href="http://yourdisabilityadvocate.com" className="text-orange-500">
          yourdisabilityadvocate.com
          </a>{" "}
          handles personal information, including data collection, usage, and
          protection measures. The key points include:
        </p>

        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li className="leading-relaxed">
            <span className="font-semibold">Information Collection:</span>{" "}
            <a href="http://yourdisabilityadvocate.com" className="text-orange-500">
            yourdisabilityadvocate.com
            </a>{" "}
            collects personal information directly from users, such as name,
            address, and insurance details, as well as from third parties like
            consumer reporting agencies. Location data is only collected with
            user permission.
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold">Use of Information:</span>{" "}
            Information is used to process insurance policies, handle claims,
            and provide services. Email addresses may be used for marketing
            purposes, but users can opt-out.
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold">Third-Party Sharing:</span>{" "}
            Information may be shared with agents, service providers, and other
            entities involved in policy processing or claims. Third parties must
            safeguard this information, and{" "}
            <span className="font-semibold">yourdisabilityadvocate.com</span> does
            not sell personal information.
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold">California Residents:</span> In
            compliance with the California Consumer Privacy Act (CCPA),
            residents have the right to access, delete, and manage their
            personal information. Victimclaim.com ensures non-discriminatory
            practices for exercising these rights.
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold">Cookies and Internet Usage:</span>{" "}
            Cookies are used to enhance user experience on the website, and
            browsing data may be analyzed in anonymized form to improve
            services.
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold">Security Measures:</span>{" "}
            <span className="font-semibold">yourdisabilityadvocate.com</span>{" "}
            restricts access to personal information to authorized personnel and
            implements strong physical and digital security measures to protect
            user data.
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold">Policy Updates:</span>{" "}
            <span className="font-semibold">yourdisabilityadvocate.com</span> may
            update its privacy policy, with the latest version available on its
            website.
          </li>
        </ol>

        <p className="text-gray-700 leading-relaxed mt-6">
          For further concerns, users can contact{" "}
          <span className="font-semibold">yourdisabilityadvocate.com</span> through
          provided email and mailing addresses.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;

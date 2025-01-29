import { Link } from "react-router-dom";

const MarkeetingPartners = () => {
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
          <h1 className="text-[50px] text-bold text-white">
            Marketing Partners
          </h1>

          <h5 className="bg-pink-300 w-auto inline-block px-2 text-white mt-8">
            <Link to="/">yourdisabilityadvocate.com </Link>/ Marketing partners

          </h5>
        </div>
      </div>
      <div className="bg-gray-400 p-4">
        <h3 className="text-lg font-semibold mb-2">LIST OF PARTNERS:</h3>
        <ul className="list-disc ml-4">
          <li>ESP Incs Disability Services</li>
        </ul>
      </div>
    </>
  );
};

export default MarkeetingPartners;

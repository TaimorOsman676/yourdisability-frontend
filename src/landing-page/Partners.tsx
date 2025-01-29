import { Link } from "react-router-dom";

const partners = () => {
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
          <Link to="/">yourdisabilityadvocate.com</Link>/ Marketing Partners
          </h5>
        </div>
      </div>

      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          List of Partners
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li className="leading-relaxed">ESP Inc Services</li>
        </ul>ESP Inc


 
      </div>
    </>
  );
};

export default partners;

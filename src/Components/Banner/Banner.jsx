

export default function Banner({ handleClaimCredit }) {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-black md:rounded-3xl w-full h-full md:h-[35.5rem] mb-10"
      style={{ backgroundImage: `url(https://i.ibb.co/F5B1rQ8/bg-shadow.png)` }}
    >
      <div className="w-11/12 md:w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-4 py-6 md:space-y-6">
        <div>
          <img
            src="./banner-main.png"
            alt="Main Banner"
            className="w-9/12 md:w-auto mx-auto"
          />
        </div>
        <h1 className="font-bold text-2xl md:text-4xl text-white w-full md:w-11/12">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-sm md:text-lg font-normal text-white">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="text-base md:text-xl font-semibold">
          <button
            onClick={handleClaimCredit}
            className="btn btn-warning border-none px-4 py-2 md:px-6 md:py-3 rounded-lg"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}

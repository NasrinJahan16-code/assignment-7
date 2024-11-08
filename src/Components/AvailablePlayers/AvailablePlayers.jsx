export default function Available({ handleActiveStatus, isActive, choosePlayer }) {
  return (
    <div className="px-4 md:px-0 sticky top-14 bg-white z-100">
      <div className="flex flex-col md:flex-row justify-between items-center py-5 space-y-4 md:space-y-0 ">
        {/* sub title */}
        <h1 className="font-bold text-xl md:text-2xl text-center">
          {isActive.available ? "Available Players" : `Selected Player (${choosePlayer.length}/6)`}
        </h1>
        {/* buttons */}
        <div className="flex gap-3 md:gap-5">
          <button
            className={`btn ${isActive.available ? "bg-warning" : ""}`}
            onClick={() => handleActiveStatus('available')}
          >
            Available
          </button>
          <button
            className={`btn ${!isActive.available ? "bg-warning" : ""}`}
            onClick={() => handleActiveStatus('selected')}
          >
            Selected ({choosePlayer.length})
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function SelectedPlayers({ choosePlayer, handlePlayerDelete, handleActiveStatus }) {
  return (
    <div>
      {choosePlayer.map((player, index) => (
        <div className="p-4 rounded-lg border mb-2" key={index}>
          <div className="flex justify-between items-center">
            {/* Left side */}
            <div className="flex gap-5 items-center">
              <img
                src={player.image}
                className="w-16 h-16 rounded-md object-cover"
                alt={player.name}
              />
              <div>
                <h1 className="font-semibold text-lg">{player.name}</h1>
                <p className="text-sm">{player.role}</p>
                <p>
                  <small className="font-semibold">${player.price}</small>
                </p>
              </div>
            </div>
            {/* Right side */}
            <div className="flex items-center">
              <button onClick={() => handlePlayerDelete(player.playerId)}>
                <i className="fa-solid fa-trash text-xl text-red-400"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Button */}
      <div className="flex justify-center mt-4">
        <button
          className="btn bg-green-300"
          onClick={() => handleActiveStatus('available')}
        >
          Add More Player
        </button>
      </div>
    </div>
  );
}

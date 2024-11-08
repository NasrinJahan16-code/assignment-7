import React from "react";

export default function SinglePlayer({ player, handleChoosePlayer }) {
  const {
    name,
    country,
    image,
    role,
    battingType,
    bowlingType,
    price,
  } = player;

  return (
    <div className="card-compact border rounded-md p-2">
      <figure>
        <img
          src={image}
          alt="Player image"
          className="rounded-md"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          <div><i className="fa-solid fa-user text-xl"></i></div>
          <h2 className="card-title">{name}</h2>
        </div>
        <div className="flex justify-between">
          {/* Left div */}
          <div className="flex gap-2 items-center">
            <div><i className="fa-solid fa-flag"></i></div>
            <p>{country}</p>
          </div>
          {/* Right div */}
          <div className="bg-slate-100 rounded-md p-1">
            <p>{role}</p>
          </div>
        </div>
        <hr />
        <h2 className="font-bold">Rating</h2>
        <div className="flex justify-between">
          <h2 className="font-semibold">{battingType}</h2>
          <h2>{bowlingType}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Price: ${price}</h2>
          <button
            className="border rounded-md bg-slate-100 px-2 py-1 font-semibold hover:bg-green-300 transition-all"
            onClick={() => handleChoosePlayer(player)}
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import AllPlayers from "./Components/AllPlayers/AllPlayers";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coins, setCoins] = useState(0);
  // state for toggle buttons
  const [isActive, SetIsActive] = useState({
    available: true,
    status: "available",
  });
  //
  const handleMinusCoins = (price) => {
    setCoins(coins - price);
  };
  // money back function
  const handlePriceBack = (id) => {
    const player = choosePlayer.find((p) => p.playerId == id);
    setCoins(coins + player.price);
  }
  // state for chose player btn
  const [choosePlayer, setChoosePlayer] = useState([]);

  // player deleted function
  const handlePlayerDelete = (id) => {
    handlePriceBack(id);
    const remainingPlayers = choosePlayer.filter((p) => p.playerId !== id);
    setChoosePlayer(remainingPlayers);
    toast.warning('Player removed');
  };

  // credit claim function
  const handleClaimCredit = () => {
    const newCoins = coins +200000;
    setCoins(newCoins);
    toast.success('Credit Added to your Account');
  };
  // active button function
  const handleActiveStatus = (status) => {
    if (status == "available") {
      SetIsActive({
        available: true,
        status: "available",
      });
    } else {
      SetIsActive({
        available: false,
        status: "selected",
      });
    }
  };
  const handleChoosePlayer = (player) => {
    const isExist = choosePlayer.find((p) => p.playerId == player.playerId);

    if (isExist) {
      toast.error("Player already added");
    } else if (choosePlayer.length == 6) {
      toast.warning("you have added maximum players");
    } else if (player.price > coins) {
      toast.error("Not enough money to buy this player. Claim some credit");
    } else {
      handleMinusCoins(player.price);
      const newPlayer = [...choosePlayer, player];
      setChoosePlayer(newPlayer);
      toast.success(`Congrats!!!${player.name} is now in your squad`);
    }
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        {/* Navbar */}
        <Navbar coins={coins}></Navbar>
        {/* Banner */}
        <Banner handleClaimCredit={handleClaimCredit}></Banner>
        {/* Available Players */}
        <AvailablePlayers
          handleActiveStatus={handleActiveStatus}
          isActive={isActive}
          choosePlayer={choosePlayer}
        ></AvailablePlayers>
        {/*All Players*/}
        {isActive.available ? (
          <AllPlayers handleChoosePlayer={handleChoosePlayer}></AllPlayers>
        ) : (
          <SelectedPlayers
            choosePlayer={choosePlayer}
            handlePlayerDelete={handlePlayerDelete}
            handleActiveStatus={handleActiveStatus}
          ></SelectedPlayers>
        )}
      </div>
      <div className="max-w-screen-2xl mx-auto mt-36 md:mt-56">
        {/* Footer */}
        <Footer></Footer>
        <ToastContainer position="top-center" theme="colored"></ToastContainer>
      </div>
    </div>
  );
}

export default App;

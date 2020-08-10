import React from "react";

const Player = ({ label, player, setPlayer }) => (
  <div className="row">
    <label htmlFor={label}>{label}</label>
    <input type="text" id={label} value={player} onChange={setPlayer} />
  </div>
);

export default Player;
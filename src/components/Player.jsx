import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditMode() {
    setIsEditing((editing) => !editing); // best practice instead of just !isEditing
  }

  function handleChangue(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" required value={playerName} onChange={handleChangue} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditMode}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

import React from "react";

const App = () => {
  const names = ["Eria", "cyber", "jackson"];
  const isloggedIn = true;

  return (
    <>
      <h3>Below are the names</h3>
      <p>
        {names.map((name) => (
          <p key={name}>{name}</p>
        ))}
      </p>
      <h2>{isloggedIn ? "Hey members" : "Ai aint logged in"}</h2>
    </>
  );
};

export default App;

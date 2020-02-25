import React, { useState } from "react";

import { Button, OtherButton } from "./Buttons";

function App() {
  const [logged, setLogged] = useState(false);

  const Banner = logged ? <div>Loggeado</div> : <div>Desloggeado</div>;

  return (
    <div className="App">
      {Banner}
      <Button
        onClick={() => {
          setLogged(!logged);
        }}
      >
        Que pex raza
      </Button>
      <OtherButton
        onClick={() => {
          setLogged(!logged);
        }}
      >
        Que pex raza
      </OtherButton>
    </div>
  );
}

export default App;

import React from "react";
import MyRoutes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <div style={{ margin: "30px" }}>
        <GlobalProvider>
          <MyRoutes />
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;

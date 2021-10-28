import React from "react";
import AddRecPages from "./Pages/AddRecPages";
import LoginPages from "./Pages/LoginPages";
import RecDetailPage from "./Pages/RecDetailPage";
import RecListPages from "./Pages/RecListPages";
import SignListPages from "./Pages/SignListPages";

const App = () => {
  return (
    <div>
      <AddRecPages />
      <LoginPages />
      <RecDetailPage />
      <RecListPages />
      <SignListPages />
    </div>
  )
};
export default App

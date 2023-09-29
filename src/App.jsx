// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import CreateAnOrganization from "./pages/CreateAnOrganization";
import EmailVerification from "./pages/EmailVerification";
import InvitePage from "./pages/InvitePage";
import SetupAccount from "./pages/SetupAccount";
import SetupOrganizationLunchPrice from "./pages/SetupOrganizationLunchPrice";
import SplashScreen from "./pages/SplashScreen";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <ContainerWrapper>
      <SplashScreen />
      <Welcome />
      <CreateAnOrganization />
      <SetupAccount />
      <EmailVerification />
      <InvitePage />
      <SetupOrganizationLunchPrice />
    </ContainerWrapper>
  );
}

// eslint-disable-next-line react/prop-types
function ContainerWrapper({ children }) {
  return <div className="px-12 py-12 mx-auto font-Lato">{children}</div>;
}

export default App;

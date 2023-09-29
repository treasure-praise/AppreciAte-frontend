import Logo from "../assets/logo.svg";

function SplashScreen() {
  return (
    <div className="h-screen bg-PrimaryPurple w-full flex   items-center justify-center ">
      <img src={Logo} alt="" />
    </div>
  );
}

export default SplashScreen;

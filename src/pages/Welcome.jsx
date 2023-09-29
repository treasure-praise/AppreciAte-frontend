import Button from "../components/Button";
import Landing from "../assets/landing.svg";
function Welcome() {
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-PrimaryPurple text-3xl pt-8 pb-4 font-bold">
        Welcome to Appreciate
      </h1>
      <h3 className="text-Gray mb-20">Gift employees and co-workers</h3>
      <img src={Landing} alt="" />
      <Button>Create your organization</Button>
      <Button btnType="transparent">Join an existing organization</Button>
      <a className="text-PrimaryPurple my-2">Sign into your Organization</a>
    </div>
  );
}

export default Welcome;

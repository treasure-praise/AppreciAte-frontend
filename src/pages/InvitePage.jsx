import Button from "../components/Button";
import Header from "../components/Header";

const InvitePage = () => {
  return (
    <div>
      <Header
        mainText={"Who else is on the PricewaterhouseCoopers Ltd team?"}
        supportText={"Invite your employees"}
      />
      <Button>Share Invite Code</Button>
      <Button btnType={"transparent"}>Add by email</Button>
    </div>
  );
};

export default InvitePage;

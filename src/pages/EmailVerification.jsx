import Header from "../components/Header";
import EmailSent from "../assets/EmailSent.svg";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const EmailVerification = () => {
  return (
    <div>
      <Header
        mainText={"We’ve sent a verification code to your email address"}
      />
      <img src={EmailSent} alt="Email Sent" />
      <FormInput label={"Enter Code"} />
      <Button>Verify</Button>
    </div>
  );
};

export default EmailVerification;

import Button from "../components/Button";
import FormInput from "../components/FormInput";
import Header from "../components/Header";

const SetupAccount = () => {
  return (
    <div>
      <div className="border-b pb-8">
        <Header
          mainText={"Setup your account"}
          supportText={"Wealth Paradigm Ltd."}
        />
        <FormInput label={"Enter your Email Address"} />
        <FormInput label={"First Name"} />
        <FormInput label={"Last Name"} />
        <FormInput label={"Passowrd"} />
        <FormInput label={"Confirm Passowrd"} />

        <Button>Next</Button>
      </div>
      <p className="text-Grey font-medium my-2">
        Want to join an exisiting Organization?{" "}
      </p>
    </div>
  );
};

export default SetupAccount;

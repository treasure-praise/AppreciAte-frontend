import Button from "../components/Button";
import FormInput from "../components/FormInput";
import Header from "../components/Header";

const SetupOrganizationLunchPrice = () => {
  return (
    <>
      <div className="border-b pb-8">
        <Header
          mainText={"Set organization lunch price"}
          supportText={"PricewaterhouseCoopers Ltd."}
        />
        <FormInput
          label={"Enter lunch price"}
          text={"This is the amount per lunch at your organization"}
          placeholder={"0.00"}
        />
        <Button>Create Organization</Button>
      </div>
      <p className="text-Grey text-xs font-medium my-2">
        By continuing, you’re agreeing to the app{" "}
        <span>
          user terms of service, privacy policy, cookie policy, and AppreciAte
          supplemental terms.
        </span>{" "}
      </p>
    </>
  );
};

export default SetupOrganizationLunchPrice;

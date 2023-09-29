import Button from "../components/Button";
import FormInput from "../components/FormInput";
import Header from "../components/Header";

const CreateAnOrganization = () => {
  return (
    <>
      <div className="border-b pb-8">
        <Header mainText={" Create an Organization"} />

        <FormInput
          label={"Enter your Organization Name"}
          placeholder={"e.g Wealth Paradigm"}
          text={"This is the name that would appear to your employees"}
        />
        <Button>Next</Button>
      </div>
      <p className="text-Grey font-medium my-2">
        Want to join an exisiting Organization?{" "}
      </p>
      <p className="flex items-center  gap-2">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.71441 0.259157C6.16578 -0.0863857 6.79315 -0.0863857 7.24452 0.259157L12.6026 4.35492C13.285 4.87647 12.919 5.96493 12.0616 5.96925H0.896252C0.0399533 5.96493 -0.327186 4.87647 0.356341 4.35492L5.71441 0.259157ZM6.47893 4.07956C6.69372 4.07956 6.89971 3.99424 7.05159 3.84236C7.20347 3.69048 7.28879 3.48449 7.28879 3.2697C7.28879 3.05491 7.20347 2.84892 7.05159 2.69704C6.89971 2.54516 6.69372 2.45983 6.47893 2.45983C6.26414 2.45983 6.05815 2.54516 5.90627 2.69704C5.75439 2.84892 5.66906 3.05491 5.66906 3.2697C5.66906 3.48449 5.75439 3.69048 5.90627 3.84236C6.05815 3.99424 6.26414 4.07956 6.47893 4.07956ZM1.61973 7.04907V10.2885H3.23946V7.04907H1.61973ZM4.31928 7.04907V10.2885H5.93902V7.04907H4.31928ZM7.01884 7.04907V10.2885H8.63857V7.04907H7.01884ZM9.71839 7.04907V10.2885H11.3381V7.04907H9.71839ZM0 12.7181C0 11.9731 0.6047 11.3684 1.34978 11.3684H11.6081C12.3532 11.3684 12.9579 11.9731 12.9579 12.7181V12.9881C12.9579 13.1313 12.901 13.2686 12.7997 13.3699C12.6985 13.4711 12.5611 13.528 12.4179 13.528H0.539911C0.396717 13.528 0.259389 13.4711 0.158136 13.3699C0.0568834 13.2686 0 13.1313 0 12.9881V12.7181Z"
            fill="black"
          />
        </svg>
        Join with company invite code
      </p>
    </>
  );
};

export default CreateAnOrganization;

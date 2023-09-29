// eslint-disable-next-line react/prop-types
const Button = ({ children, btnType }) => {
  const styling = `px-4 py-2 w-full rounded-md my-2 ${
    btnType == "transparent"
      ? " border-[#55516D] text-[#55516D]"
      : "bg-PrimaryPurple text-white"
  }`;
  return <button className={styling}>{children}</button>;
};

export default Button;

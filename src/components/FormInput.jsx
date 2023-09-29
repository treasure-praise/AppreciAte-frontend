// eslint-disable-next-line react/prop-types
const FormInput = ({ label, placeholder, text }) => {
  return (
    <div className="w-full mt-2">
      <label
        className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
        placeholder={placeholder}
      />
      {text && <p className="text-gray-800 text-xs my-2">{text}</p>}
    </div>
  );
};

export default FormInput;

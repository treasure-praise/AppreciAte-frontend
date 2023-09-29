// eslint-disable-next-line react/prop-types
const Header = ({ mainText, supportText }) => {
  return (
    <div className="mb-8">
      <h1 className="text-PrimaryPurple text-3xl pt-8 mb-3 font-bold">
        {mainText}
      </h1>
      {supportText && <h3 className="text-Gray mb-8">{supportText}</h3>}
    </div>
  );
};

export default Header;

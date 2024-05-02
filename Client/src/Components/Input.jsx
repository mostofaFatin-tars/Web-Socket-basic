// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, value, onChange, name }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
        name={name}
      />
    </>
  );
};

export default Input;

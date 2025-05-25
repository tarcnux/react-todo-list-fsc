function Input({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-slate-300 px-4 py-2 rounded-md outline-slate-400 ${className}`}
    />
  );
}

export default Input;

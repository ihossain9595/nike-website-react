const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : `bg-coral-red  text-white border-coral-red`}
    `}
    >
      {label} {iconUrl && <img src={iconUrl} alt="Right arrow icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;

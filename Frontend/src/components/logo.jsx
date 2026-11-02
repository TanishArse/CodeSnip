function Logo({ className = "h-9 w-9" }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="8" className="fill-blue-600" />
      <path
        d="M14 12l-6 6 6 6M22 12l6 6-6 6"
        className="stroke-white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Logo;
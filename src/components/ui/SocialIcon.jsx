
const icons = {
  facebook: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.7v3h2.7v8h3.1Z" />
    </svg>
  ),

  twitter: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-6.5L6.2 22H3.1l7.2-8.3L2.8 2h6.4l4.5 5.9L18.9 2Zm-1.1 17.9h1.7L8.3 3.9H6.5l11.3 16Z" />
    </svg>
  ),

  linkedin: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 8.2H3.2V21h3.3V8.2ZM4.9 3A2 2 0 1 0 4.9 7a2 2 0 0 0 0-4ZM21 13.7c0-3.8-2-5.7-4.8-5.7-2.2 0-3.2 1.2-3.8 2v-1.8H9.1V21h3.3v-6.3c0-1.7.3-3.4 2.5-3.4 2.2 0 2.2 2 2.2 3.5V21h3.3l.1-7.3Z" />
    </svg>
  ),

  instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
};

export default function SocialIcon({
  platform,
  href,
  label,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || platform}
      className="text-white hover:text-primary rounded-full bg-secondary px-2 py-2"
    >
      <span className="block h-5 w-5">
        {icons[platform]}
      </span>
    </a>
  );
}


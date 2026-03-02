import Image from "next/image";

const providers = [
  {
    name: "Google",
    icon: "/google.svg",
    label: "Continue with Google",
  },
  {
    name: "Apple",
    icon: "/apple.svg",
    label: "Continue with Apple",
  },
];

export default function SocialProviders() {
  return (
    <div className="flex flex-col gap-3">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-light-300 px-4 py-3 text-body-medium text-dark-900 transition-colors hover:bg-light-200"
          aria-label={provider.label}
        >
          <Image
            src={provider.icon}
            alt={provider.name}
            width={20}
            height={20}
          />
          {provider.label}
        </button>
      ))}
    </div>
  );
}

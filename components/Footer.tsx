import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-32 bg-purple-300 flex items-center justify-center">
      <Link
        href="https://github.com/ccclucky/print-client/issues"
        className="font-bold text-base"
        target="_blank"
      >
        issues
      </Link>
    </div>
  );
}

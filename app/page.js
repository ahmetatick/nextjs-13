import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about-us">About Us</Link>
      <br />
      <Link href="/docs/post-1">Post 1</Link>
      <br />
      <Link href="/docs/post-1/post-2">Post 2</Link>
      <br />
      <Link
        target="_blank"
        className="test"
        href={{
          pathname: "/about-us",
          query: {
            name: "Next.js",
            surname: "ff",
          },
        }}
      >
        About Us with object
      </Link>
      <br />
      <br />
    </div>
  );
}

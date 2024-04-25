import Image from "next/image";

const navRoutes = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "First Blog", href: "/blog/first" },
  { name: "Second Blog", href: "/blog/second" },
];

export default function Home() {
  const mp = navRoutes.map((item, index) => {
    return (
      <li key={index} className="hover:bg-slate-500 cursor-pointer p-3 rounded">
        <a href={item.href}>{item.name}</a>
      </li>
    );
  });
  return (
    <main>
      <nav className="w-full bg-gray-300 p-5 justify-center text-center">
        <ul className="flex gap-10 ">{mp}</ul>
      </nav>
      <h1>Home Route</h1>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <nav className="flex justify-between bg-slate-800 p-4">
        <div>
          <Image src="https://placehold.co/70.png" alt="logo" width={70} height={70} />
        </div>
        <ul className="flex gap-4 items-center text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>


      <h1>Home</h1>
      <p>Welcome to your Next.js site!</p>
      <h1 className="text-white text-xl">Welcome to our site</h1>
      <button className="bg-gray-800 text-white rounded-sm px-3 py-2">Sign Up</button>
    </div>
  );
}

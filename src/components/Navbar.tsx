import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropNavVisible, setIsDropNavVisible] = useState(false);
  const [isInducted, setIsInducted] = useState(false);

  return (
    <div className="font-audiowide z-50">
      <div className="flex justify-between px-10 fixed top-0 w-full h-[5rem] border-b-2 border-neutral-900 items-center text-white backdrop-blur-2xl z-50 bg-black">
        <Link to="/">
          <img src="../../logo.png" alt="logo" className="w-[4rem]" />
        </Link>
        <div className="flex items-center gap-15 [@media(max-width:776px)]:hidden">
          <Link
            to="/"
            className="text-xl font-semibold text-neutral-300 hover:text-white cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-xl font-semibold text-neutral-300 hover:text-white cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="/team"
            className="text-xl font-semibold text-neutral-300 hover:text-white cursor-pointer"
          >
            Team
          </Link>
          <div className="text-xl font-semibold text-neutral-300 hover:text-white cursor-pointer">
            Events
          </div>
        </div>
        <button
          className="text-lg border-2 border-[#AB1CD9] px-4 py-1 rounded-3xl text-[#cb65ed] [@media(max-width:776px)]:hidden cursor-pointer duration-200 font-semibold"
          onClick={() => {
            setIsInducted(true);
          }}
        >
          Induct me
        </button>
        <button
          className="[@media(min-width:776px)]:hidden cursor-pointer duration-300"
          onClick={() => {
            setIsDropNavVisible((prev) => !prev);
            setIsInducted(true);
          }}
        >
          {isDropNavVisible ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isDropNavVisible && (
        <div className="h-screen [@media(min-width:776px)]:hidden z-80 bg-transparent backdrop-blur-2xl flex flex-col items-center justify-center gap-10 text-white inset-0 fixed top-[4.3rem] overflow-none">
          <div className="gap-8 flex flex-col items-center justify-center">
            <Link
              to="/"
              className="text-xl font-semibold text-neutral-300 hover:text-white cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-xl font-semibold text-neutral-300 hover:text-white cursor-pointer"
            >
              About us
            </Link>
            <Link
              to="/team"
              className="text-xl font-semibold text-neutral-300 hover:text-white cursor-pointer"
            >
              Team
            </Link>
            <div className="text-2xl font-semibold text-neutral-300 hover:text-white cursor-pointer">
              Events
            </div>
            <button
              className="text-lg border-2 border-[#AB1CD9] px-4 py-1 rounded-3xl text-[#cb65ed] cursor-pointer"
              onClick={() => {
                setIsDropNavVisible(false);
                setIsInducted(true);
              }}
            >
              Induct me
            </button>
          </div>
        </div>
      )}

      {!!isInducted && (
        <div className="fixed w-screen h-screen backdrop-blur-2xl z-50 flex flex-col items-center justify-ceter text-white gap-5 text-center">
          <h1 className="text-3xl mt-30">Thank you for inducting me 😃</h1>
          <h2 className="text-xl text-neutral-300">
            Glad to be a part of WEBWIZ NITR
          </h2>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/ayantiksarkar/"
              target="_blank"
            >
              <Linkedin className="stroke-neutral-400 hover:stroke-white" />
            </a>
            <a href="https://github.com/ayantik2006" target="_blank">
              <Github className="stroke-neutral-400 hover:stroke-white" />
            </a>
          </div>
          <form
            action="https://api.staticforms.dev/submit"
            method="POST"
            className="flex flex-col gap-3"
          >
            <input type="hidden" name="apiKey" value="sf_a5d8ancfkdacn74di8e5cg7a" />
            <input type="hidden" name="redirectTo" value="/" />
            <input
              type="email"
              className="border-2 border-[#7223da] px-2 pl-3 py-1 rounded-lg font-sans outline-none w-[18rem]"
              name="email"
              placeholder="Your email"
              required
            />
            <input
              type="name"
              className="border-2 border-[#7223da] px-2 pl-3 py-1 rounded-lg font-sans outline-none w-[18rem]"
              name="name"
              placeholder="Your name"
              required
            />
            <textarea
              className="border-2 border-[#7223da] px-2 pl-3 py-1 rounded-lg font-sans outline-none w-[18rem]"
              name="message"
              placeholder="Message"
              required
            />
            <button
              className="border-2 px-3 mt-8 border-neutral-400 cursor-pointer hover:opacity-70"
              type="submit"
            >
              Send
            </button>
          </form>
          <button
            className="border-2 px-3 mt-8 border-neutral-400 cursor-pointer hover:opacity-70"
            onClick={() => {
              setIsInducted(false);
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

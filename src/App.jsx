import { useState } from "react";
import "./App.css";
import patternDividerMobile from "./assets/pattern-divider-mobile.svg";
import patternDividerDesktop from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";

function App() {
  const [quote, setQuote] = useState();
  const [id, setId] = useState();

  const adviceGenerator = async function () {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(res);
    console.log(data);
    console.log(data.slip);
    setQuote(data.slip.advice);
    setId(data.slip.id);
  };

  const data = adviceGenerator;

  return (
    <div className="bg-dark-grayish-blue font-manrope text-lg container rounded-xl w-72 md:w-112 h-80 relative">
      <h2 className="text-neon-green uppercase text-sm pt-8 font-manrope tracking-widest font-medium">
        Advice #<span>{id}</span>
      </h2>
      {/* <blockquote className="text-light-cyan text-xl text- font-extrabold my-10 px-5 blockquo">
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action."
      </blockquote> */}
      <blockquote className="text-light-cyan text-xl text- font-extrabold my-10 px-5">
        "{quote}"
      </blockquote>

      <div className="flex item-center justify-center">
        <img src={patternDividerMobile} alt="" className="w-64 md:hidden" />
        <img
          src={patternDividerDesktop}
          alt=""
          className="w-96 hidden md:block"
        />
      </div>
      <div className="flex item-center justify-center">
        <button
          className="rounded-[50%] bg-neon-green absolute top-[300px] active: bg-neon-green focus:outline-none focus:border-none hover:shadow-neon-green-500/40"
          onClick={adviceGenerator}
        >
          <img src={dice} alt="" />
        </button>
      </div>
    </div>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;

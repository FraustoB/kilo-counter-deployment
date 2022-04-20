import "./App.css";
import { BaseContainer } from "./components/baseContainer";

function App() {
  return (
    <div
      className="flex items-center justify-center sm:justify-none flex-col bg-stone-800 text-white h-screen 
    w-screen "
    >
      <h1 className="md:text-6xl text-4xl font-bold underline mt-4 mb-5 italic ">
        KILO-CALCULATOR
      </h1>
      <div className="flex flex-col items-center  bg-stone-600 rounded-lg  md:h-11/12  ">
        <BaseContainer />
      </div>

      <a
        href="https://frausto.dev/"
        className="text-indigo-300 text-xl font-bold "
      >
        frausto.dev
      </a>
    </div>
  );
}

export default App;

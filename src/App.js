import "./App.css";
import { BaseContainer } from "./components/baseContainer";

function App() {
  return (
    <div className="flex items-center justify-center flex-col bg-stone-800 text-white h-screen w-screen md:w-auto">
      <h1 className="md:text-6xl text-4xl font-bold underline mt-4 mb-10 italic ">
        KILO-CALCULATOR
      </h1>
      <div className="flex flex-col items-center bg-stone-600 rounded-lg h-4/6 md:h-full ">
        <BaseContainer />
      </div>
      <p className="mt-5 text-lg">coded by Brandon Shin Frausto</p>
      <a href="https://frausto.dev/" className="text-indigo-300 text-xl">
        frausto.dev
      </a>
    </div>
  );
}

export default App;

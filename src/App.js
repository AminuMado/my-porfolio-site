import "./App.css";
import Switcher from "./switcher";

function App() {
  return (
    <div className="ransition duration-1000 ease-out bg-blue-300 dark:bg-slate-700">
      <h1 className="text-3xl bg-slate-400 font-bold underline">
        Hello world!
      </h1>
      <Switcher />
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer";
import Switcher from "./switcher";

function App() {
  return (
    <div className="transition duration-1000 ease-out bg-blue-300 dark:bg-slate-700">
      <h1 className="text-3xl bg-slate-400 font-bold underline">
        Hello world!
      </h1>
      <Switcher />
      <Footer />
    </div>
  );
}

export default App;

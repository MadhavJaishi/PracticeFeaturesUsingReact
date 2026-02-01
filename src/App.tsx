import { HashRouter, Routes, Route } from "react-router-dom";
import CounterWithUndoRedo from "./components/CounterWithUndoRedo";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="bg-zinc-800 h-full">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterWithUndoRedo />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

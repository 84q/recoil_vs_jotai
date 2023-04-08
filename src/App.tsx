import { RecoilRoot } from "recoil";
import "./App.css";
import JotaiSample from "./JotaiSample";
import RecoilSample from "./RecoilSample";

function App() {
  return (
    <div className="App">
      <JotaiSample />
      <RecoilRoot>
        <RecoilSample />
      </RecoilRoot>
    </div>
  );
}

export default App;

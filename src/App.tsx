import { RecoilRoot } from "recoil";
import "./App.css";
import JotaiAsyncSample from "./JotaiAsyncSample";
import JotaiSyncSample from "./JotaiSyncSample";
import RecoilSample from "./RecoilSample";

function App() {
  return (
    <div className="App">
      <JotaiSyncSample />
      <JotaiAsyncSample />
      <RecoilRoot>
        <RecoilSample />
      </RecoilRoot>
    </div>
  );
}

export default App;

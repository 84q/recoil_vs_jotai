import { atom, useAtomValue, useSetAtom } from "jotai";
import { FC, Suspense } from "react";

const count1Atom = atom(
  (async () => {
    return 0;
  })()
);
const count10Atom = atom(async (get) =>
  Math.floor((await get(count1Atom)) / 10)
);

const Count1: FC = () => {
  const count1 = useAtomValue(count1Atom);
  return <div>count1 : {count1}</div>;
};

const Count10: FC = () => {
  console.log("Jotai : Count10 called");
  const count10 = useAtomValue(count10Atom);
  return <div>count10 : {count10}</div>;
};

const CountUp: FC = () => {
  const setCount1 = useSetAtom(count1Atom);
  return (
    <button onClick={() => setCount1(async (n) => (await n) + 1)}> +1 </button>
  );
};

const Fallback: FC = () => {
  console.log("Jotai : Fallback called");
  return <div>Loading...</div>;
};

const JotaiSample: FC = () => {
  return (
    <div>
      <h2>Jotai</h2>
      <Suspense fallback={<Fallback />}>
        <Count1 />
        <Count10 />
        <CountUp />
      </Suspense>
    </div>
  );
};

export default JotaiSample;

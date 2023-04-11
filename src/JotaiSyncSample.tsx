import { atom, useAtomValue, useSetAtom } from "jotai";
import { FC, Suspense, useEffect } from "react";

const count1Atom = atom(-1);

const count10Atom = atom((get) => Math.floor(get(count1Atom) / 10));

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
  return <button onClick={() => setCount1((n) => n + 1)}> +1 </button>;
};

const Fallback: FC = () => {
  console.log("Jotai : Fallback called");
  return <div>Loading...</div>;
};

const JotaiSyncSample: FC = () => {
  const setCount1 = useSetAtom(count1Atom);
  useEffect(() => {
    (async () => {
      setCount1(0);
    })();
  }, []);

  return (
    <div>
      <h2>Jotai(Sync)</h2>
      <Suspense fallback={<Fallback />}>
        <Count1 />
        <Count10 />
        <CountUp />
      </Suspense>
    </div>
  );
};

export default JotaiSyncSample;

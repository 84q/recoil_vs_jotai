import { FC, Suspense } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const count1Atom = atom({
  key: "count",
  default: (async () => {
    return 0;
  })(),
});

const count10Atom = selector({
  key: "count10",
  get: ({ get }) => Math.floor(get(count1Atom) / 10),
});

const Count1: FC = () => {
  const count1 = useRecoilValue(count1Atom);
  return <div>count1 : {count1}</div>;
};

const Count10: FC = () => {
  console.log("Recoil : Count10 called");
  const count10 = useRecoilValue(count10Atom);
  return <div>count10 : {count10}</div>;
};

const CountUp: FC = () => {
  const setCount1 = useSetRecoilState(count1Atom);
  return <button onClick={() => setCount1((n) => n + 1)}> +1 </button>;
};

const Fallback: FC = () => {
  console.log("Recoil : Fallback called");
  return <div>Loading...</div>;
};
const RecoilSample: FC = () => {
  return (
    <div>
      <h2>Recoil</h2>
      <Suspense fallback={<Fallback />}>
        <Count1 />
        <Count10 />
        <CountUp />
      </Suspense>
    </div>
  );
};

export default RecoilSample;

"use client";

import { useCounterStore } from "../store/counterStore";
import CounterCard from "./Countercard";
const CounterList = () => {
  const counters = useCounterStore(
    (state) => state.counters
  );

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {counters.map((counter) => (
        <CounterCard
          key={counter.id}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default CounterList;
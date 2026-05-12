"use client";


import { useCounterStore } from "../store/counterStore";
import { Counter } from "../types/counter";

type Props = {
  counter: Counter;
};

const CounterCard = ({ counter }: Props) => {
  const increment = useCounterStore(
    (state) => state.increment
  );

  const decrement = useCounterStore(
    (state) => state.decrement
  );

  const resetCounter = useCounterStore(
    (state) => state.resetCounter
  );

  return (
    <div className="border p-6 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">
        {counter.count}
      </h2>

      <div className="flex gap-3">
        <button
          onClick={() => increment(counter.id)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          +
        </button>

        <button
          onClick={() => decrement(counter.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          -
        </button>

        <button
          onClick={() => resetCounter(counter.id)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterCard;
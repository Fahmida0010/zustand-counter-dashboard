"use client";


import CounterList from "@/src/components/CounterList";
import Navbar from "@/src/components/Navbar";
import { useCounterStore } from "@/src/store/counterStore";


export default function Home() {
  const counters = useCounterStore(
    (state) => state.counters
  );

  const addCounter = useCounterStore(
    (state) => state.addCounter
  );

  const resetAll = useCounterStore(
    (state) => state.resetAll
  );

  const total = counters.reduce(
    (sum, counter) => sum + counter.count,
    0
  );

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <Navbar total={total} />

      <div className="flex gap-4 mb-6">
        <button
          onClick={addCounter}
          className="bg-blue-500 text-white px-5 py-3 rounded-xl"
        >
          Add Counter
        </button>

        <button
          onClick={resetAll}
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          Reset All
        </button>
      </div>

      <CounterList/>
    </main>
  );
}
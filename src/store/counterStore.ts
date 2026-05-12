import { create } from "zustand";
import { Counter } from "@/types/counter";

type CounterStore = {
  counters: Counter[];

  increment: (id: number) => void;
  decrement: (id: number) => void;

  addCounter: () => void;

  resetCounter: (id: number) => void;

  resetAll: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  counters: [
    { id: 1, count: 0 },
  ],

  increment: (id) =>
    set((state) => ({
      counters: state.counters.map((counter) =>
        counter.id === id
          ? { ...counter, count: counter.count + 1 }
          : counter
      ),
    })),

  decrement: (id) =>
    set((state) => ({
      counters: state.counters.map((counter) =>
        counter.id === id
          ? { ...counter, count: counter.count - 1 }
          : counter
      ),
    })),

  addCounter: () =>
    set((state) => ({
      counters: [
        ...state.counters,
        {
          id: Date.now(),
          count: 0,
        },
      ],
    })),

  resetCounter: (id) =>
    set((state) => ({
      counters: state.counters.map((counter) =>
        counter.id === id
          ? { ...counter, count: 0 }
          : counter
      ),
    })),

  resetAll: () =>
    set((state) => ({
      counters: state.counters.map((counter) => ({
        ...counter,
        count: 0,
      })),
    })),
}));
import { useState } from "react";

interface CounterProps {
  initialCount?: number;
  label: string;
}

export default function Counter({ initialCount = 0, label }: Readonly<CounterProps>) {
  const [count, setCount] = useState(initialCount);
  const parity = count % 2 === 0 ? "even" : "odd";

  return (
    <div className="counter-card">
      <p className="counter-label">{label}</p>
      <p className="counter-value">Count: {count}</p>
      <p className="counter-parity" aria-live="polite">
        {parity}
      </p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount((value) => value - 1)}>
        Decrement
      </button>
    </div>
  );
}

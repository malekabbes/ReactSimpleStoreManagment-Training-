import { useState } from "react";

const TestComponentFn = () => {
  const [counter, SetCounter] = useState(0);
  return (
    <div>
      <button onClick={() => SetCounter(counter + 1)}>+</button>
      count is : {counter}
    </div>
  );
};

export default TestComponentFn;

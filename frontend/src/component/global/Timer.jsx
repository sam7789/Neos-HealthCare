import { useEffect, useState } from "react";

function Timer({ status }) {
  const [counter, setCounter] = useState(10);
  const [taskDone, setTaskDone] = useState(
    status == "completed" ? true : false
  );
  const [d, setd] = useState(status == "completed" ? true : false);

  const done = () => {
    setTaskDone(!taskDone);
    setd(true);
  };
  const fail = () => {
    if (counter === 0) {
      return <div className="expired">Expired</div>;
    } else {
      return <div>{counter} sec</div>;
    }
  };

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "4rem",
      }}
    >
      <div
        style={{
          width: "110px",
        }}
      >
        {!taskDone ? fail() : <div className="completed">Completed</div>}
      </div>
      <button
        disabled={counter === 0 || d === true}
        onClick={done}
        className={d === true || counter === 0 ? "disabledButton" : ""}
      >
        ✓
      </button>
    </span>
  );
}
export default Timer;

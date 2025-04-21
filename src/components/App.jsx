import { useState, useEffect } from "react";

import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const clicksJson = localStorage.getItem("clicksState");

    if (clicksJson !== null) {
      return JSON.parse(clicksJson);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("clicksState", JSON.stringify(clicks));
  }, [clicks]);

  const arrValues = Object.values(clicks);
  const totalFeedback = arrValues.reduce((total, value) => total + value, 0);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    const arrKeyNames = Object.keys(clicks);
    let resetClicks = {};
    arrKeyNames.forEach((name) => {
      resetClicks[name] = 0;
    });
    setClicks(resetClicks);
  };

  const positivePercent = () => {
    const positiveFeedback = totalFeedback - clicks.bad;
    return `${Math.round((positiveFeedback / totalFeedback) * 100)}%`;
  };

  return (
    <>
      <Description />
      <Options
        names={clicks}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          names={clicks}
          totalFeedback={totalFeedback}
          positivePercent={positivePercent}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;

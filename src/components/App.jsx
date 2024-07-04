import { useEffect, useState } from 'react';
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";


const App = () => {
   const [feedbacks, setFeedbacks] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem('fbks'));
    if (savedData) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
   });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

const updateFeedback = feedbackType => {
 setFeedbacks(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };
  useEffect(() => {
    window.localStorage.setItem('fbks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const feedbackReset = () => {
            setFeedbacks({
                good: 0,
                neutral: 0,
                bad: 0,
            });
  };
  
  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        feedbackReset={feedbackReset} />
      <Feedback
        feedbacks={feedbacks}
        totalFeedback={totalFeedback}
      />
      <Notification
      totalFeedback={totalFeedback}/> 
    </>
  );
};

export default App;
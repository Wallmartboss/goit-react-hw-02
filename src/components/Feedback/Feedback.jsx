import s from "./Feedback.module.css"; 

const Feedback = ({ feedbacks, totalFeedback }) => {
   
    return (
        <ul className={totalFeedback ? s.position : s.hide}>
            <li className={s.list}>Good : {feedbacks.good}</li>
            <li className={s.list}>Neutral : {feedbacks.neutral}</li>
            <li className={s.list}>Bad : {feedbacks.bad}</li>
            <li className={s.list}>Total : {totalFeedback}</li>
            <li className={feedbacks.good ? s.list : s.hide}>Positive : {Math.round((feedbacks.good / totalFeedback) * 100) }%</li>
        </ul>
    );
};
    
export default Feedback;
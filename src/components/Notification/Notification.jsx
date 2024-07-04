import s from "./Notification.module.css" 

const Notification = ({ totalFeedback }) => {
    return (
        <p className={!totalFeedback ? s.notification_text : s.hide}>No feedback yet</p>
    );
};

export default Notification;
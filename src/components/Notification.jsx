import React, { useEffect } from "react";

const Notification = ({ message, type, clearNotification }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      clearNotification();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [clearNotification]);

  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

export default Notification;

const PushNotification = (
    {
        message,
        color
    }: {
        message: string;
        color: string;
    }
) => {
    console.log("love");
  return (
    <section>
        <div className={`alert alert-${color}`} role="alert">
            {message}
        </div>
    </section>
  );
};

export default PushNotification;

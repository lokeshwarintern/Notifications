const Notification = (props) => {
  const { paraText, msgContainer, imgSrc } = props;
  return (
    <div className={`bar ${msgContainer}`}>
      <div className="img-para-card">
        <img className="img-ele" src={imgSrc} />
        <p className="para-ele">{paraText}</p>
      </div>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading-ele">Notifications</h1>
    <div>
      <Notification
        paraText="Information Message"
        msgContainer="info-msg-card"
        imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        paraText="Success Message"
        msgContainer="success-msg-card"
        imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        paraText="Warning Message"
        msgContainer="warning-msg-card"
        imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        paraText="Error Message"
        msgContainer="err-msg-card"
        imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

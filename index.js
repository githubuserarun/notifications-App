const Notification = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};

const element = (
  <div className="bg_container">
    <h1>Notifications</h1>
    <div className="box_container">
      <div className="box1">
        <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
        <Notification text="Information message" />
      </div>
      <div className="box2">
        <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
        <Notification text="Success message" />
      </div>
      <div className="box3">
        <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
        <Notification text="Warning message" />
      </div>
      <div className="box4">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <Notification text="Error message" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

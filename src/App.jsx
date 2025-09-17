import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="top">
        <div className="top-box"></div>
        <div className="top-nested">
          <div className="nested-box1"></div>
          <div className="nested-box2"></div>
        </div>
        <div className="top-box"></div>
      </div>
      <div className="middle">
        <div className="big-box"></div>
        <div className="small-column">
          <div className="small-box"></div>
          <div className="small-box"></div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-box"></div>
        <div className="bottom-small"></div>
        <div className="bottom-small"></div>
        <div className="bottom-box"></div>
      </div>
    </div>
  );
}

export default App;

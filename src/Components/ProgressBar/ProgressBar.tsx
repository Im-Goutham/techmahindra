import "./ProgressBar.scss";

type ProgressBarType = { selected?: boolean; value: number };

const Progressbar = ({ selected = false, value }: ProgressBarType) => {
  return (
    <div className={`progress-bar ${selected ? "progress-bar--selected" : ""}`}>
      <div
        className={`progress-bar__progress ${
          value > 100 ? "progress-bar__progress--exceeded" : ""
        }`}
        style={{ width: `${value}%` }}
      ></div>
      <span className="progress-bar__text">{value}%</span>
    </div>
  );
};

export default Progressbar;

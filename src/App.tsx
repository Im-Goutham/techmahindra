import { useState } from "react";
import ProgressBar from "./Components/ProgressBar";
import Button from "./Components/Button";
import Select from "./Components/Select";
import { ButtonDataType, ProgressDataType } from "./common/type";
import "./App.scss";

function App() {
  const [currentProgressBarIndex, setCurrentProgressBarIndex] =
    useState<number>(0);

  const [progressBarData, setProgressBarData] = useState<ProgressDataType[]>([
    { value: 0 },
    { value: 50 },
    { value: 70 },
  ]);
  const buttons: ButtonDataType[] = [
    { text: "-25", value: -25 },
    { text: "-10", value: -10 },
    { text: "+10", value: 10 },
    { text: "+25", value: 25 },
  ];

  const handleButtonClick = (value: number) => {
    const newData = [...progressBarData];
    const total = newData[currentProgressBarIndex].value + value;
    if (total < 0) {
      return false;
    }
    newData[currentProgressBarIndex].value = total;
    setProgressBarData(newData);
  };

  const handleSelectProgresbar = (value: number) => {
    setCurrentProgressBarIndex(value);
  };

  return (
    <div className="container">
      <h1>Progress Bars</h1>
      <>
        <Select options={progressBarData} onChange={handleSelectProgresbar} />
        {progressBarData.map(({ value }: ProgressDataType, key) => {
          return (
            <ProgressBar
              key={key}
              selected={key === currentProgressBarIndex}
              value={value}
            />
          );
        })}
        <div className="container__btn-container">
          {buttons.map(({ text, value }: ButtonDataType, key) => {
            return (
              <Button key={key} text={text} value={value} onClick={handleButtonClick} />
            );
          })}
        </div>
      </>
    </div>
  );
}

export default App;

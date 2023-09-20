const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    if (isNaN(value)) {

    } else if (value > 50) {
      setErrorAlert("value too high")
    } else if (value <= 0) {
      setErrorAlert("value too low")
    } else {
      setErrorAlert("")
      setCurrentNOE(value);
    }
  };
  return (
    <div id="number-of-events">
      <input
        type="text"
        defaultValue={32}
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
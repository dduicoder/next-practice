import { useRef } from "react";
import classes from "./MeetupTagField.module.css";

const MeetupTagField = ({ tags, setTags }) => {
  const inputRef = useRef();

  const addField = (text) => {
    setTags((prevData) => {
      return [...prevData, text];
    });
  };

  const removeField = (i) => {
    setTags((prevData) => {
      const data = [...prevData];
      data.splice(i, 1);
      return data;
    });
  };

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const text = inputRef.current.value;
      if (!tags.includes(text) && text.trim().length !== 0) {
        addField(text);
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className={classes.tags}>
      {tags.map((text, i) => {
        return (
          <div key={i} onClick={() => removeField(i)}>
            {text}
          </div>
        );
      })}
      <input ref={inputRef} onKeyPress={keyPressHandler} type="text" />
    </div>
  );
};

export default MeetupTagField;

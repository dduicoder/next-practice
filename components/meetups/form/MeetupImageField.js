import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import classes from "./MeetupImageField.module.css";

const MeetupImageField = ({ images, setImages }) => {
  const changeField = (text, i) => {
    setImages((prevData) => {
      const data = [...prevData];
      data[i] = text;
      return data;
    });
  };

  const addField = () => {
    setImages((prevData) => {
      return [...prevData, ""];
    });
  };

  const removeField = (i) => {
    setImages((prevData) => {
      const data = [...prevData];
      data.splice(i, 1);
      return data;
    });
  };

  return (
    <>
      {images.map((text, i) => {
        return (
          <div className={classes.image} key={i}>
            <input
              onChange={(e) => changeField(e.target.value, i)}
              value={text}
              required
              type="url"
              id={`image-input${i}`}
            />
            <button
              type="button"
              className="btn"
              onClick={i === 0 ? addField : () => removeField(i)}
            >
              <FontAwesomeIcon icon={i === 0 ? faPlus : faMinus} />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default MeetupImageField;

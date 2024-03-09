import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "selectors";
import { setShowOption } from "reducers/filter";

export const ToDoFilterButtons = () => {
  const { showOption } = useSelector(filterSelector);
  const dispatch = useDispatch();

  const radios = [
    { name: "all", value: "all" },
    { name: "active", value: "active" },
    { name: "completed", value: "completed" },
  ];

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-success"
            name="radio"
            value={radio.value}
            checked={showOption === radio.value}
            onChange={(e) =>
              dispatch(
                setShowOption(e.currentTarget.value as typeof showOption)
              )
            }
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};

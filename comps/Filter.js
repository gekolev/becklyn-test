import JobList from "./JobList";
import { StyledFilter } from "./styles/Filter.styled";

const Filter = ({ jobs }) => {
  return (
    <StyledFilter className="bg-c-gray">
      <div>
        {/* ${jobs.length} */}
        <span className="fz-16 c-primary w-heavy">
          {" "}
          56 offene Stellen bei Creditplus
        </span>
        <h1 className="fz-48 c-secondary w-bold">Hier beginnt deine Zukunft</h1>
        <div className="select-holder">
          <select className="Select Option" required>
            <option value="0">Bereich</option>
            <option value="1">Value1</option>
            <option value="2">Value2</option>
          </select>
          <select className="Select Option" required>
            <option value="0">Stadt</option>
            <option value="1">Value1</option>
            <option value="2">Value2</option>
          </select>
          <select className="Select Option" required>
            <option value="0">Erfahrungslevel</option>
            <option value="1">Value1</option>
            <option value="2">Value2</option>
          </select>
        </div>
      </div>
    </StyledFilter>
  );
};

export default Filter;

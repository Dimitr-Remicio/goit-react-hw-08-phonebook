import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { setFilter } from "../../redux/filter/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const setFilterValue = (event) => {
    dispatch(setFilter(event.currentTarget.value.toUpperCase()));
  };

  return (
    <>
   <p style={{color:"white"}}>Find contacts by name</p>
    <input
      onChange={setFilterValue}
      size="small"
      />
      </>
  );
};

export default Filter;

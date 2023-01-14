import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import useInputChange from "../../hooks/useInputChange";
import { getByTitle } from "../../store/slices/books/booksActions";
const initialState = {
  search: "",
};

function SearchBar() {


  const dispatch = useDispatch();


  const { values, handleChange } = useInputChange(initialState);
  const debounce = useDebounce(values.search, 2000)

  useEffect(() => {
    if (debounce.length > 0) {
      dispatch(getByTitle(debounce));
    } else {
      dispatch(getByTitle(""));
    }
  }, [debounce])


  return (
    <div className="searchbar-div">
      <div className="form-control">
        <input
          name="search"
          value={values.search}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
    </div>
  );
}

export default SearchBar;

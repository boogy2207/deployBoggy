const validate = (form) => {
  let error = {};
  if (!form.title) {
    error.title = "Type a title";
  }
  if (!form.authors) {
    error.authors = "Type a authors";
  }

  if (!form.description) {
    // alert("description is a must");
    error.description = "Type a description";
  }
  if (!form.category) {
    // alert("category is a must");
    error.category = "Type a category";
  }
  if (!form.pagecount) {
    error.pagecount = "Type number of pages";
  }
  if (!form.language) {
    error.language = "Choose a language";
  }
  if (!form.price) {
    error.price =
      "Could be Free book or a price separating decimals by a dot, but not empty";
  }
  return error;
};

export default validate;
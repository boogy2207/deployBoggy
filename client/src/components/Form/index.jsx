import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import useInputChange from "../../hooks/useInputChange";
import Select from "../Select";
import Label from "../Label";
import Cloudinary from "../Cloudinary";


const initialStateValues = {
    title: "",
    authors: "",
    description: "",
    category: "",
    pagecount: "",
    imagelink: "",
    language: "",
    price: "",
    Books: [],
};
const initialStateErrors = {
    title: "title name must be a string",
    authors: "authors name must be a string",
    description: "description is a must",
    category: "Choose a category from the list",
    pagecount: "Pagecount is a must",
    imagelink: "Type or paste an image link",
    language: "Choose a language from the list",
    price: "Can be Free book or a price separating decimals by a dot",
};

const Form = () => {

    const { values, handleChange } = useInputChange(initialStateValues, initialStateErrors);

    // petition to the server to get languages
    // petition to the server to create a new book

    const onSubmit = (e) => {
        e.preventDefault(e);
        //   if (!Object.entries(errors).length) {
        //      dispatch(newBook(formValues));
        //      setFormValues(initialStateValues);
        //      alert(formValues.title + " created Succesfully");
        //      navigate("/"); //or homepage, or whatever
        //   } else {
        //      let e = Object.values(errors);
        //      alert(JSON.stringify(`Please correct: ${e}`));
        //   }
    };

    return (
        <>
            <Link to='/'>
                <button className="btn m-5">Back!</button>
            </Link>
            <form onSubmit={onSubmit} className="form-control flex items-center justify-center">
                <h1 className="text-5xl font-bold m-3">Upload Book</h1>
                <div>
                    <Label
                        classNameSpan="input-group m-5"
                        classNameInput="input input-bordered input-primary w-full max-w-xs"
                        titleSpan='Title'
                        placeholder='Type Here!'
                        value={values.title}
                        handleChange={handleChange}
                        name='title'
                        type='text'
                    />
                    {/**------------------------------------------------------------------------------------*/}
                    <Label
                        classNameSpan="input-group m-5"
                        classNameInput="input input-bordered input-primary w-full max-w-xs"
                        titleSpan='Authors'
                        type="text"
                        placeholder="Type Here!"
                        value={values.authors.toLowerCase()}
                        handleChange={handleChange}
                        name='authors'
                    />
                    {/**------------------------------------------------------------------------------------*/}
                    <label className="input-group m-5">
                        <span>Description</span>
                        <textarea
                            type="text"
                            placeholder="Type Here!"
                            className="textarea textarea-bordered textarea-primary w-full max-w-xs"
                            value={values.description.toLowerCase()}
                            onChange={handleChange}
                            name='description'
                        />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <Label classNameSpan="input-group m-5"
                        classNameInput="input input-bordered input-primary w-full max-w-xs"
                        titleSpan='Category'
                        type="text"
                        placeholder="Type Here!"
                        value={values.category.toLowerCase()}
                        handleChange={handleChange}
                        name='category'
                    />

                    {/**------------------------------------------------------------------------------------*/}
                    <Label
                        classNameSpan="input-group m-5"
                        classNameInput="input input-bordered input-primary w-full max-w-xs"
                        titleSpan='Page Count'
                        type="text"
                        placeholder="Type Here!"
                        value={values.pagecount}
                        handleChange={handleChange}
                        name='pagecount'
                    />
                    {/**------------------------------------------------------------------------------------*/}
                    {/* <Label
                        classNameSpan="input-group m-5"
                        classNameInput="input input-bordered input-primary w-full max-w-xs"
                         titleSpan='Image Link'
                        type="url"
                        placeholder="Type Here!"
                        value={values.imagelink}
                        handleChange={handleChange}
                        name='imagelink' 
                    />  */}
                    <label className="input-group m-5">
                        <span>Image</span>
                        <Cloudinary />
                    </label>
                    {/**------------------------------------------------------------------------------------*/}
                    <Label
                        classNameSpan="input-group m-5"
                        classNameInput="input input-bordered input-primary w-full max-w-xs"
                        titleSpan='Price'
                        type="text"
                        placeholder="Type Here!"
                        value={values.price}
                        handleChange={handleChange}
                        name='price'
                    />
                    {/**------------------------------------------------------------------------------------*/}
                    <Label
                        classNameSpan="input-group m-5"
                        classNameInput="input input-bordered input-primary w-full max-w-xs"
                        titleSpan='Language'
                        type="text"
                        placeholder="Type Here!"
                        value={values.language}
                        handleChange={handleChange}
                        name='language'
                    />
                    {/**------------------------------------------------------------------------------------*/}
                    <Select
                        className='m-5 select select-primary w-full max-w-xs'
                        value={values.language}
                        handleChange={handleChange}
                        optionsMap={['ES', 'US', 'FR', 'CH']}
                        disabledPlaceHorder={'Select a Language'}
                    />
                </div>
                <button className="btn">Add Book</button>
            </form>
        </>
    );
};

export default withAuthenticationRequired(Form, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
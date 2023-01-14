import { changeTheme } from "../../store/slices/theme";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useDispatch } from "react-redux";

function BtnTheme() {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(e.target.value);
        dispatch(changeTheme(e.target.value));
    };

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    const themes = [
        "dark",
        "light",
        "autumn",
        "bumblebee",
        "cmyk",
        "cupcake",
        "emerald",
        "fantasy",
        "halloween",
        "lemonade",
        "retro",
        "valentine",
        "winter"
    ];

    return (
        <div className="dropdown dropdown-hover dropdown-end">
            <label tabIndex={0} className="btn m-1 btn-primary">Theme</label>
            <ul onClick={handleChange} tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {themes.map((theme) => (
                    <li key={theme}>
                        <button data-set-theme={theme} data-act-class="ACTIVECLASS" value={theme}>
                            {theme}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default BtnTheme;
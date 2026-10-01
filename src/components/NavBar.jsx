import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="w-max flex flex-row justify-center items-center p-3 gap-5">
            <NavLink
                to="/"
                className="text-black hover:bg-blue-300 p-3 rounded-2xl text-xl font-medium"
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className="text-black hover:bg-blue-300 p-3 rounded-2xl text-xl font-medium"
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className="text-black hover:bg-blue-300 p-3 rounded-2xl text-xl font-medium"
            >
                Contact
            </NavLink>
        </nav>
    );
};

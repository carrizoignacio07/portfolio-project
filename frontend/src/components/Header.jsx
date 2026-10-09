import { NavBar } from './NavBar.jsx';
export const Header = () => {
    return (
        <header className="w-full bg-blue-200 flex flex-row justify-between items-center p-3">
            <h1 className="font-mono text-3xl text-center text-black px-4 font-bold">
                Ignacio Carrizo
            </h1>
            <NavBar />
        </header>
    );
};

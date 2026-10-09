import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from '../routes/HomePage.jsx';
import { AboutPage } from '../routes/AboutPage.jsx';
import { ContactPage } from '../routes/ContactPage.jsx';
import { ProjectsPage } from '../routes/ProjectsPage.jsx';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';
import { StackPage } from '../routes/StackPage.jsx';
import { ThanksPage } from '../routes/ThanksPage.jsx';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/stack" element={<StackPage />}></Route>
                <Route path="/projects" element={<ProjectsPage />}></Route>
                <Route path="/thanks" element={<ThanksPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                <Route path="/*" element={<NavLink to="/" />}></Route>
            </Routes>
            <Footer />
        </>
    );
};

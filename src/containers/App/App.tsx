import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, NotFound} from "../../components";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";

const App = () => {
    const pathMapping = getPathMapping();
    const currentPath =
        location.pathname
            .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
            .pop() || "/";

    // Set Page Title
    const title =
        currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

    useEffect(() => {
        document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
    }, [title]);

    return (
        <>
            {/* Navigation */}
            <Navbar />
            {/* Header and PageContent */}
            <Routes>
                {Object.entries(pathMapping).map(
                    ([path, { component: Component }]) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <>
                                    <Component />
                                </>
                            }
                        />
                    ),
                )}
                <Route
                    path="*"
                    element={
                        <>
                            <NotFound />
                        </>
                    }
                />
            </Routes>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default App;

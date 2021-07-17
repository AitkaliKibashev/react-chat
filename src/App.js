import './App.css'
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";
import {useAuthState} from "react-firebase-hooks/auth";
import {useContext} from "react";
import {Context} from "./index";

function App() {
    const {auth} = useContext(Context)
    const [user, loader, error] = useAuthState(auth)

    if (loader) {
        return <Loader />
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;

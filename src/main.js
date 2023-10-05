import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from "./App";
import Cred from "./second-pae/credential/cred";
const Main = () => {
    return ( <div>
      <div></div>
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/new" element={<div>this is te new page</div>}/>
            <Route path="/log" element={<Cred/>}/>
        </Routes>
        </BrowserRouter>
    </div> );
}
 
export default Main;
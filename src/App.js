
import { Route, Routes } from "react-router";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import List from "./component/Product/List";

function App() {
  return (
    <div className="App">  
      <Routes>
        {/* <Route path = "signUP" element = { <SignUp />} /> */}
        <Route path = "signIn" element = { <SignIn />} />  
        <Route path = "signUp" element = { <SignUp />} /> 
        <Route path = "list" element = { <List />} />  
      </Routes>
    </div>
  );
}

export default App;

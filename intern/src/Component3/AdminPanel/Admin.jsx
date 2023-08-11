import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import RecordList from "./recordList";

const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<RecordList />} />
     </Routes>
   </div>
 );
};
 
export default App;
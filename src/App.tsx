import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage"
import 'bootstrap/dist/css/bootstrap.min.css';
import { pagesLinkpath } from "./path/LinkPath";



function App() {
  
  return (
    <><Routes>
      {/* <Route path='/*' element={<NotFoundLayout/>}/> */}
      <Route path={pagesLinkpath.homePage} element={ <Homepage/>}/>

    
    </Routes>
    </>
  )
}

export default App

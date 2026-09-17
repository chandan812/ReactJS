import { BrowserRouter, Link,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import UserDetails from "./UserDetails";
import NotFound from "./NotFound";

function App() {
  return(
    <BrowserRouter>
     <nav style={{display: 'flex', gap: '10px',padding: '10px', borderBottom: '1px solid black'}}> 
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
     </nav>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="*" element={<NotFound />} />
     </Routes>

    </BrowserRouter>
  )
}
export default App;
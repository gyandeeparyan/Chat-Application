import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Chat from "./components/Chat";
import ChatMobile from "./components/ChatMobileWraper";
import SidebarMobile from "./components/SidebarMobile";
import SideBarBack from "./components/SideBarBack";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path='login' element={<Login />} />
          <Route path='/chats' element={ <div className='home'>
        <div className='container'>
          <SidebarMobile />
        </div>
      </div>} />
          <Route path='/chatScreen' element={<ChatMobile />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

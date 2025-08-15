import Navbar from '../Navbar/Navbar';
import Navitem from '../Navbar/Navitem';
import { IconButton, Tooltip } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useNavigate } from 'react-router-dom'; 

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar logo="React Shop">
        <Navitem title="Home" link="/" />
        <Navitem title="Cart" link="/cart" />

    
        <Tooltip title="Log In">
          <IconButton color="inherit" onClick={() => navigate("/login")}>
            <LoginIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Sign Up">
          <IconButton color="inherit" onClick={() => navigate("/signup")}>
            <AppRegistrationIcon />
          </IconButton>
        </Tooltip>
      </Navbar>
    </div>
  );
}

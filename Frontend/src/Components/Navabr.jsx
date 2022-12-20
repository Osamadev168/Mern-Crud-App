import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background: #111111;
`;
const Tabs = styled(NavLink)`
  font-size: 25px;
  color: black;
  margin-right: 15px;
  text-decoration: none;
`;
const Navbar = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Tabs to="/">Main</Tabs>
        <Tabs to="/all">All Data</Tabs>
        <Tabs to="/add">Add User</Tabs>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;

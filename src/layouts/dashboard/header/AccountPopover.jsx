import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


// @mui
import { alpha } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
// mocks_
import account from '../../../_mock/account';
import { AuthContext } from '../../../context/AuthContext';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [

];

// ...

export default function AccountPopover() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLoggout = () => {
    localStorage.removeItem('token');
    navigate("/login");
    setOpen(null);
  }
  return (
    <>
      
    </>
  );
}
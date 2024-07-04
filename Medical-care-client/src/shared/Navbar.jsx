import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useState } from 'react';
import UpNavbar from './UpNavbar';
import Login from '../pages/Login/Login';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'About us', 'Service', 'Doctor', 'News', 'Contact'];

const breakTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 780,
			md: 960,
			lg: 1280,
			xl: 1920,
			custom: 620,
		},
	},
});

const navItem = [
	{
		route: "Home",
		pathName: "/"
	},
	{
		route: "About Us",
		pathName: "/about"
	},
	{
		route: "Services",
		pathName: "/services"
	},
	{
		route: "Doctor",
		pathName: "/doctors"
	},
	{
		route: "News",
		pathName: "/news"
	},
	{
		route: "Contact",
		pathName: "/contact"
	},
];

function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box sx={{ textAlign: 'center' }}>
			<List>
				{navItem?.map((item) => (
					<ListItem key={item.route} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<Link to={item.pathName} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
								<ListItemText primary={item.route} />
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Button sx={{ borderRadius: '25px', backgroundColor: '#BFD2F8', color: 'black' }} variant="contained">Contained</Button>
		</Box>
	)


	return (
		<ThemeProvider theme={breakTheme}>
			<div className="sticky top-0 z-50 bg-white">
				<UpNavbar></UpNavbar>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<CssBaseline />
					<AppBar sx={{ backgroundColor: '#1F2B6C', marginTop: { xs: '45px', sm: '66px' } }} component="nav">
						<Toolbar className='container mx-auto flex justify-between'>
							<Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
								<Stack
									direction="row"
									justifyContent="left"
									alignItems="center"
									spacing={3}
								>

									{navItem?.map((item) => (
										<Link to={item.pathName} key={item.route} className=' hover:text-[#fbfc03]'>
											{item.route}
										</Link>
									))}
								</Stack>
							</Box>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { sm: 'none' } }}
							>
								<MenuIcon />
							</IconButton>
							<div className="mr-5">
								<SearchIcon></SearchIcon>
							</div>

							<div className="block">
								<Link to="/appointment" className='rounded-3xl bg-[#BFD2F8] text-black py-2 px-4'>Appointment</Link>
							</div>

							<div className='ml-10'>
								<Login></Login>
							</div>

						</Toolbar>
					</AppBar>
					<nav>
						<Drawer
							variant="temporary"
							open={mobileOpen}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
							sx={{
								display: { xs: 'block', sm: 'none' },
								'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
							}}
						>
							{drawer}
						</Drawer>
					</nav>
				</Box>
			</div>
		</ThemeProvider>
	);
}



export default Navbar;

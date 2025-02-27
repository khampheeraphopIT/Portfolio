import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { List, ListItem } from '@mui/material';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" >
                        PORTFOLIO
                    </Typography>
                    <List sx={{ display: 'flex', justifyContent: 'space-between', ml: 'auto' }}>
                        <ListItem>
                            <Button className='rounded' sx={{backgroundColor: 'white', color: "#000000"}}
                                component="a"
                                href='#projects'
                            >
                            Projects
                            </Button>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
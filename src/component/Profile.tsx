import { Box, Paper, Typography, Avatar, Grid, Divider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MyProfile from '../assets/images/Profile1.jpg';

const Profile = () => {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                <Paper elevation={3}>
                    <Box sx={{ p: 4, background: 'linear-gradient(rgb(215, 244, 248),rgb(44, 120, 244))', boxShadow: 10, borderRadius: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box>
                                    <Typography variant="h4" component="div" sx={{ mb: 2, fontWeight: 'bold', color: '#006064' }}>
                                        PORTFOLIO
                                    </Typography>
                                    <Divider sx={{ my: 2, borderColor: '#004d40' }} />
                                    <Typography variant="h6" component="div" sx={{ mb: 1, color: '#004d40' }}>
                                        My name is Khampheeraphop Thongsaeng
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ mb: 1, color: '#004d40' }}>
                                        Student ID: 661104318
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ color: '#004d40' }}>
                                        FullStack Developer
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <Avatar
                                    alt="Khampheeraphop Thongsaeng"
                                    src={MyProfile}
                                    sx={{ width: 200, height: 200, border: '2px solid #000000' }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
};

export default Profile;

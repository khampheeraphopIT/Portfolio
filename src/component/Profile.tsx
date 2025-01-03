import { Box, Paper, Typography, Avatar, Grid, Divider, IconButton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MyProfile from '../assets/images/Profile1.jpg';
import FacebookIcon from '../assets/images/facebook.png';
import InstagramIcon from '../assets/images/instagram.png';
import GitHubIcon from '../assets/images/github.png';

const Profile = () => {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                <Paper elevation={3}>
                    <Box sx={{ p: 4, background: 'linear-gradient(rgb(215, 244, 248),rgb(44, 120, 244))', boxShadow: 10, borderRadius: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                                    <Typography variant="h6" component="div" sx={{ mb: 3, color: '#004d40' }}>
                                        FullStack Developer
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <IconButton
                                        aria-label="facebook"
                                        href="https://www.facebook.com/profile.php?id=100022098017628"
                                        target="_blank"
                                        sx={{ color: '#3b5998', mx: 1 }}
                                    >
                                        <img src={FacebookIcon} alt="Facebook" style={{ width: 40, height: 40 }} />
                                    </IconButton>
                                    <IconButton
                                        aria-label="instagram"
                                        href="https://www.instagram.com/phop_kpp/"
                                        target="_blank"
                                        sx={{ color: '#E4405F', mx: 1 }}
                                    >
                                        <img src={InstagramIcon} alt='Instagram' style={{ width: 40, height: 40 }} />
                                    </IconButton>
                                    <IconButton
                                        aria-label="github"
                                        href="https://github.com/khampheeraphopIT"
                                        target="_blank"
                                        sx={{ color: '#333', mx: 1 }}
                                    >
                                        <img src={GitHubIcon} alt='GitHub' style={{ width: 40, height: 40 }} />
                                    </IconButton>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <Avatar
                                    alt="Khampheeraphop Thongsaeng"
                                    src={MyProfile}
                                    sx={{ width: 250, height: 250, border: '2px solid #000000' }}
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

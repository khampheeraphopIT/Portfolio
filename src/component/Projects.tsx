import { Box, Container, CssBaseline, Paper, Typography, Divider, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import DesignForm from "../assets/images/DesignForm.png";
import KFC from "../assets/images/kfc.jpg";
import Bikini from '../assets/images/bikini.jpg'

const Projects = () => {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ borderRadius: 2 }}>
          <Box sx={{ py: 2, background: "linear-gradient(rgb(215, 244, 248),rgb(44, 120, 244))", borderRadius: 2 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              Projects
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ border: "1px solid #000", borderRadius: 2 }}>
                  <CardMedia component="img" height="200" image={DesignForm} alt="Project 1" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Project 1
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#000000" }}>
                      <small>
                        ออกแบบหน้าเว็บไซต์สำหรับ Form Dynamic ที่ให้ผู้ใช้งานสามารถเข้ามาใช้งานแบบฟอร์มได้ เหมือน google Form
                      </small>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  sx={{ color: "#ffffff", backgroundColor: "blue", width: 100, ml: 1}}
                    component="a"
                    href="https://www.figma.com/proto/EF8oZiGtSl7X7Ox9v6qQrp/Design-User-Page?node-id=164-124&p=f&t=inooNi0kIsGLdP6e-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=30%3A1737"
                    target="_blank"
                     >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ border: "1px solid #000", borderRadius: 2 }}>
                  <CardMedia component="img" height="200"image={KFC} alt="Project 1" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Project 1
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#000000" }}>
                      <small>
                        ออกแบบหน้าเว็บไซต์สำหรับ Form Dynamic ที่ให้ผู้ใช้งานสามารถเข้ามาใช้งานแบบฟอร์มได้ เหมือน google Form
                      </small>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  sx={{ color: "#ffffff", backgroundColor: "blue", width: 100, ml: 1}}
                    component="a"
                    href="https://www.kfc.co.th/?utm_source=google_sem&utm_medium=ads_pfm&utm_campaign=241201_brandoff_brand_oc&utm_content=cpa_sem_ad_text_adtext_&gclsrc=aw.ds&gad_source=1&%243p=a_google_adwords&%24always_deeplink=false&~ad_set_id=137416335003&~campaign_id=17337314630&~channel=g&~keyword=kfc&~placement&gclid=Cj0KCQiAsaS7BhDPARIsAAX5cSB028-rWFJr5HjDDheupiwiADfpa8CfGXyn9hNQoT49psmjIinsfpoaApKvEALw_wcB&_branch_match_id=1290634446946567777"
                    target="_blank"
                     >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ border: "1px solid #000", borderRadius: 2 }}>
                  <CardMedia component="img" height="200" image={Bikini} alt="Project 1" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Project 1
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#000000" }}>
                      <small>
                        ออกแบบหน้าเว็บไซต์สำหรับ Form Dynamic ที่ให้ผู้ใช้งานสามารถเข้ามาใช้งานแบบฟอร์มได้ เหมือน google Form
                      </small>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  sx={{ color: "#ffffff", backgroundColor: "blue", width: 100, ml: 1}}
                    component="a"
                    href="https://th.shein.com/Women-Bikini-Sets-c-1866.html?onelink=2/3mrot2u01z8a&requestId=olw-4a49nmgzdi7e&cid=21274860616&setid=167339668012&adid=698908201426&kwd=kwd-361461547105&pf=GOOGLE&gad_source=1&gclid=Cj0KCQiAsaS7BhDPARIsAAX5cSDVKA2mQn3tznGDxuellhWtM_xSQ5ZqmSH6jk0IraPAVi_Sbb2p9QAaAlw0EALw_wcB&url_from=thadgs20_srsa_Bikini_onelink01_20240508"
                    target="_blank"
                     >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Projects;

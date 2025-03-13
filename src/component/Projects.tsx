import {
  Box,
  Container,
  CssBaseline,
  Paper,
  Typography,
  Divider,
  Grid,
  Button,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

//assets
import DesignForm from "../assets/images/DesignForm.png";
import ERDiagram from "../assets/images/ER-Diagram.png";
import Website from "../assets/images/website.png";
import Backend from "../assets/images/Dashboard.png"
import FrontEnd from "../assets/images/FrontEnd.png"
import Export from "../assets/images/Export.png"
import attend from "../assets/images/nsmjoin.png"
import favourite from "../assets/images/favourite.png"
import Certificate from "../assets/images/SearchCertificate.png"
import Setting from "../assets/images/setting.png"

// ใช้ hook ที่สร้างขึ้นมา
import usePagination from "./pagination";

// สร้าง type สำหรับข้อมูลโปรเจ็ค
interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  extended: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "Project NSM Attend UI",
    image: attend,
    description: "สร้างหน้า UI สำหรับทำกิจกรรมที่นักเรียน ได้เข้าร่วม",
    extended: "ได้รับงานมาให้ เขียนโค้ดสร้างหน้า UI ขึ้นมาจาก figma และดึง api เพื่อแสดงกิจกรรมที่นักเรียนได้เข้าร่วมทำกิจกรรมต่างๆ",
  },
  {
    id: 2,
    name: "Project NSM Favourite UI",
    image: favourite,
    description: "สร้างหน้า UI สำหรับทำกิจกรรมที่นักเรียนสนใจ",
    extended: "ได้รับงานมาให้ เขียนโค้ดสร้างหน้า UI ขึ้นมาจาก figma และดึง api เพื่อแสดงกิจกรรมที่นักเรียนสนใจทำกิจกรรมต่างๆ",
  },
  {
    id: 3,
    name: "Project NSM SearchCertificate UI",
    image: Certificate,
    description: "สร้างหน้า UI สำหรับค้นหาใบประกาศณียบัตรที่ได้รับ",
    extended: "ได้รับงานมาให้ เขียนโค้ดสร้างหน้า UI ขึ้นมาจาก figma และดึง api เพื่อแสดงใบประกาศณียบัตรที่ได้รับ โดยให้กรอกโค้ดลงไปแล้วจะแสดงหน้า UI ขึ้นมา",
  },
  {
    id: 4,
    name: "Project NSM Setting UI",
    image: Setting,
    description: "สร้างหน้า UI สำหรับการตั้งค่าความเป็นส่วนตัวของผู้ใช้",
    extended: "ได้รับงานมาให้ เขียนโค้ดสร้างหน้า UI ขึ้นมาจาก figma และดึง api เพื่อให้ผู้ใช้ได้ยอมรับความเป็นส่วนตัว",
  },
  {
    id: 5,
    name: "Design UX UI",
    image: DesignForm,
    description: "ออกแบบหน้าเว็บไซต์สำหรับ Form Dynamic",
    extended: "ออกแบบ UI สำหรับเขียนเว็บไซต์เพื่อให้ผู้ใช้ได้เข้ามาทำแบบฟอร์มออนไลน์และสามารถปริ้น PDF ได้",
  },
  {
    id: 6,
    name: "ER Diagram",
    image: ERDiagram,
    description: "ออกแบบ ER-Diagram เพื่อสร้างโครงสร้างฐานข้อมูล",
    extended: "ออกแบบ Database Design เพื่อทราบโครงสร้างฐานข้อมูลที่จำเป็นสำหรับการทำแบบฟอร์ม",
  },
  {
    id: 7,
    name: "Project BlueForm V1.0",
    image: Website,
    description: "เขียนโค้ดสร้างหน้าเว็บไซต์สำหรับ Form Dynamic",
    extended: "สร้างหน้าเว็บไซต์ให้ผู้ใช้ได้เข้ามาชมและกรอกแบบฟอร์ม V1",
  },
  {
    id: 8,
    name: "Project BlueForm V1.0 BlackEnd",
    image: Backend,
    description: "สร้างApi สำหรับการรับส่งข้อมูล",
    extended: "สร้าง API ฐานข้อมูล CRUD Relationship ด้วย Prisma และ MongoDB สำหรับการรับและส่งข้อมูล",
  },
  {
    id: 9,
    name: "Project BlueForm V1.0 FrontEnd",
    image: FrontEnd,
    description: "สร้างหน้า Website",
    extended: "สร้างหน้า WebSite เช่น หน้าสร้างฟอร์ม ประวัติฟอร์ม หน้าดึงข้อมูล หน้าแสดงข้อมูล และหน้าอื่นๆ",
  },
  {
    id: 10,
    name: "Project BlueForm V1.0 ExportPDF",
    image: Export,
    description: "ทำฟังก์ชันสำหรับ Export แบบฟอร์มให้อยู่ในรูปแบบ PDF",
    extended: "กำหนด Layout ในกระดาษ A4 ให้ตรงกับส่วนที่แสดงผล เพื่อให้หน้า A4 มีองค์ประกอบที่สวยงามและพร้อมใช้งาน",
  },
];

const Projects = () => {
  const { currentData: currentProjects, jump, currentPage, maxPage } = usePagination(
    projectsData,
    6
  );

  const [open, setOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleOpen = (project: Project) => {
    setCurrentProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProject(null);
  };

  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ borderRadius: 2 }}>
          <Box
            sx={{
              py: 2,
              background: "linear-gradient(rgb(215, 244, 248),rgb(44, 120, 244))",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
              id="projects"
            >
              Projects
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
              {currentProjects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <Card sx={{ borderRadius: 2 }}>
                    <CardMedia
                      component="img"
                      height="337px"
                      image={project.image}
                      alt={project.name}
                      sx={{
                        borderBottom: "1px solid #000000",
                        p: 2,
                        contain: 'contain'
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        sx={{
                          backgroundColor: "blue",
                          color: "#fff",
                          width: 100,
                          ml: 1,
                          p: 1,
                          mb: 1,
                        }}
                        onClick={() => handleOpen(project)}
                      >
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Pagination
                count={maxPage}
                page={currentPage}
                onChange={(_, page) => jump(page)}
                color="primary"
              />
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Dialog for project details */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{currentProject?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {currentProject?.description}
          </Typography>
          <img
            src={currentProject?.image}
            alt={currentProject?.name}
            style={{
              width: "100%",
              maxHeight: 400,
              objectFit: "contain",
            }}
          />
          <Typography variant="body2" sx={{ mt: 2 }}>
            {currentProject?.extended}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Projects;

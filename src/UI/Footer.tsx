import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" className="footer">
      <Typography variant="body2">
        &copy; {currentYear} NG Incorporated. All rights reserved.
      </Typography>
    </Box>
  );
};
export default Footer;

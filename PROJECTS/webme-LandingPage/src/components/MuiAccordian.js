import styles from "./MuiAccordian.module.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Link from "react-router-dom/Link";
import AddIcon from "@mui/icons-material/Add";
// import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
// import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Minimize } from "@mui/icons-material";
export default function MuiAccordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel1" ? <Minimize /> : <AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h5" sx={{ fontSize: "22px", fontWeight: 700 }}>
            Is it easy to build a website
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "20px" }}>Yes</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel2" ? <Minimize /> : <AddIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h5" sx={{ fontSize: "22px", fontWeight: 700 }}>
            Can I create a website without knowing how to code?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "20px" }}>Yes!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel3" ? <Minimize /> : <AddIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h5" sx={{ fontSize: "22px", fontWeight: 700 }}>
            How do I make my site mobile friendly?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "20px" }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or
            <Link to="/random" className={styles.link}>
              randomised
            </Link>
            words which don't look even slightly believable. If you are going to
            use a passage.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

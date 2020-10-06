import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  carousel: {
    height: "100%",
    width: "100%",
    minHeight: "100%",
    minWidth: "100%",
  },
  paper: {
    "&::after": {
      content: '""',
      position: "absolute",
      zIndex: 1,
      bottom: 0,
      width: "100%",
      height: 150,
      backgroundColor: "rgba(21,21,21,0)",
      backgroundImage: "-webkit-linear-gradient(top,rgba(21,21,21,0),#151515)",
    },
    position: "absolute",
    width: "100%",
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    cursor: "grab",
  },
  info: {
    "& p": {
      fontWeight: 300,
      textShadow: "0 1px 15px #0c1112",
      fontSize: "1.15em",
    },
    margin: "4rem 1.2rem",
    color: "#f8f9fa",
    width: "60%",
    [theme.breakpoints.down("sm")]: { width: "80%" },
  },
  meta: {
    "& div": {
      marginRight: "1.5rem",
    },
    "& p": { margin: 0 },
    "& svg": { fontSize: ".8rem", margin: "auto" },
    display: "flex",
    color: "#f8f9fa",
    alignItems: "center",
    fontSize: ".95em",
    marginBottom: "10px",
  },
  grid: {
    margin: "20px 0",
    padding: "0 15px",
  },
  hr: {
    backgroundColor: "#f8f9fa",
    width: "10%",
    margin: "0 15px 15px 15px",
  },
}));

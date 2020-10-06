import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  imageWrapper: {
    height: "100%",
    width: "100%",
    minHeight: "100%",
    position: "relative",
  },
  poster: {
    marginBottom: "10px",
    "&:hover:active:after": {
      content: '""',
      transition: "all,ease-in-out .2s",
      position: "absolute",
      zIndex: 1,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(21,21,21,0)",
      backgroundImage:
        "-webkit-linear-gradient(180deg,rgba(21,21,21,0),#151515), -webkit-linear-gradient(360deg,rgba(21,21,21,0),#151515)",
    },
    "&:hover:after": {
      content: '""',
      transition: "all,ease-in-out .2s",
      position: "absolute",
      zIndex: 1,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(21,21,21,0)",
      backgroundImage:
        "-webkit-linear-gradient(180deg,rgba(21,21,21,0),#151515), -webkit-linear-gradient(360deg,rgba(21,21,21,0),#151515)",
    },
  },
  img: {
    height: "auto",
    width: "100%",
    objectFit: "cover",
    margin: "auto",
    minHeight: "100%",
    position: "relative",
    maxHeight: 300,
    borderRadius: 4,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);",
  },
  play: {
    "& svg": {
      fontSize: "5rem",
      [theme.breakpoints.down("sm")]: { fontSize: "4rem" },
      [theme.breakpoints.only("xs")]: { fontSize: "2.5rem" },
    },
    "&:hover": { transform: "scale(1.1)", transition: "all,ease-in-out .2s" },
    margin: "auto",
    position: "absolute",
    left: "33%",
    top: "40%",
    padding: 0,
    zIndex: 2,
  },
  card: {
    padding: 8,
  },
  paperRoot: {
    "& h2": { color: "#f8f9fa" },
    position: "absolute",
    backgroundColor: "#1e2129",
    margin: "auto",
    zIndex: 3,
    bottom: "70%",
    left: 30,
    width: 300,
    minWidth: 150,
    maxWidth: 260,
  },
  overview: {
    fontSize: ".85em",
    color: "#6c757d",
    textAlign: "justify",
    lineHeight: "18px",
  },
  meta: {
    "& p": { margin: 0 },
    "& svg": { fontSize: ".8rem", margin: "auto" },
    display: "flex",
    color: "#6c757d",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: ".95em",
    margin: "10px 0",
  },
}));

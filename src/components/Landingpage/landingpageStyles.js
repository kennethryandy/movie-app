import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  landingpage: {
    "& form": {
      width: "80%",
      position: "relative",
      [theme.breakpoints.down("sm")]: { width: "100%" },
    },
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "60%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: { width: "80%" },
  },
  textInput: {
    "& input": { color: "#1e2129 " },
    "& svg": { marginBottom: 10 },
    marginTop: "20px",
    backgroundColor: "#FFF",
    borderRadius: 6,
  },
  btn: {
    margin: "10px 0",
    fontWeight: 600,
  },
  searchInfo: {
    "& img": {
      height: "auto",
      width: "100%",
      objectFit: "contain",
      maxWidth: 140,
      maxHeight: 160,
      minHeight: 160,
      minWidth: 140,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: "#ffffff",
    color: "#1e2129 ",
    borderRadius: 4,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginTop: "-2px",
    zIndex: 2,
    marginBottom: 20,
  },
  listItemText: {
    margin: "0 20px",
  },
}));

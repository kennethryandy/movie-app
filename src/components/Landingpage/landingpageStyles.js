import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  landingpage: {
    "& form": {
      width: "80%",
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
    "& input": { color: "#8e95a5" },
    "& svg": { marginBottom: 10 },
    margin: "20px 0",
    backgroundColor: "#FFF",
    borderRadius: 6,
  },
  btn: {
    margin: "10px 0",
  },
}));

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  pagination: {
    "& button": { color: "#f8f9fa" },
    display: "flex",
    justifyContent: "center",
    margin: "20px auto",
  },
  hr: {
    backgroundColor: "#f8f9fa",
    width: "10%",
    margin: "0 15px 15px 15px",
  },
}));

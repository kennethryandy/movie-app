import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  videoContainer: {
    height: "80vh",
  },
  img: {
    height: "auto",
    width: "100%",
    objectFit: "cover",
    borderRadius: 4,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);",
  },
  poster: {
    margin: 50,
    display: "flex",
  },
  info: {
    margin: "0 25px",
    maxWidth: "60%",
  },
  meta: {
    "& p": { margin: 0 },
    "& svg": { fontSize: ".8rem", margin: "auto" },
    display: "flex",
    color: "#6c757d",
    alignItems: "center",
    fontSize: ".95em",
    margin: "10px 0",
  },
  desc: {
    color: "#6c757d",
  },
  metaDetails: {
    marginLeft: "2rem !important",
    color: "#939ba2",
  },
}));

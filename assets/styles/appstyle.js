"use strict";
import { StyleSheet } from "react-native";
const {MAIN_COLOR,SUB_COLOR} = require("../../Constants/Constants.js");

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 32,
    color: MAIN_COLOR,
  },
  wrapper: {},
  slide1: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  slide4: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  loginsignup: {},
  languageChoose: {
    paddingBottom: 15,
  },
  LoginButton: {
    borderRadius: 36,
    width: 250,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: MAIN_COLOR,
    marginBottom: 15,
  },
  SignUpButton: {
    borderRadius: 36,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "lightgrey",
    marginBottom: 50,
  },
  loginbuttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  signupbuttonText: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  LoginLogo: {
    width: undefined,
    height: "100%",
    aspectRatio: 1,
  },
  loginTitle: {
    fontWeight: "bold",
  },
  languageButton: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  languageButtonText: {},
});

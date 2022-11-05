import React, { useReducer } from "react";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

export const initialState = {
  userDetails: "" || user,
  token: "" || token,
  loadingMessage: '',
  showLoading: false,
  errorMessage: null
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {

    case "SHOW_LOADING":
      return {
        ...initialState,
        showLoading: true,
        loadingMessage: action.payload
      };
    case "HIDE_LOADING":
      return {
        ...initialState,
        showLoading: false
      };
    case "AUTH_SUCCESS":
      return {
        ...initialState,
        userDetails: action.payload.user,
        token: action.payload.token,
        showLoading: false
      };
    case "LOGOUT":
      return {
        ...initialState,
        userDetails: "",
        token: ""
      };

    case "AUTH_ERROR":
      return {
        ...initialState,
        showLoading: false,
        errorMessage: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
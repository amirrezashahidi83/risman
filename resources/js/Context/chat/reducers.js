import React, { useReducer } from "react";

export const initialState = {
  chat_id: 0,
  ghost_mode : false
};

export const ChatReducer = (initialState, action) => {
  switch (action.type) {

    case "ENTER_GHOST_MODE":
      return {
        ...initialState,
        ghost_mode: true
      };

    case "EXIT_GHOST_MODE":
      return {
        ...initialState,
        ghost_mode: false
      };

    case "REQUEST_CHAT":
      return {
        ...initialState,
        chat_id: action.chat_id
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
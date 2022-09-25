
export const setChat = async (dispatch,chat_id) => {
	dispatch({type:'ENTER_GHOST_MODE'},{chat_id:chat_id});
}

export const enterGhost = async (dispatch,chat_id) => {
	dispatch({type:'ENTER_GHOST_MODE'},{chat_id:chat_id});

}

export const exitGhost = async (dispatch,chat_id) => {
	dispatch({type:'EXIT_GHOST_MODE'},{chat_id:chat_id});

}
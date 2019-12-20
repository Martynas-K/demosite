const initState = {
  thanksMsg: [
      {id: 1, lang: 'English', text: 'Thank You!'},
      {id: 2, lang: 'French', text: 'Merci beaucoup!'},
      {id: 3, lang: 'German', text: 'Danke schön!'},
      {id: 4, lang: 'Spanish', text: 'Muchas gracias!'},
  ],
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_MSG') {
        let newThanksMsg = state.thanksMsg;
        let arr = newThanksMsg.shift();
        return {
            ...state,
            thanksMsg: newThanksMsg
        }
    }
    return state;
};

export default rootReducer;
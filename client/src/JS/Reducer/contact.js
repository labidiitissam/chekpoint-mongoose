//importation

const { LOAD_CONTACTS, GET_CONTACTS, GET_CONTACT, FAIL_CONTACTS } = require("../ActionTypes/contact")


//initialState
const initialState = {
    listContacts : [],
    contact :{},
    load : false,
    errors :null

}



//pure functions
const contactReducer = (state = initialState , {type ,payload}) => {
    switch (type) {
        case LOAD_CONTACTS :
            return  {...state, load : true}
        case GET_CONTACTS :
            return {...state, load : false , listContacts : payload.listContacts}
        case GET_CONTACT :
            return {...state, load : false ,contactToGet : payload.contactToGet}
        case FAIL_CONTACTS :
            return {...state, load : false , errors : payload}
        default :
            return state;
            
}}

export default contactReducer
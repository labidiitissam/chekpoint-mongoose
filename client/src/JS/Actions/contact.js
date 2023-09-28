import axios from "axios";
import {GET_CONTACT, LOAD_CONTACTS ,FAIL_CONTACTS,ADD_CONTACT } from "../ActionTypes/contact";


export const getContacts = () => async(dispatch) => {
    dispatch({type :LOAD_CONTACTS});
    try {
        let result = await axios.get('/api/contact/all-user')
        dispatch({type :GET_CONTACT ,payload :result.data});
    } catch (error) {
        dispatch({type :FAIL_CONTACTS ,payload :Error.response});

    }}

    export const addContact = (newContact) => async(dispatch) => {
        dispatch({type :LOAD_CONTACTS});
        try {
             await axios.post('/api/contact/add-contact',newContact)
            dispatch(getContacts());
        } catch (error) {
            dispatch({type :FAIL_CONTACTS ,payload :Error.response});
   
        }}

        export const deleteContact = (id) => async(dispatch) => {
            dispatch({type :LOAD_CONTACTS});
            try {
                 await axios.delete(`/api/contact/${id}`)
                dispatch(getContacts());
            } catch (error) {
                dispatch({type :FAIL_CONTACTS ,payload :Error.response});
       
            }}

            export const editContact = (id, newContact) => async(dispatch) => {
                dispatch({type :LOAD_CONTACTS});
                try {
                     await axios.put(`/api/contact/${id}`,newContact)
                    dispatch(getContacts());
                } catch (error) {
                    dispatch({type :FAIL_CONTACTS ,payload :Error.response});
           
                }}

                export const getOneContact = (id) => async(dispatch) => {
                    dispatch({type :LOAD_CONTACTS});
                    try {
                         let result=await axios.get(`/api/contact/${id}`)
                        dispatch({type :GET_CONTACT ,payload :result.data});

                    } catch (error) {
                        dispatch({type :FAIL_CONTACTS ,payload :Error.response});
               
                    }}
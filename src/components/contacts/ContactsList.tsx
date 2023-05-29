import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Contact } from "../../redux/types";
import { useNavigate } from "react-router-dom";

import { addContact } from "../../redux/contacts/contactsSlice";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteContact, fetchContacts } from "../../api/api";
const ContactsList: React.FC = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError } = useQuery('contacts', fetchContacts, {
    onSuccess: (data) => {
      dispatch(addContact(data.data.contacts));// Dispatch contacts to Redux store
    },
  });

  const deleteContactMutation = useMutation(deleteContact, {
    onSuccess: () => {
      alert("deleted successfully");
      queryClient.invalidateQueries('contacts');
    },
  });
  const contacts = useSelector<RootState, Contact[]>(
    (state) => state.contacts.contacts
  );

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteContactHandler = (id: string) => {
    deleteContactMutation.mutate(id)
  };

  const viewContactHandler = (id: string) => {
    navigate(`/contacts/${id}`);
  };

  const editContactHandler = (id: string) => {
    navigate(`/contacts/${id}/edit`);
  };

  if (contacts.length === 0) {
    return (<div className="flex items-center justify-center h-full">
      <p className="text-gray-500 text-xl">No Contact found, please create new contact from create contact button</p>
    </div>)
  }

  return (
    <ul className="mt-4">
      {contacts.map((contact) => (
        <li
          key={contact._id}
          className="py-2 px-4 border border-gray-300 rounded mb-2 flex items-center justify-between"
        >
          <span>{contact.firstName}</span>
          <div>
            <button
              onClick={() => viewContactHandler(contact._id)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
            >
              View
            </button>
            <button
              onClick={() => editContactHandler(contact._id)}
              className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 mr-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteContactHandler(contact._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded "
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

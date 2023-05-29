import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Contact } from "../../redux/types";
import { RootState } from "../../redux/store";
import { useMutation } from "react-query";
import { viewSpecificContact } from "../../api/api";
const ViewContact = () => {
  const { id } = useParams<{ id: string }>();
  const [contact,setContact] = useState<any>({})
  const navigate = useNavigate();

  
  const viewContactMutation = useMutation(viewSpecificContact, {
    onSuccess: (data) => {
      setContact(data.data.contact)
    },
  });
  // const contacts = useSelector<RootState, Contact[]>(
  //   (state) => state.contacts.contacts
  // );
  // const contact = contacts.find((c) => c.id === id);
  useEffect(() => {
    if(id){

      viewContactMutation.mutate(id);
    }
  },[id])
  if (!contact) {
    return <div>Contact not found</div>;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/4 rounded-lg shadow-xl bg-white p-10">


        <header className=" text-2xl font-extrabold py-4 px-4 text-center">
          User Information
        </header>
        <div>
          <ul className="text-gray-500 text-center font-semibold">
            <li>Id: {contact._id}</li>
            <li>First name: {contact.firstName}</li>
            <li>Last name: {contact.lastName}</li>
            <li>Stauts: {contact.status}</li>

          </ul>
        </div>

        <footer className="text-center py-3 px-8 text-gray-500">
          <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => navigate(-1)}>
            Back
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ViewContact;
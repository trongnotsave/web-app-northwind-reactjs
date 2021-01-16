import React from "react";
import { useParams, useLocation } from "react-router-dom";
import FormInput from "components/formInput";

export default function UpdatePage() {
  const { id } = useParams();
  const location = useLocation();

  return (
    <>
      <div>This is page update for ID: {id} with object: </div>
      <FormInput
        type="update"
        updateID={id}
        updateItem={location.state?.updateItem}
      />
    </>
  );
}

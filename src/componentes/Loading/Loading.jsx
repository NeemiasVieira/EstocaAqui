import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { LoadingStyle } from "./LoadingStyle";

export const Loading = ({ minHeight }) => {
  return (
    <LoadingStyle minHeight={minHeight}>
      <FontAwesomeIcon icon={faSpinner} spinPulse className="icone" />
    </LoadingStyle>
  );
};
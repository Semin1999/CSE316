import React from "react";

interface Props {
  children: string;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissable" role="alert">
      <span>
        {children}
        <button
          className="btn-close"
          onClick={onClose}
          type="button"
          aria-label="Close"
          data-bs-dismiss="alert"
        ></button>
      </span>
    </div>
  );
};

export default Alert;

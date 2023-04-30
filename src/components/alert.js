import React from "react";

function alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div>
      {/* "props.alert &&" ye part check krta hai ki props.alert ki value barabar h ki nhi */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type}alert-dismissible fade show`}
          role="alert"
        >
          {/* Barabar h to hi fir ye vala div load krta h */}
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default alert;

import React from "react";
import Spinner from "../../features/Spinner";

const Buttons = ({ action, loading, title, style }) => {
  return (
    <div className="flex justify-center">
      <button onClick={action} className={style} disabled={loading}>
        {loading ? <Spinner /> : `${title}`}
      </button>
    </div>
  );
};

export default Buttons;

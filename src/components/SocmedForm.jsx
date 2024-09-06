import React, { useContext, useState } from "react";
import { StateContext } from "../StateContext";
import MainInput from "./MainInput";

const SocmedForm = () => {
  const {
    socmedData,
    setSocmedData,
    setEditStatus,
    editStatus: { socmed },
  } = useContext(StateContext);
  const [error, setError] = useState("");

  const handleDoneEdit = () => {
    let field = "";
    Object.keys(socmedData).some((key) => {
      if (socmedData[key] === "") {
        field = key;
        return true;
      }
      return false;
    });
    if (field !== "") return setError(field);
    setError("");
    setEditStatus((prev) => ({ ...prev, socmed: false }));
  };

  return (
    <div className="grow divide-y">
      <h1 className="text-lg p-3 font-medium text-gray-900">
        Social Media Settings
      </h1>
      <div className="space-y-3 p-4 border-t">
        {Object.keys(socmedData).map((key, i) => (
          <MainInput
            key={i}
            name={key.replace(/([A-Z])/g, " $1")}
            error={error === key ? "This field is required" : ""}
            value={socmedData[key]}
            placeholder={`Masukkan url ${key} anda...`}
            type={"url"}
            disabled={!socmed}
            newValue={(v) => setSocmedData((prev) => ({ ...prev, [key]: v }))}
          />
        ))}
      </div>
      <div className="p-4">
        <button
          onClick={handleDoneEdit}
          disabled={!socmed}
          className="w-full disabled:bg-gray-300 disabled:text-gray-400 disabled:border-gray-300 bg-sky-200 text-sm text-sky-600 hover:bg-sky-300 hover:text-sky-800 transition-colors font-medium uppercase border border-sky-400 py-2 rounded-md "
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default SocmedForm;

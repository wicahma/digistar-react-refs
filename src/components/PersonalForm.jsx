import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import MainInput from "./MainInput";
import { StateContext } from "../StateContext";

const PersonalForm = () => {
  const {
    personalData,
    setPersonalData,
    setEditStatus,
    editStatus: { personal },
  } = useContext(StateContext);
  const [error, setError] = useState("");

  const typeChooser = (key) => {
    switch (key) {
      case "email":
        return "email";
      case "phone":
        return "tel";
      case "birthday":
        return "date";
      default:
        return "text";
    }
  };

  const handleDoneEdit = () => {
    let field = "";
    Object.keys(personalData).some((key) => {
      if (personalData[key] === "") {
        field = key;
        return true;
      }
      return false;
    });
    if (field !== "") return setError(field);
    setError("");
    setEditStatus((prev) => ({ ...prev, personal: false }));
  };

  return (
    <div className="grow divide-y">
      <h1 className="text-lg p-3 font-medium text-gray-900">
        Personal Settings
      </h1>
      <div className="space-y-3 p-4 border-t">
        {Object.keys(personalData).map((key, i) => (
          <MainInput
            key={i}
            name={key.replace(/([A-Z])/g, " $1")}
            error={error === key ? "This field is required" : ""}
            placeholder={`Masukkan ${key} anda...`}
            value={personalData[key]}
            type={typeChooser(key)}
            disabled={!personal}
            newValue={(v) => setPersonalData((prev) => ({ ...prev, [key]: v }))}
          />
        ))}
      </div>
      <div className="p-4">
        <button
          onClick={handleDoneEdit}
          disabled={!personal}
          className="w-full bg-sky-200 disabled:bg-gray-300 disabled:text-gray-400 disabled:border-gray-300 text-sm text-sky-600 hover:bg-sky-300 hover:text-sky-800 transition-colors font-medium uppercase border border-sky-400 py-2 rounded-md "
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default PersonalForm;

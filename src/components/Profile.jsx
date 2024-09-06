import React from "react";
import { StateContext } from "../StateContext";
import { dateTimeFormatter, phoneNumberFormatter } from "../util/formatter";

const Profile = () => {
  const {
    personalData: {
      fullname,
      title,
      email,
      phone,
      address,
      city,
      country,
      about,
      postalCode,
      birthday,
    },
    socmedData: { website, linkedin, github, twitter, facebook, instagram },
    setEditStatus,
    editStatus: { personal, socmed },
  } = React.useContext(StateContext);
  const fileImageRef = React.useRef();
  const [fileError, setFileError] = React.useState(null);
  const [showDetail, setShowDetail] = React.useState(false);

  const inputHandler = (e) => {
    const [file] = e.target.files;
    if (!file) return setFileError("Silahkan pilih file terlebih dahulu!");
    if (!file.type.startsWith("image"))
      return setFileError("File yang diizinkan hanya berupa gambar!");
    if (file.size > 1024 * 1024 * 4)
      return setFileError("Ukuran file tidak boleh lebih dari 4MB!");

    setFileError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = fileImageRef.current;
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-3 md:w-[350px] w-full">
      <h1 className=" text-lg text-center font-medium text-gray-800">
        Your Profile Preview
      </h1>
      <div className="relative aspect-square h-24 mx-auto overflow-hidden my-5">
        <img
          ref={fileImageRef}
          className="mx-auto border-2 border-gray-800 rounded-[40%] aspect-square h-full w-full"
          src="https://thispersondoesnotexist.com/"
          alt="Profile Picture"
        />
        <input
          type="file"
          accept="image/*"
          onChange={inputHandler}
          className="absolute top-0 left-0 h-full w-full opacity-0"
        />
      </div>
      {fileError && (
        <p className="text-red-500 text-sm text-center">{fileError}</p>
      )}

      <h2 className="text-lg font-medium text-center mt-2 leading-5">
        {fullname}
      </h2>
      <a href={website} target="_blank" className="underline my-3 text-center font-normal text-xs w-full mx-auto block">Go to website</a>
      <h4 className="text-xs leading-3 font-medium text-center text-gray-400">
        {title}
      </h4>
      <h4 className="text-xs leading-4 font-medium text-center text-gray-400">
        {email}
      </h4>

      <div className="flex flex-wrap justify-center gap-1 w-full mt-2">
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full font-medium hover:bg-orange-500 bg-orange-400 text-white text-xs p-1 px-2"
        >
          Linkedin
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full font-medium hover:bg-orange-500 bg-orange-400 text-white text-xs p-1 px-2"
        >
          Github
        </a>
        <a
          href={facebook}
          target="_blank"
          rel="noreferrer"
          className="rounded-full font-medium hover:bg-orange-500 bg-orange-400 text-white text-xs p-1 px-2"
        >
          Facebook
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="rounded-full font-medium hover:bg-orange-500 bg-orange-400 text-white text-xs p-1 px-2"
        >
          Instagram
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noreferrer"
          className="rounded-full font-medium hover:bg-orange-500 bg-orange-400 text-white text-xs p-1 px-2"
        >
          Twitter
        </a>
      </div>
      <div className="mt-5">
        <p className="text-center text-gray-500 font-normal text-xs leading-4">
          <span
            className={`${showDetail ? "line-clamp-none" : "line-clamp-3"}`}
          >
            {about}
          </span>
          <span
            onClick={() => setShowDetail((p) => !p)}
            className="cursor-pointer underline hover:text-gray-600"
          >
            {showDetail ? "Sembunyikan" : " Lihat lebih banyak"}
          </span>
        </p>

        <div className="mt-5 bg-gray-400 rounded-full text-sm font-medium text-center text-gray-700">
          Detail Profile
        </div>
        <div className="mt-2 space-y-1 px-3">
          <p className="text-xs text-gray-500 font-normal flex gap-2">
            <span className="font-medium">Phone:</span>
            {phoneNumberFormatter(phone)}
          </p>
          <p className="text-xs text-gray-500 font-normal flex gap-2">
            <span className="font-medium">Address:</span> {address}
          </p>
          <p className="text-xs text-gray-500 font-normal flex gap-2">
            <span className="font-medium">City:</span> {city}
          </p>
          <p className="text-xs text-gray-500 font-normal flex gap-2">
            <span className="font-medium">Country:</span> {country}
          </p>
          <p className="text-xs text-gray-500 font-normal flex gap-2">
            <span className="font-medium">Postal Code:</span> {postalCode}
          </p>
          <p className="text-xs text-gray-500 font-normal flex gap-2">
            <span className="font-medium">Birthday:</span>
            {dateTimeFormatter(birthday)}
          </p>
        </div>

        <button
          onClick={() =>
            setEditStatus((v) => ({ ...v, personal: !v.personal }))
          }
          disabled={personal}
          className={`w-full mt-5 text-sm flex justify-center items-center disabled:bg-gray-300 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed transition-colors font-medium uppercase border py-2 rounded-md bg-sky-200 text-sky-600 hover:bg-sky-300 hover:text-sky-800 border-sky-400
          }`}
        >
          {personal ? "Editing Profile" : "Edit Profile"}
        </button>
        <button
          onClick={() => setEditStatus((v) => ({ ...v, socmed: !v.socmed }))}
          disabled={socmed}
          className={`w-full mt-1 text-sm flex justify-center items-center disabled:bg-gray-300 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed bg-sky-200 text-sky-600 hover:bg-sky-300 hover:text-sky-800 border-sky-400 transition-colors font-medium uppercase border py-2 rounded-md`}
        >
          {socmed ? "Editing Social Media" : "Edit Social Media"}
        </button>
      </div>
    </div>
  );
};

export default Profile;

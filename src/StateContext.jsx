import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState({
    fullname: "Robby Santoso Rahayudiningrat Wilujeng Kusumawardani",
    title: "Code with Telephaty 🧠",
    email: "mr.codepromax@coding.rip",
    phone: "+628 5151 5151",
    address: "329-1202, Taihei Yamaya,-shi",
    city: "Akita-shi",
    country: "Japan",
    about:
      "Hai! Nama saya Robby Santoso Rahayudiningrat Wilujeng Kusumawardani atau bisa dipanggil petruk, seorang Ninja Koding berpengalaman yang jago ngoding di kegelapan malam dan suka menghilang saat deadline mendekat. Spesialisasi saya? Ngoding sambil ngopi, tentunya! Dengan keahlian tingkat dewa di Vue, Node.js, PostgreSQL, dan JavaScript Magic, saya siap mengubah ide-ide biasa menjadi website yang lebih mulus dari rambut iklan shampoo.",
    postalCode: "1202",
    birthday: "2004-09-26",
  });

  const [socmedData, setSocmedData] = useState({
    website: "https://www.solvin.id/",
    linkedin: "https://www.linkedin.com/feed/",
    github: "https://github.com/",
    twitter: "https://x.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  });

  const [editStatus, setEditStatus] = useState({
    personal: false,
    socmed: false,
  });

  return (
    <StateContext.Provider
      value={{
        personalData,
        setPersonalData,
        socmedData,
        setSocmedData,
        editStatus,
        setEditStatus,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

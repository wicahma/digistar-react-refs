import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import SocmedForm from "./components/SocmedForm";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <main className="flex gap-3 md:flex-nowrap flex-wrap m-4">
        <div className="rounded-lg shadow-lg bg-gray-100 flex grow md:flex-nowrap flex-wrap divide-x divide-dotted divide-gray-500">
          <PersonalForm />
          <SocmedForm />
        </div>
        <Profile />
      </main>
    </>
  );
}

export default App;

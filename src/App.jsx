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
      <main className="min-h-screen flex">
        <div className="flex gap-3 md:flex-nowrap grow flex-wrap p-4 min-h-full">
          <div className="rounded-lg shadow-lg bg-gray-100 flex h-full grow md:flex-nowrap flex-wrap divide-x divide-dotted divide-gray-500">
            <PersonalForm />
            <SocmedForm />
          </div>
          <Profile />
        </div>
      </main>
    </>
  );
}

export default App;

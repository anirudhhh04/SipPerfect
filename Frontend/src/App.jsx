import { useState,useRef } from "react";
import axios from "axios";
import SteamCup from "./components/SteamCup";
import RoomTemperature from "./components/RoomTemperature";
import VolumeSelector from "./components/VolumeSelector";
import FanSlider from "./components/FanSlider";
import CupSelector from "./components/CupSelector";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [teaTemp, setTeaTemp] = useState(95);
  const [roomTemp, setRoomTemp] = useState(24);
  const [volume, setVolume] = useState(250);
  const [fanSpeed, setFanSpeed] = useState(0);
  const [cupMaterial, setCupMaterial] = useState(2);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [loadingText, setLoadingText] = useState("");
  const resultRef = useRef(null);

  const predict = async () => {
                 setLoading(true);
                 setResult(null);
                 const steps = [" Gathering Data..."," Analyzing..."," AI Predicting..."," Finding Perfect Sip..."];
                 let index = 0;
                 setLoadingText(steps[0]);
                 const interval = setInterval(() => {
                                  index++;
                                  if (index < steps.length) {
                                          setLoadingText(steps[index]);
                                  }
                 }, 1200);

                 try {
                        const response = await axios.post( "https://sipperfect.onrender.com/predict",
                             { tea_temp:teaTemp, room_temp:roomTemp, fan_speed:fanSpeed,volume_ml:volume,cup_material:cupMaterial,}
                        );
                        setTimeout(() => {
                            clearInterval(interval);
                            setResult(response.data);
                            setLoading(false);
                            setLoadingText("");
                            setTimeout(() => {
                                    resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center",}); }, 100);
                        }, 5000);

                  } catch (error) {
                            clearInterval(interval);
                            console.error(error);
                            setLoading(false);
                            setLoadingText("");
                     }
  };
 return (
   
  <div className=" min-h-screen bg-gradient-to-br from-[#140d08] via-[#1A120B] to-[#24170d] text-white px-4 md:px-8 py-8 relative overflow-hidden">
    <div className="text-center mb-10">
      <h1 className=" text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300
                     bg-clip-text
                     text-transparent
                    drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
        SipPerfect AI
      </h1>
      <p className="mt-4 text-amber-100 text-lg  md:text-xl">
         Find the perfect moment for your first sip
      </p>
    </div>
    <div className="max-w-3xl mx-auto">
      <SteamCup
        teaTemp={teaTemp}
        setTeaTemp={setTeaTemp}
      />

      <RoomTemperature
        roomTemp={roomTemp}
        setRoomTemp={setRoomTemp}
      />

      <VolumeSelector
        volume={volume}
        setVolume={setVolume}
      />

      <FanSlider
        fanSpeed={fanSpeed}
        setFanSpeed={setFanSpeed}
      />

      <CupSelector
        cupMaterial={cupMaterial}
        setCupMaterial={setCupMaterial}
      />

      {/* Predict Button */}

      <div className="flex justify-center mt-10">

        <button
          onClick={predict}
          disabled={loading}
          className="
            w-67
            h-18
            rounded-full
            bg-gradient-to-r
            from-amber-500
            via-orange-500
            to-amber-500
            text-lg
            font-bold
            tracking-wide
            shadow-lg
            shadow-amber-500/30
            hover:scale-105
            hover:shadow-xl
            hover:shadow-amber-500/50
            active:scale-95
            transition-all
            duration-300
            disabled:cursor-not-allowed
            disabled:opacity-70"
        >
          {loading ? loadingText  : " Predict"}
        </button>
      </div>
      <div className="mt-8">
                 {result && ( <div ref={resultRef}>
                                   <Result result={result} />
                              </div>
                  )}
      </div>

    </div>

  </div>
);
}

export default App;
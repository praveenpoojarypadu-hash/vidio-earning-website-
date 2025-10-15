import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/test")
      .then((res) => setData(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Microworks</h1>
      <p className="text-lg text-gray-700">{data || "Loading..."}</p>
    </main>
  );
}
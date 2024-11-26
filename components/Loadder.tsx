import { PulseLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <PulseLoader color="#36d7b7" size={60} />
    </div>
  );
}

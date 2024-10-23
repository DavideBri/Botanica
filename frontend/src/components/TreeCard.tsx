import { RiToolsFill } from "react-icons/ri";
import { IoCloseSharp, IoNavigateCircleOutline } from "react-icons/io5";
import placeholder from "/placeholder.png";

interface TreeCardProps {
  tipo: string;
  nome: string;
  stato: string;
  ultimaSegnalazione: string;
  onClose: () => void;
}

const TreeCard = ({ tipo, nome, stato, ultimaSegnalazione, onClose }: TreeCardProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex justify-center items-center">
      <div className="bg-white px-6 pt-5 pb-9 rounded-lg shadow-2xl w-150 relative flex flex-col items-center">
        <button onClick={onClose} className="absolute top-3 text-[#878585] right-3 text-2xl">
          <IoCloseSharp size={20} />
        </button>

        <h2 className="text-xl font-bold text-[#334D42] mb-4">{nome}</h2>
        <div className="flex items-center gap-3">
          <img
            src={placeholder}
            alt={nome}
            width={150}
            height={250}
            className="object-cover rounded-lg opacity-75"
            style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
          />

          <div className="text-left w-full px-4">
            <p className="text-[#878585] font-light text-sm mb-1">Type</p>
            <p className="font-normal mb-3">{tipo}</p>
            <p className="text-[#878585] font-light text-sm mb-1">State</p>
            <p className="font-normal mb-3">{stato}</p>
            <p className="text-[#878585] font-light text-sm mb-1">Last Report</p>
            <p className="font-normal mb-3">
              {new Date(ultimaSegnalazione).toLocaleDateString("it-IT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <div className="flex justify-between gap-5 mt-4 w-full">
              <button className="bg-[#334D42] text-[#EFE9CE] p-2 rounded-full shadow-lg">
                <IoNavigateCircleOutline size={30} />
              </button>
              <button className="bg-[#CE6146] text-[#EFE9CE] p-2 rounded-full shadow-lg">
                <RiToolsFill size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeCard;

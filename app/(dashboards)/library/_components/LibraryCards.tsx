import { LibraryCardProps } from "@/types/Library.types";
import React from "react";

const LibraryCard: React.FC<LibraryCardProps> = ({ title, value }) => (
  <div className="bg-[#FEFAEC] border rounded-lg shadow-md p-4 flex flex-col items-center mt-1">
    <span className="text-lg font-semibold text-secondary">{title}</span>
    <span className="text-2xl font-bold mt-2 text-primary">{value}</span>
  </div>
);

export default LibraryCard;
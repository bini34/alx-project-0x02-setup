import React from "react";
import { CardProps } from "../../interfaces/index";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="bg-white shadow rounded p-4 mb-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default Card;

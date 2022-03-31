import Image from "next/image";
import React from "react";

export default function Option({
  link = null,
  clickable = true,
  size,
  onClick = null,
  color,
  header,
  subheader = null,
  icon,
  active = false,
  id,
}: {
  link?: string | null;
  clickable?: boolean;
  size?: number | null;
  onClick?: null | (() => void);
  color: string;
  header: React.ReactNode;
  subheader: React.ReactNode | null;
  icon: string | any;
  active?: boolean;
  id: string;
}) {
  const content = (
    <div
      onClick={onClick}
      className={`flex items-center justify-between w-full p-3 rounded-lg cursor-pointer bg-secondary ${
        !active ? "bg-dark-800 hover:bg-dark-700" : "bg-dark-1000"
      }`}
    >
      <div>
        <div className="flex items-center text-white">
          {active && (
            <div
              className="w-4 h-4 mr-4 rounded-full "
              style={{ background: color }}
            />
          )}
          {header}
        </div>
        {subheader && <div className="mt-2.5 text-xs">{subheader}</div>}
      </div>
      <div
        className="bg-tertiary rounded-full flex justify-center items-center"
        style={{ width: 40, height: 40 }}
      >
        {typeof icon === "string" ? (
          <Image src={icon} alt={"Icon"} width="24px" height="24px" />
        ) : (
          icon
        )}
      </div>
    </div>
  );
  if (link) {
    return <a href={link}>{content}</a>;
  }

  return !active ? (
    content
  ) : (
    <div className="w-full p-px rounded bg-gradient-to-r from-blue to-pink">
      {content}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Users({ initialUsers }: any) {
  const [data, setData] = useState(initialUsers);

  const handleClick = async (event: any) => {
    event.preventDefault();
    const req = await fetch("https://randomuser.me/api/?gender=male&results=100");
    const newData = await req.json();
    setData(newData.results);
  };

  return (
    <div>
      <button onClick={handleClick}>FETCH DATA</button>
      {data.map((user: any, index: number) => {
        return (
          <div key={index}>
            {user.email}
            <img src={user.picture.medium} alt="" />
          </div>
        );
      })}
    </div>
  );
}
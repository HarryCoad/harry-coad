/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { useScramble } from "use-scramble";

export const Name = () => {
  const [name, setName] = useState("Code");

  const { ref, replay } = useScramble({
    text: name,
    speed: 0.2,
    tick: 3,
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setName("Coad");
      replay();
    }, 1500);

    return () => clearTimeout(id);
  }, []);

  return (
    <h1 onClick={replay} className="mb-4 text-4xl">
      Harry <span ref={ref}>{name}</span>
    </h1>
  );
};

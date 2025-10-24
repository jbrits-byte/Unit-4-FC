import React from "react";

const sections = [
  { unit: 3, area: 1, name: "Unit 3 AoS1: Signalling Molecules" },
  { unit: 3, area: 2, name: "Unit 3 AoS2: Immunity" },
  { unit: 4, area: 1, name: "Unit 4 AoS1: Heredity" },
  { unit: 4, area: 2, name: "Unit 4 AoS2: Evolution" }
];

export default function SectionSelector({ setSection }) {
  return (
    <div className="section-selector">
      <h2>Select Section</h2>
      <ul>
        {sections.map(sec => (
          <li key={sec.name}>
            <button onClick={() => setSection(sec)}>{sec.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
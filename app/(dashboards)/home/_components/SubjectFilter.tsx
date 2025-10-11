
import { SubjectFilterProps } from "@/types/Library.types";
import React from "react";



const SubjectFilter: React.FC<SubjectFilterProps> = ({
  subjects,
  selectedSubjects,
  onChange,
}) => (
  <div className="bg-white rounded-lg shadow p-4 border">
    <div className="font-semibold mb-2">Filter by Topics</div>
    <ul className="space-y-2">
      {subjects.map((subject) => (
        <li key={subject} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedSubjects.includes(subject)}
            onChange={() => onChange(subject)}
            className="accent-[#CE7411]"
            id={`subject-${subject}`}
          />
          <label htmlFor={`subject-${subject}`} className="text-gray-700 cursor-pointer">
            {subject}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default SubjectFilter;
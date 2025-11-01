import { SubjectFilterProps } from "@/types/Library.types";
import React from "react";

const getId = (s: any, idx: number) =>
  // prefer topicId, fallbacks to common id fields, finally index
  String(s?.topicId ?? s?.id ?? s?.key ?? s?.value ?? idx);

const getLabel = (s: any) =>
  // prefer topicName, fallbacks to name/label/value or string itself
  typeof s === "string" ? s : s?.topicName ?? s?.name ?? s?.label ?? s?.value ?? JSON.stringify(s);

const SubjectFilter: React.FC<SubjectFilterProps> = ({
  subjects = [],
  selectedSubjects = [],
  onChange,
}) => (
  <div className="bg-white rounded-lg shadow p-4 border">
    <div className="font-semibold mb-2">Filter by Topics</div>
    <ul className="space-y-2">
      {subjects.map((subject, idx) => {
        const id = getId(subject, idx);
        const label = getLabel(subject);
        // selectedSubjects stores topicId strings/values
        const checked = selectedSubjects.includes(id);

        return (
          <li key={id} className="flex items-center gap-2">
            <input
              id={`subject-${id}`}
              type="checkbox"
              checked={checked}
              onChange={() => onChange(id)}
              className="accent-[#CE7411]"
            />
            <label htmlFor={`subject-${id}`} className="text-gray-700 cursor-pointer truncate">
              {label}
            </label>
          </li>
        );
      })}
    </ul>
  </div>
);

export default SubjectFilter;
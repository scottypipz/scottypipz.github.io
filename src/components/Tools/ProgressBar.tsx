import React, { FunctionComponent } from "react"

export interface ProgressBarProps {
  title: String
  fillPercentage: Number
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  title,
  fillPercentage,
}) => {
  return (
    <div className="flex items-stretch mb-2 rounded-lg overflow-hidden">
      <div className="bg-pink-400 bg-opacity-80 py-2 w-44 flex justify-center">
        {title}
      </div>
      <div className="background bg-gray-300 w-full flex items-center">
        <div
          className="thumb bg-orange-300 h-full"
          style={{ width: `${fillPercentage}%` }}
        >
          &nbsp;
        </div>
        <span className="px-2 text-gray-600 text-sm">{String(fillPercentage)}%</span>
      </div>
    </div>
  )
}

export default ProgressBar

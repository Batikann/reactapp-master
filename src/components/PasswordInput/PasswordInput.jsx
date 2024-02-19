import './style.scss'
import { useState } from 'react'

export default function PasswordInput(data) {
  const [visiblityStatus, setVisibilityStatus] = useState(false)

  return (
    <div className="!relative w-full">
      <input
        type={visiblityStatus ? 'text' : 'password'}
        name={data.name}
        className={data.className}
        placeholder={data.placeholder}
        value={data.value}
        onChange={data.onChange}
      />
      <i
        className={
          visiblityStatus
            ? 'visibility-on !absolute !right-0 !top-0 !z-50 !w-4 !h-4'
            : 'visibility-off !absolute !right-0 !top-0 !z-50 !w-4 !h-4'
        }
        onClick={(e) => setVisibilityStatus(!visiblityStatus)}
      ></i>
    </div>
  )
}

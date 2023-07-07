import React, { useState } from 'react'

const SelectList = () => {
    const [selected, setSelected] = useState("");
  return (
    <div>
      <select value={selected} onChange={(e)=>{setSelected(e.target.value)}}>
        <option value="">선택하세용</option>
        <option value="Attention">Attention</option>
        <option value="Hype Boy">Hype Boy</option>
        <option value="Ditto">Ditto</option>
        <option value="Super Shy">Super Shy</option>
      </select>
      <p>{selected}</p>
    </div>
  )
}

export default SelectList


import React from 'react'
import { useState } from 'react'

const SelectList2 = () => {
  const [selected, setSelected] = useState("")
  return (
    <div>
      <select value={selected} onChange={((e)=>setSelected(e.target.value))}>
        <option value="">선택하세요</option>
        <option value="뉴진스">뉴진스</option>
        <option value="르세라핌">르세라핌</option>
        <option value="아이브">아이브</option>
      </select>
      <p>{selected}</p>
    </div>
  )
}

export default SelectList2

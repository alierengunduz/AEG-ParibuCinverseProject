import React from 'react'

const Konum = () => {
  return (
    <div className='w-full h-[350px] bg-[#424242] rounded-2xl flex flex-col gap-y-4 items-center justify-center'>
        <img src="https://www.paribucineverse.com/assets/img/icons/ticket_flow/circle-info.svg" alt="" />
        <span>Konum izni vermeniz gerekiyor!</span>
        <button className='bg-[#98A726] px-14 py-2 rounded-lg'>İzin Ver</button>
    </div>
  )
}

export default Konum
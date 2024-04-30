import React, { useState } from 'react'

const useOnlineSttaus = () => {

    const [status, setstatus] = useState(false)

    window.addEventListener("offline" ,()=>{
        setstatus(true)
    })

    window.addEventListener("online", ()=>{
        setstatus(false)
    })

  return status;

}

export default useOnlineSttaus
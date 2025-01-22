import React from 'react'
import { RULES } from '../../constants/text'
const Rules = () => {
  return (
    <>
<section
				className="flex flex-col justify-center text-white w-[75%] mt-11 backdrop-blur-sm p-4 mb-20 font-kode rounded-lg
				bg-cyan-800/20 shadow-[0px_0px_10px_0px_#3cb7dd]" id="rules">
        <h3 className="text-center text-4xl mb-6 pb-5">Rules and Guidelines</h3>
        <div className='flex flex-col flex-wrap justify-start items-start text-lg ml-10 mb-7'>
            <ul className='list-disc list-inside'>
            {RULES.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>              
            </div>
        </section>

    </>
  )
}

export default Rules

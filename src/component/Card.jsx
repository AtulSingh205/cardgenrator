import React from 'react'

const Card = ({ submitted, removecard }) => {

  return (
    <>
      {submitted.length > 0 && (<div className='h-[400px] w-[350px] bg-[#011e32] flex flex-col items-center justify-start overflow-auto rounded-2xl'>
        {submitted.map((item) => (<div className="m-2  p-4 w-[300px] bg-white rounded-lg shadow-lg text-black text-center">
          <img
            className="h-20 w-20 rounded-full mx-auto mb-3"
            src={item.image}
            alt="User"
          />
          <h1 className="font-bold">Name: {item.name}</h1>
          <h1>Email: {item.email}</h1>
          <h1>Age: {item.age}</h1>
          <h1>Password: {item.password}</h1>
          <button type='button' className="w-[150px] rounded-lg bg-gradient-to-r from-green-400 to-green-500 hover:from-green-400 hover:to-green-600 transition p-2" onClick={() => removecard(item.name)} >Remove</button>
        </div>)
        )

        }
      </div>
      )}
    </>
  )

}

export default Card

import React from 'react'

const Like = () => {
  let obj = JSON.parse(localStorage.getItem("data"))
  // const [state,setState]=(obj)
  
  const del = (id) => {
 localStorage.removeItem("data")
  }
  // console.log(a)
  return (
    <div>
        <div className="row">
            {
                obj.map((ele, ind) => {

                    return <>
                        <div className="flip-card p-2 m-2">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={ele.image} />
                                </div>
                                <div className="flip-card-back">
                                    <h2>Name:{ele.name}</h2>
                                    <hr />
                                    <h3>gender:{ele.gender}</h3>
                                    <h5>species:{ele.species}</h5>
                                    <h6>stauts:{ele.status}</h6>
                                    <hr />
                                    <button className='btn btn-danger' onClick={()=>del(ind)}><h4>Hate @ me</h4></button>
                                </div>
                            </div>
                        </div>

                    </>

                })

            }
        </div>

    </div>
)
}

export default Like
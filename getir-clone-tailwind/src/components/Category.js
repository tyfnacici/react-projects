import React from "react"

const Category = (props) => {
  return (
    <div className="hover:bg-purple-100 py-2 px-2.5 w-26 h-28 rounded-lg">
      <div className="justify-center items-center flex text-center flex-col">
        <img alt={props.alt} src={props.img} className="w-12 h-12 rounded-lg"/>
        <p className="font-semibold pt-2 leading-5">{props.title}</p>
      </div>
    </div>
  )
}

export default Category

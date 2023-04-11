import React from 'react'

export default function Title(props) {
  return (
    <>
      <h1 style={{backgroundColor: 'teal', color: 'white', borderBottom: '5px solid yellow'}}>
        {props.mainTitle}
        <br />
        {props.subTitle}
        </h1>
    </>
  )
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';
import { Button, Alert } from 'react-bootstrap';



export default function Itemlist() {

  // const itemList = [
  //   {
  //     "id": 1,
  //     "name": "apple",
  //     "price": 3,
  //     "image": "apple.jpg",
  //     "description": "Fuji Apple"
  //   },
  //   {
  //     "id": 2,
  //     "name": "orange",
  //     "price": 4,
  //     "image": "orange.jpg",
  //     "description": "Navel Orange"
  //   },
  //   {
  //     "id": 3,
  //     "name": "watermelon",
  //     "price": 5,
  //     "image": "watermelon.jpg",
  //     "description": "Seedless Watermelon"
  //   }
  // ]

  const [itemList, setItemList] = useState([])
  const [input, setInput] = useState('')
  const [showItems, setShowItems] = useState(true)

  useEffect(() => {
    fetch('https://zhikeng.github.io/demoAPI/db.json')
      .then(res => res.json())
      .then(data => setItemList(data))
    localStorage.setItem("ItemName", itemList)
  }, [])

  console.log(itemList)

  const handleClickTrue = () => {
    setShowItems(true)
  }

  const handleClickFalse = () => {
    setShowItems(false)
  }

  const handleSearch = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

  return (
    <>
      <Title mainTitle={'Anni\'s Fruit Store'} />

      {/* <Alert variant='success'>Please choose the items: {input}</Alert> */}
      {/* <input type="text" onChange={e => setInput(e.target.value)} /> */}
      {/* <Button type="submit" onClick={handleSearch}>Search</Button><br /><br /> */}
      {showItems && <Button onClick={handleClickFalse}>Hide items</Button>}
      {!showItems && <Button onClick={handleClickTrue}>Show items</Button>}
      <hr />

      <div className='container'>
        {
          showItems &&
          itemList.map(list => (
            <ul className="containerList" key={list.id}>
              <li>Name: {list.name}</li>
              <div className="productName"><li>Price: ${list.price}</li></div>
              <li>description: {list.description}</li>
              <div className='containerItem'><Link to={'/item/' + list.id}><img src={process.env.PUBLIC_URL + '/img/' + list.image} alt="fail to open img"></img></Link></div>
              <QuantityBtn itemInfo={list} />
            </ul>
          ))
        }
      </div>
    </>
  )
}

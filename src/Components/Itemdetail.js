import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Title from "./Title"
import QuantityBtn from './QuantityBtn';

export default function Itemdetail() {
  let params = useParams();
  const [itemDetail, setItemDetail] = useState(null)

  useEffect(() => {
    fetch('https://zhikeng.github.io/demoAPI/db.json')
      .then(res => res.json())
      .then(data => {
        let itemInfo = data.find((element) => {
          return element.id === parseInt(params.id)
        })
        setItemDetail(itemInfo)
      })
  }, [])

  return (
    <>

      <Title mainTitle={'No discount today'} />

      {
        itemDetail &&
        <>
          <Title mainTitle={itemDetail.name + '\'s detail'} />

          <table width="100%">
            <tbody>
              <tr>
                <td width="45%" padding="10">
                  <p>Name: {itemDetail.name}</p>
                  <p>Price: ${itemDetail.price}</p>
                  <p>description: {itemDetail.description}</p>
                  <QuantityBtn itemInfo={itemDetail} />
                </td>
                <td align="right">
                  <img src={process.env.PUBLIC_URL + '/img/' + itemDetail.image} alt="fail to open img" width="400"></img>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      }

      <Link to="/"><div className="backTogoodsListBtn">Back to main page</div></Link>

    </>
  )
}

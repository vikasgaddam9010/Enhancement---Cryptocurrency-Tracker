import {FaSortAmountDownAlt, FaSortAmountUp} from 'react-icons/fa'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CrptocurrenciesList = props => {
  const {cryptoList, handleToSortRank, sorteing} = props

  const icon =
    sorteing === '-' ? (
      <FaSortAmountDownAlt style={{marginRight: '5px', marginTop: '1px'}} />
    ) : (
      <FaSortAmountUp style={{marginRight: '5px', marginTop: '1px'}} />
    )

  return (
    <>
      <div className="table-container d-flex">
        <div style={{display: 'flex'}}>
          <p
            onClick={() => {
              handleToSortRank()
            }}
            style={{
              width: '50px',
              marginRight: '15px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {icon}
            Rank
          </p>
        </div>
        <div style={{display: 'flex'}}>
          <p style={{width: '150px'}}>Coin</p>
          <p style={{width: '100px'}}>Price</p>
        </div>
        <div style={{display: 'flex'}}>
          <p className="d-none-sm" style={{width: '70px'}}>
            1H
          </p>
          <p style={{width: '70px'}}>24H</p>
          <p className="d-none-sm" style={{width: '70px'}}>
            7d
          </p>
        </div>
        <p className="d-none-sm" style={{width: '150px'}}>
          24h Volume
        </p>
        <p className="d-none-sm" style={{width: '150px'}}>
          Market Cap
        </p>
      </div>
      <ul className="ul-css">
        {cryptoList.map(eachItem => (
          <CryptocurrencyItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    </>
  )
}
export default CrptocurrenciesList

/**/

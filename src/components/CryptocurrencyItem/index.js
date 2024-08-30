import './index.css'

const convert = each => ({
  marketCap: each.market_cap,
  percentChange1h: each.percent_change_1h,
  percentChange24h: each.percent_change_24h,
  percentChange7d: each.percent_change_7d,
  price: each.price,
  volume24h: each.volume_24h,
})

const CryptocurrencyItem = props => {
  const {eachItem} = props

  const camelCase = convert(eachItem.quote.USD)

  console.log(camelCase)

  const {
    marketCap,
    percentChange1h,
    percentChange7d,
    percentChange24h,
    price,
    volume24h,
  } = camelCase

  const color1h = percentChange1h < 0 ? 'red' : 'green'
  const color24H = percentChange24h < 0 ? 'red' : 'green'
  const color7d = percentChange7d < 0 ? 'red' : 'green'

  return (
    <li className="li-css-list di-flex-list">
      <div className="type-coin-list d-flex">
        <div style={{display: 'flex'}}>
          <p style={{width: '50px', marginRight: '15px'}}>{eachItem.id}</p>
        </div>
        <div style={{display: 'flex'}}>
          <p style={{width: '150px'}}>{eachItem.name}</p>
          <p style={{width: '100px'}}>${price.toFixed(2)}</p>
        </div>
        <div style={{display: 'flex'}}>
          <p style={{width: '70px', color: color1h}}>
            {percentChange1h.toFixed(2)}
          </p>
          <p style={{width: '70px', color: color24H}}>
            {percentChange24h.toFixed(2)}
          </p>
          <p style={{width: '70px', color: color7d}}>
            {percentChange7d.toFixed(2)}
          </p>
        </div>
        <p style={{width: '150px'}}>{volume24h.toFixed(2)}</p>
        <p style={{width: '150px'}}>{marketCap.toFixed(2)}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

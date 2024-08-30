import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CrptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoList: [], isLoaderActive: true}

  state = {cryptoList: [], isLoaderActive: true, sorteing: '-'}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const url1 = `http://localhost:3000/api/cryptocurrency/`
    const apiRes = await fetch(url1)

    if (apiRes.ok) {
      const data = await apiRes.json()
      const list = data.data
      list.sort((a, b) => a.id - b.id)
      this.setState({cryptoList: list, isLoaderActive: false})
    }
  }

  handleToSortRank = () => {
    const {cryptoList, sorteing} = this.state
    if (sorteing === '-') {
      const list = cryptoList.sort((a, b) => b.id - a.id)

      this.setState({cryptoList: list, sorteing: '+'})
    } else if (sorteing === '+') {
      const list = cryptoList.sort((a, b) => a.id - b.id)

      this.setState({cryptoList: list, sorteing: '-'})
    }
  }

  render() {
    const {cryptoList, sorteing, isLoaderActive} = this.state

    return (
      <div className="bg-container">
        <h1 className="head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-logo"
        />
        {isLoaderActive ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#FFFFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-crypto">
            <CrptocurrenciesList
              cryptoList={cryptoList}
              handleToSortRank={this.handleToSortRank}
              sorteing={sorteing}
            />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker

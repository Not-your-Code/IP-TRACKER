import React, { Component } from 'react'
import Item from './Item.js';
import './css/tracker.css'
import Spinner from './Spinner.js';
import Accor from './Accor.js';
export class Tracker extends Component {
  constructor() {
    super();
    this.state = {
      source: {},
      user: "Your Detail",
      loading: true,
      userIp: "",
      userReq: true,

    }
  }

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata = async () => {
    try {
      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=2f7baf801a3e492ea7fe6b45cdefb8b0&geo`
      const data = await fetch(url)
      let parsed_data = await data.json()

      this.setState(
        {
          source: parsed_data,
          loading: false,
          user: "User Detail"

        }

      )

    } catch (error) {
      console.log(error)
    }

  }

  fetchUserReq = async () => {
    try {
      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=2f7baf801a3e492ea7fe6b45cdefb8b0&ip=${this.state.userIp}`
      const data = await fetch(url)
      let parsed_data = await data.json()

      this.setState(
        {
          source: parsed_data,
          loading: false,
          user: "Tracked IP"

        }

      )

    } catch (error) {
      console.log(error)
    }


  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.fetchUserReq();
  }
  handleOnChange = (e) => {
    this.setState({
      userIp: e.target.value,
    })



  }
  render() {

    return (
      <>
      <div className='Cont'>
        <div className='head'>
          <h1 className='Title'>{this.state.user}  </h1>
          <form onSubmit={this.handleOnSubmit}>
            <input type="text" placeholder='Track Any IP' onChange={this.handleOnChange}></input>
            <button type='submit'>Search</button>
         </form>
        </div>
        
       <div className='mid'>
          <Item ip_add={this.state.source['ip']} city={this.state.source['city']} zipcode={this.state.source['zipcode']} isp={this.state.source['isp']} con={this.state.source['country_name']}
          con_img={this.state.source['country_flag']}
          state_prov={this.state.source['state_prov']}
          />
        </div>
        {this.state.loading && <Spinner />}
        
      
      <div className='align-bottom'>
        <Accor/>
      </div>
      </div>
      </>
    )
  }
}

export default Tracker
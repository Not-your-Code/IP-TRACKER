import React, { Component } from 'react'
import Item from './Item.js';
import './css/tracker.css'
export class Tracker extends Component {
    constructor(){
        super();
        this.state = {
            source:{},
            user: "Your Detail",
        }
    }

    componentDidMount(){
        this.fetchdata();
    }

    fetchdata = async ()=>{
     try{
        const url = `https://api.ipgeolocation.io/ipgeo?apiKey=2f7baf801a3e492ea7fe6b45cdefb8b0&geo`
        const data =  await fetch(url)
        let parsed_data = await data.json()
       console.log(parsed_data)
       this.setState(
        { source : parsed_data,
          

        }
       
      )
       
      }catch(error){
        console.log(error)
      }
      console.log(`${this.state.source['state_prov']}`)
    }
  render() {
  
    return (
      <div>
        <h1 className='Title'>{this.state.user}  </h1>
        <Item ip_add = {this.state.source['ip']} city = {this.state.source['city']} zipcode = {this.state.source['zipcode']} isp={this.state.source['isp']} con = {this.state.source['country_name']}
                    con_img = {this.state.source['country_flag']}
                    state_prov ={this.state.source['state_prov']}
                    />
      </div>
    )
  }
}

export default Tracker
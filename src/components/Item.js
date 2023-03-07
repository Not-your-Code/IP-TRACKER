import React, { Component } from 'react'
import './css/item.css'
export class Item extends Component {
    render() {
        let { ip_add, city, con_img, con, zipcode, isp , state_prov} = this.props
        return (
            <div className='container'>

                <div className='header'>
                    <ul className='item_list'>
                        <label>
                            IP :-
                        </label>
                        <li>
                            <h2 id='ip'>{this.props.ip_add}</h2>
                        </li>
                    </ul>
                    <ul className='item_list'>
                        <label>
                            Country:-
                        </label>
                        <li>
                            <h3 id='con'> {this.props.con}</h3>
                        </li>
                    </ul>
                    <img src={this.props.con_img} />

                </div>
                <div className='footer'>
                    <ul className='item_list'>
                        <label>
                            City :-
                        </label>
                        <li>
                            <h2 id='ip'> {this.props.city}</h2>
                        </li>
                    </ul>
                    <ul className='item_list'>
                        <label>
                            Zipcode:-
                        </label>
                        <li>
                            <h2 id='ip'> {this.props.zipcode}</h2>
                        </li>
                    </ul>
                    <ul className='item_list'>
                        <label>
                            state :-
                        </label>
                        <li>
                            <h2 id='ip'>{this.props.state_prov} </h2>
                        </li>
                    </ul>


                    
                </div>
                <div className='footer2'>
                <ul className='item_list'>
                        <label>
                            Isp :-
                        </label>
                        <li>
                            <h2 id='ip'> {this.props.isp}</h2>
                        </li>
                    </ul>

                </div>


            </div>
        )
    }
}

export default Item
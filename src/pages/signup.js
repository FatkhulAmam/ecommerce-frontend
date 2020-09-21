import React, { Component } from 'react'
import Props from '../component/props'

export default class signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            makanan:'bakso'
        }
    }

    gantiMakanan = (nama) =>{
        this.setState({
            makanan:nama
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.makanan}</h1>
                <button onClick={()=>{this.gantiMakanan('mie Ayam')}}>ganti</button>
                <Props makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}

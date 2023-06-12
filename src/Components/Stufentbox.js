import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserData } from "../api";
import "./Stufentbox.css"
import img from '../images/jpg/profile-img-ex.jpg'
import img2 from '../src/images/svg/delete.svg'

export default class Stufentbox extends Component{
    render(){
        return( 
            <div class="student-box">
				<div class="student-img">
					<img src={img}/>
				</div>
				<div class="student-name">{this.props.name} {this.props.surname}</div>
				<div class="student-delete">
					<img src={img2}/>
				</div>
                
			</div>
        )
    }
}
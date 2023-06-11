import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserData } from "../api";
import "./Stufentbox.css"
import img from '../images/jpg/profile-img-ex.jpg'

export default class Stufentbox extends Component{
    render(){
        return( 
            <div class="student-box">
				<div class="student-img">
					<img src="{% static 'my_classes/images/jpg/profile-img-ex.jpg' %}"/>
				</div>
				<div class="student-name">{this.props.name} {this.props.surname}</div>
				<div class="student-delete">
					<img src={img}/>
				</div>
                
			</div>
        )
    }
}
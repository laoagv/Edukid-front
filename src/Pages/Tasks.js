import React, {Component} from "react";
import Header from "../Components/Header";
import { checkAuth, fetchWithAuth, getUserData } from "../api";
import Classes from "../Components/Classes";
import img from '../images/svg/plus.svg'

export default class Tasks extends Component{
    
    render(){
        return(     
        <section>
			<div class="app-container container">
				<h1>Мои классы</h1>
				<Classes/>
				<div class="class-box">
					<button class="btn-in-profile" id="class-btn"><img src={img}/>Добавить класс</button>
				</div>
			</div>
		</section>
        )
    }
}
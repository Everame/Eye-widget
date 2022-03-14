import React, { Component } from 'react';
import {Style01, Style02, Style03, Style04, Style05, Style06, Style07, Style08, Style09, Style10, Style11, Style12} from '../../assets/icons';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import ChooseItem from '../../components/ChooseItem/chooseItem';
import Button from '../../components/Button/button';
import './eighthPage.scss';

export default class eighthPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSelected: false,
            values: [],
            valuesStr: ""
        }
    }

    select(e){
        e.preventDefault();
        const current = e.currentTarget;
        const check = current.querySelector('.check');
        const currentValue = current.getAttribute('data-value');
        const btn = document.querySelector('.funBtn');
        if(this.state.isSelected === true){
            this.setState({isSelected: false, values: this.state.values.filter((value) => { return value !== currentValue})});
            current.style.border = "none";
            check.style.opacity = 0;
            console.log(this.state.values.length);
        }else{
            this.setState({isSelected: true, values: this.state.values.push(currentValue)});
            current.style.border = "1.96px solid #2196F3";
            check.style.opacity = 1;
        }
        if(this.state.values.length === 0){
            btn.disabled = true;
        }else{
            btn.disabled = false;
        }
        this.setState({valuesStr: this.state.values.join(",")});
    }
  render() {
        var slider = document.querySelector('.sliderWrapper');
        var sliderRow = slider.querySelector('.sliderRow');
        var slides = slider.querySelectorAll('.sliderItem');
        var slideWidth = slides[0].offsetWidth;
      const items = [
          {icon: Style01, value: "rectangle", title: "Rectangle"},
          {icon: Style04, value: "browline", title: "Browline"},
          {icon: Style07, value: "aviator", title: "Aviator"}, 
          {icon: Style10, value: "geometric", title: "Geometric"},
          {icon: Style02, value: "wayframe", title: "Wayframe"},
          {icon: Style05, value: "round", title: "Round"},
          {icon: Style08, value: "oval", title: "Oval"},
          {icon: Style11, value: "oversized", title: "Oversized"}, 
          {icon: Style03, value: "cat_eye", title: "Cat Eye"},
          {icon: Style06, value: "rimless", title: "Rimless"},
          {icon: Style09, value: "square", title: "Square"},
          {icon: Style12, value: "wrap", title: "Wrap"}];  
    return (
        <div className='page eighth'>
            <HeaderProgressMenu page={8} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
            <div className="titlesPage">
                <h3>Which frame style are you looking for?</h3>
                <h4>You can pick more than one.</h4>
            </div>
            <div className="sliderWrapper">
                <div className="sliderRow">
                    {
                        items.map((item) => {
                            return <ChooseItem url={item.value} value={item.value} next={this.select.bind(this)} isSelected={this.state.isSelected} icon={item.icon} title={item.title} type="sliderItem"/>
                        })
                    }
                </div>
            </div>
            <Button url={"shape="+this.state.valuesStr} text="Continue" next={this.props.next} action="arrSend" />
        </div>
    )
  }
}
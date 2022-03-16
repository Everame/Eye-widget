import React, { Component } from 'react';
import {Style01, Style02, Style03, Style04, Style05, Style06, Style07, Style08, Style09, Style10, Style11, Style12} from '../../assets/icons';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import Slider from '../../components/Slider/slider';
import Button from '../../components/Button/button';

export default class eighthPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDisabled: true,
            values: [],
            valuesStr: ""
        }
    }

    select(e){
        e.preventDefault();
        const current = e.currentTarget;
        const check = current.querySelector('.check');
        const currentValue = current.getAttribute('data-value');
        var newValues = this.state.values;
        const index = newValues.indexOf(currentValue);
        if(current.classList.contains('selected')){
            current.classList.remove('selected');
            this.state.values.splice(index,1);
            current.style.border = "1px solid rgba(231, 235, 237, 0.80141)";
            check.style.opacity = 0;
        }else{
            current.classList.add('selected');
            this.state.values.push(currentValue);
            current.style.border = "3px solid #2196F3";
            check.style.opacity = 1;
        }
        if(this.state.values.length === 0){
            this.setState({isDisabled: true});
        }else{
            this.setState({isDisabled: false});
        }
        this.setState({valuesStr: this.state.values.join(",")});
    }
  render() {
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
        <div className={`page sliderPage ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`}>
            <HeaderProgressMenu page={8} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
            <div className="titlesPage">
                <h3>Which frame style are you looking for?</h3>
                <h4>You can pick more than one.</h4>
            </div>
            <Slider items={items} select={this.select.bind(this)} type="imgTextItem"/>
            <Button url={"shape="+this.state.valuesStr} value={this.state.valuesStr} text="Continue" isDisabled={this.state.isDisabled} next={this.props.next} action="arrSend" />
        </div>
    )
  }
}
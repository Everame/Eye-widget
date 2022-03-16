import React, { Component } from 'react';
import {MainPic} from '../../assets/icons';
import Button from '../../components/Button/button';
import HeaderStartMenu from "../../components/HeaderStart/headerStartMenu";
import './startPage.scss';

export default class startPage extends Component {
  render() {
    return (
      <div className={`page start ${this.props.animation === "fadeRight" ? "fadeRight":""}`}>
          <HeaderStartMenu url={""} next={this.props.next} type="start"/>
          <img src={MainPic} className="startImg" alt="Start picture" />
          <h2>Let's find your perfect pair!</h2>
          <p className="description">
            Take the quiz to easily discover your perfect fit from thousands of styles
          </p>
          <Button url={""} value={null} text="Start Now" next={this.props.next}/>
      </div>
    )
  }
}

import React, { Component } from 'react';
import {OvalMen,OvalWomen,BetweenMen,RoundMen,RoundWomen,BetweenWomen,FacesBoth,FacesOval,FacesRound} from '../../assets/icons';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import ChooseItemDouble from '../../components/ChooseItemDouble/chooseItemDouble';
import './sixthPage.scss';

export default class sixthPage extends Component {
  render() {
    return (
        <div className='page'>
            <HeaderProgressMenu page={6} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
            <h3>Every face shape has a perfect fit. What’s yours?</h3>

            <div className="itemsContainer">
                <ChooseItemDouble  url={"face_shape=long"} value={"long"} next={this.props.next} icon={this.props.prevValue === "5" ? OvalWomen: this.props.prevValue === "4" ? OvalMen: FacesOval} title="I have a long face"/>
                <ChooseItemDouble  url={"face_shape=round"} value={"round"} next={this.props.next} icon={this.props.prevValue === "5" ? RoundWomen: this.props.prevValue === "4" ? RoundMen: FacesRound} title="I have a round face"/>
                <ChooseItemDouble  url={"face_shape=between"} value={"between"} next={this.props.next} icon={this.props.prevValue === "5" ? BetweenWomen: this.props.prevValue === "4" ? BetweenMen: FacesBoth} title="In between"/>
            </div>

            <a href="" className="skipLink" onClick={this.props.skip}>I don’t know</a>
        </div>
    )
  }
}
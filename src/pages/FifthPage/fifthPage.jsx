import React, { Component } from 'react';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import ChooseTextItem from '../../components/ChooseTextItem/chooseTextItem';
import ChooseItemDouble from '../../components/ChooseItemDouble/chooseItemDouble';
import { Dark, Light, Photochromic } from '../../assets/icons';
import './fifthPage.scss';

export default class fifthPage extends Component {
    render() {
        if(this.props.prevValue === "210"){
            return (
                <div className={`page fifth ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`} data-testid="eyeDef">
                    <HeaderProgressMenu page={5} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
                    <h3>Would you like to protect your eyes from light emanating from screens?</h3>
                    <div className="itemsContainer">
                        <ChooseTextItem url={"blue_light=true"} value={true} next={this.props.next} title="Yes"/>
                        <ChooseTextItem url={"blue_light=false"} value={false} next={this.props.next} title="No"/>
                    </div>
                </div>
            )
        }else{
            return (
                <div className={`page fifth ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`} data-testid="sunDef">
                    <HeaderProgressMenu page={5} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
                    <h3>When you’re out and about, which shade of lenses do you prefer?</h3>
                    <div className="itemsContainer">
                        <ChooseItemDouble url={"shade=dark"} value={"dark"} next={this.props.next} icon={Dark} title="Dark Shade"/>
                        <ChooseItemDouble  url={"shade=light "} value={"light"} next={this.props.next} icon={Light} title="Light Shade"/>
                        <ChooseItemDouble  url={"shade=transition"} value={"transition"} next={this.props.next} icon={Photochromic} title="Transitioning Shade"/> 
                    </div>
                </div>
            )
        }
    }
}
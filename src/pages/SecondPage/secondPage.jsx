import React, { Component } from 'react';
import {GlassesMen, GlassesWomen, SunglassesMen, SunglassesWomen} from '../../assets/icons';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import ChooseItem from '../../components/ChooseItem/chooseItem';
import './secondPage.scss';

export default class secondPage extends Component {
  render() {
    return (
        <div className='page'>
            <HeaderProgressMenu page={2} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
            <h3>What type of glasses are you looking for?</h3>
            {this.props.prevValue === "5" ?
            <ChooseItem url={"eyewear_type=210"} value={210} next={this.props.next} icon={GlassesWomen} title="Eyeglasses"/>
            :
            <ChooseItem url={"eyewear_type=210"} value={210} next={this.props.next} icon={GlassesMen} title="Eyeglasses"/>
            }
            {this.props.prevValue === "5" ?
            <ChooseItem url={"eyewear_type=211"} value={211} next={this.props.next} icon={SunglassesWomen} title="Sunglasses"/>
            :
            <ChooseItem url={"eyewear_type=211"} value={211} next={this.props.next} icon={SunglassesMen} title="Sunglasses"/>
            }
            <a href="" className="skipLink" onClick={this.props.skip}>I want to see both</a>
        </div>
    )
  }
}
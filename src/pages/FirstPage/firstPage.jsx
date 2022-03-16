import React, { Component } from 'react';
import {Men, Women} from '../../assets/icons';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import ChooseItem from '../../components/ChooseItem/chooseItem';
import './firstPage.scss';

export default class firstPage extends Component {
  render() {
    return (
        <div className={`page first ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`}>
            <HeaderProgressMenu page={1} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
            <h3>You are looking for</h3>
            <ChooseItem url={"gender=5"} value={5} next={this.props.next} icon={Women} title="Women's Styles"/>
            <ChooseItem url={"gender=4"} value={4} next={this.props.next} icon={Men} title="Men's Styles"/>
            <a href="" className="skipLink" onClick={this.props.skip}>I'd like to see both</a>
        </div>
    )
  }
}
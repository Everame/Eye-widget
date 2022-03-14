import React, { Component } from 'react';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import ChooseTextItem from '../../components/ChooseTextItem/chooseTextItem';
import './seventhPage.scss';

export default class seventhPage extends Component {
    render() {
        return (
            <div className='page fivth'>
                <HeaderProgressMenu page={7} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
                <h3>How would you define your facial features?</h3>
                <div className="itemsContainer">
                    <ChooseTextItem url={"facial_features=sharp"} value={"sharp"} next={this.props.next} title="Sharp"/>
                    <ChooseTextItem url={"facial_features=rounded"} value={"rounded"} next={this.props.next} title="Rounded"/>
                    <ChooseTextItem url={"facial_features=between"} value={"between"} next={this.props.next} title="In between"/>
                </div>
                <a href="" className="skipLink" onClick={this.props.skip}>I don’t know</a>
            </div>
        )
    }
}
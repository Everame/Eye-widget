import React, { Component } from 'react';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import TextItem from '../../components/TextItem/textItem';
import './ninthPage.scss';

export default class ninthPage extends Component {
    render() {
        return (
            <div className={`page ninth ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`}>
                <HeaderProgressMenu page={9} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
                <h3>Are you looking for any particular eyewear brands?</h3>
                <div className="itemsContainer">
                    <TextItem title="Yes, I have some in mind" action={this.props.skip}/>
                    <TextItem action={this.props.doubleSkip} title="No, brand isn't important"/>
                </div>
            </div>
        )
    }
}
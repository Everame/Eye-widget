import React, { Component } from 'react';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import TextItem from '../../components/TextItem/textItem';
import ChooseTextItem from '../../components/ChooseTextItem/chooseTextItem';
import AlertImg from '../../components/AlertImg/alertImg';
import { Like } from '../../assets/icons';
import './thirdPage.scss';

export default class thirdPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isYes: false
        }
    }

    setIsYes(e){
        e.preventDefault();
        this.setState({isYes: true});
    }
    render() {
        if(this.state.isYes === false){
            return (
                <div className={`page ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`}>
                    <HeaderProgressMenu page={3} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
                    <h3>Do you need vision correction?</h3>
                    <div className="itemsContainer">
                        <TextItem title="Yes" action={this.setIsYes.bind(this)}/>
                        <TextItem action={this.props.skip} title="No"/>
                    </div>
                    <a href="/" className="skipLink" onClick={this.props.skip}>Skip</a>
                    <div className="loadLayer">
                        <AlertImg icon={Like} animation="loading" />
                        <h2>Let's get to know you!</h2>
                    </div>
                </div>
            )
        }else{
            return (
                <div className={`page third ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`}>
                    <HeaderProgressMenu page={3} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
                    <h3>What do you need your glasses for?</h3>
                    <div className="itemsContainer">
                        <ChooseTextItem url={"lenstype=6"} value={6} next={this.props.next} title="Near Vision"/>
                        <ChooseTextItem url={"lenstype=6"} value={6} next={this.props.next} title="Distance Vision"/>
                        <ChooseTextItem url={"lenstype=7"} value={7} next={this.props.next} title="Multifocal / Progressive"/>
                    </div>
                    <a href="/" className="skipLink" onClick={this.props.skip}>Skip</a>
                    <div className="loadLayer">
                        <AlertImg icon={Like} animation="loading" />
                        <h2>Let's get to know you!</h2>
                    </div>
                </div>
            )
        }
    }
}
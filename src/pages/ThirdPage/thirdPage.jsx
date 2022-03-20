import React, { Component } from 'react';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import TextItem from '../../components/TextItem/textItem';
import ChooseTextItem from '../../components/ChooseTextItem/chooseTextItem';
import AlertImg from '../../components/AlertImg/alertImg';
import { Like } from '../../assets/icons';
import './thirdPage.scss';

//3 страница с выбором необходимости коррекции зрения
export default class thirdPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isYes: false //Состояние клика по кнопке "Yes"
        }
    }

    //Функция смены состояния клика по кнопке "Yes"
    setIsYes(e){
        e.preventDefault();
        this.setState({isYes: true});
    }
    render() {
        //Отображение нужного контента в зависимости от состояния клика по кнопке "Yes"
        if(this.state.isYes === false){
            return (
                <div className={`page ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`}>
                    <HeaderProgressMenu page={3} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
                    <h3>Do you need vision correction?</h3>
                    <div className="itemsContainer">
                        <TextItem title="Yes" action={this.setIsYes.bind(this)} testID="yesBtn"/>
                        <TextItem action={this.props.skip} title="No" testID="noBtn"/>
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
                    <h3 data-testid="secondScreenTitle">What do you need your glasses for?</h3>
                    <div className="itemsContainer">
                        <ChooseTextItem url={"lenstype=6"} value={6} next={this.props.next} title="Near Vision" testID={"secondScreenBtn"}/>
                        <ChooseTextItem url={"lenstype=6"} value={6} next={this.props.next} title="Distance Vision" testID={"secondScreenBtn"}/>
                        <ChooseTextItem url={"lenstype=7"} value={7} next={this.props.next} title="Multifocal / Progressive" testID={"secondScreenBtn"}/>
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
import React, { Component } from 'react';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import ChooseTextItem from '../../components/ChooseTextItem/chooseTextItem';
import { Sizes} from '../../assets/icons';
import './fourPage.scss';

export default class thirdPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isKnown: true
        }
    }

    setIsKnown(e){
        e.preventDefault();
        this.setState({isKnown: false});
    }
    render() {
        if(this.state.isKnown === true){
            return (
                <div className='page four'>
                    <HeaderProgressMenu page={4} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
                    <h3>What’s your current frame size?</h3>
                    <img src={Sizes} alt="Sizes" className='infoImg'/>
                    <div className="itemsContainer">
                        <a href={"frame_size=68"} className="chooseTextItemDouble" id='nextLink' data-value={68} onClick={this.props.next}>
                            <div className="itemContent">
                                <div className="itemText">
                                    <p className="itemTitle">
                                        Small 
                                    </p>
                                </div>
                                <div className="itemTextDescr">
                                    <p className="itemDescr">
                                        42-48 mm
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href={"frame_size=67"} className="chooseTextItemDouble" id='nextLink' data-value={67} onClick={this.props.next}>
                            <div className="itemContent">
                                <div className="itemText">
                                    <p className="itemTitle">
                                        Medium 
                                    </p>
                                </div>
                                <div className="itemTextDescr">
                                    <p className="itemDescr">
                                        49-53 mm
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href={"frame_size=66"} className="chooseTextItemDouble" id='nextLink' data-value={66} onClick={this.props.next}>
                            <div className="itemContent">
                                <div className="itemText">
                                    <p className="itemTitle">
                                        Large 
                                    </p>
                                </div>
                                <div className="itemTextDescr">
                                    <p className="itemDescr">
                                        54-58 mm
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="" className="skipLink" onClick={this.setIsKnown.bind(this)}>I don’t know</a>
                </div>
            )
        }else{
            return (
               <div className='page'>
                    <HeaderProgressMenu page={4} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
                    <h3>How wide would you say your face is?</h3>
                    <div className="itemsContainer">
                        <ChooseTextItem url={"frame_size=66"} value={66} next={this.props.next} title="Wider Than Average"/>
                        <ChooseTextItem url={"frame_size=67"} value={67} next={this.props.next} title="Average"/>
                        <ChooseTextItem url={"frame_size=68"} value={68} next={this.props.next} title="Narrower Than Average"/>
                    </div>
                    <a href="" className="skipLink" onClick={this.props.skip}>I’m not sure</a>
                </div>
            )
        }
    }
}
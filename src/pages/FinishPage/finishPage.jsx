import React, { Component } from 'react';
import {GiveIcon} from '../../assets/icons';
import Button from '../../components/Button/button';
import HeaderStartMenu from "../../components/HeaderStart/headerStartMenu";
import AlertImg from '../../components/AlertImg/alertImg';
import './finishPage.scss';

//11 конечная страница с кнопкой отправки сформированного URL
export default class finishPage extends Component {
  render() {
    return (
      <div className={`page finish ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`}>
          <HeaderStartMenu url={this.props.url} next={this.props.reset} type="finish"/>
          <AlertImg icon={GiveIcon} />
          <h2>We've found some awesome frames for you!</h2>
          <p className="description">
            Send the results to your email to receive special discounts.
          </p>
          <Button url={""} value={""} text="Send" isDisabled={false} next={this.props.send} />
          <p className="disclaimer">By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</p>
      </div>
    )
  }
}
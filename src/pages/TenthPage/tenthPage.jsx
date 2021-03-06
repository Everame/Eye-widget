import React, { Component } from 'react';
import {Brand01, Brand02, Brand03, Brand04, Brand05, Brand06, Brand07, Brand08, Brand09, Brand10, Brand11, Brand12} from '../../assets/icons';
import HeaderProgressMenu from "../../components/HeaderProgressMenu/headerProgressMenu";
import Slider from '../../components/Slider/slider';
import Button from '../../components/Button/button';

//10 страница с выбором дизайна очков
export default class tenthPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDisabled: true, //Состояние работоспособности кнопки подтверждения выбора
            values: [], //Массив со всем выбранными брендами
            valuesStr: "" //Строка для отправки в массив всех выборов пользователя
        }
    }

    //Функция выбора бренда
    select(e){
        e.preventDefault();
        const current = e.currentTarget;
        const check = current.querySelector('.check');
        const currentValue = current.getAttribute('data-value');
        var newValues = this.state.values; //Копирование текущих значений массива с брендами
        const index = newValues.indexOf(currentValue); //Индекс последнего выбранного элемента
        
        //Проверка "Выбран ли элемент?"
        if(current.classList.contains('selected')){ //Если выбран
            current.classList.remove('selected');
            this.state.values.splice(index,1); //Удаление выбранного элемента из массива с выбранными брендами
            current.style.border = "1px solid rgba(231, 235, 237, 0.80141)";
            check.style.opacity = 0;
        }else{ //Если не выбран
            current.classList.add('selected');
            this.state.values.push(currentValue); //Добавление выбранного элемента в массив с выбранными брендами
            current.style.border = "3px solid #2196F3";
            check.style.opacity = 1;
        }

        //Проверка количества выбранных элементов
        if(this.state.values.length === 0){
            this.setState({isDisabled: true}); //Изменение работоспособности кнопки подтверждения выбора, если элементов 0
        }else{
            this.setState({isDisabled: false}); //Изменение работоспособности кнопки подтверждения выбора, если элементов >0
        }
        this.setState({valuesStr: this.state.values.join(",")}); //Обновление строки для отправки в массив всех выборов пользователя
    }
  render() {

    //Объект со всеми элементами слайдера
      const items = [
          {icon: Brand01, value: "ray_ban"},
          {icon: Brand04, value: "oakley"},
          {icon: Brand07, value: "gucci"}, 
          {icon: Brand10, value: "armane_exchange"},
          {icon: Brand02, value: "hilary_duff"},
          {icon: Brand05, value: "prada"},
          {icon: Brand08, value: "versage"},
          {icon: Brand11, value: "vogue_eyewaer"}, 
          {icon: Brand03, value: "michael_kors"},
          {icon: Brand06, value: "coach"},
          {icon: Brand09, value: "tory_burch"},
          {icon: Brand12, value: "burberry"}];  
    return (
        <div className={`page sliderPage ${this.props.animation === "fadeLeft" ? "fadeLeft":"fadeRight"}`}>
            <HeaderProgressMenu page={10} startUrl={this.props.url} prev={this.props.prev} reset={this.props.reset}/>
            <div className="titlesPage">
                <h3>Choose your favorite brands</h3>
                <h4 style={{margin: "0 0 1px 0"}}>You can pick more than one.</h4>
            </div>
            <Slider items={items} select={this.select.bind(this)} type='imgItem'/>
            <Button url={"brand="+this.state.valuesStr} value={this.state.valuesStr} text="Continue" isDisabled={this.state.isDisabled} next={this.props.next} action="arrSend" />
        </div>
    )
  }
}
import React from 'react';
import ChooseItem from '../ChooseItem/chooseItem';
import "./slider.scss";

//Компонент слайдера с поддержкой touch-устройств
function slider(props) {

    let isDragging = false, //состояние события перетягивания
        startPos = 0, //начальная позиция события перетягивания
        currentTranslate = 0, //расстояние на которое было совершено перетягивание
        prevTranslate = 0, //предыдущее расстояние перетягивания
        animationID = 0; //id текущей анимации

    //Функция обеспечивающая адаптивность слайдера при уменьшении ширины родительского блока
    function adaptive(){
        const mainCont = document.getElementById('glasses-quiz-widget');
        const sliderRow = document.querySelector('.sliderRow');

        if(mainCont.clientWidth < 1000){ //Если ширина родительского контейнера меньше 1000, то меняем ориентирование слайдера на "от левого края"
            sliderRow.style.justifyContent = "flex-start";
        }
    }

    //Алгоритм действий при нажатии на слайдер
    function touchStart(event){
        const sliderLayer = document.querySelector('.sliderLayer');
        startPos = getPositionX(event); //присваивание текущей начальной позиции
        isDragging = true; //изменение состояния события перетягивания

        //изменение внешнего вида курсора
        sliderLayer.classList.add('grabbing');
        sliderLayer.classList.remove('grab');
    }

    //Алгоритм действий при отпускании кнопки мыши со слайдера
    function touchEnd(){
        const sliderWrapper = document.querySelector('.sliderWrapper');
        const sliderItem = document.querySelector('.sliderRow a');
        const sliderLayer = document.querySelector('.sliderLayer');
        isDragging = false; //изменение состояния события перетягивания
        cancelAnimationFrame(animationID); //отмена анимации по id
        const sliderRowWidth = (sliderItem.clientWidth * 4) + 40; //Ширина контейнера со всеми элементами слайдера
        var lowLimit = 0; //Нижняя граница для свойства translate()

        //Изменение значения нижней границы в зависимости от ширины контейнера со всеми элементами
        if(sliderRowWidth > sliderWrapper.clientWidth){
            lowLimit = sliderWrapper.clientWidth - (sliderRowWidth + 20);
        } else if(sliderRowWidth < sliderWrapper.clientWidth){
            lowLimit = 0;
        }

        //Возвращение элементов слайдера к границам общего контейнера при их нарушении
        if(currentTranslate > 0){
            currentTranslate = 0;
            setSliderPosition()
        }else if(currentTranslate <= lowLimit){
            currentTranslate = lowLimit;
            setSliderPosition()
        }
        prevTranslate = currentTranslate; //Обновление расстояния предыдущего перетягивания 

        //изменение внешнего вида курсора и видимости внешнего слоя
        sliderLayer.classList.remove('grabbing');
        sliderLayer.classList.add('grab');
        sliderLayer.classList.remove('show');
        sliderLayer.classList.add('hide');
    }

    //Алгоритм действий перетягивании слайдера
    function touchMove(event){
        if(isDragging){ //Проверка стаутса перетягивания
            const sliderWrapper = document.querySelector('.sliderWrapper');
            const sliderLayer = document.querySelector('.sliderLayer');
            const sliderItem = document.querySelector('.sliderRow a');
            const sliderRowWidth = (sliderItem.clientWidth * 4) + 40; //Ширина контейнера со всеми элементами слайдера
            var lowLimit = 0; //Нижняя граница для свойства translate()

            //Изменение значения нижней границы в зависимости от ширины контейнера со всеми элементами
            if(sliderRowWidth > sliderWrapper.clientWidth){
                lowLimit = sliderWrapper.clientWidth - (sliderRowWidth + 20);
            } else if(sliderRowWidth < sliderWrapper.clientWidth){
                lowLimit = 0;
            }

            //Прекращение translateX() при нарушении границ на 10px 
            if(currentTranslate > (lowLimit - 10) && currentTranslate <= 10){
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPos;
            }
            animationID = requestAnimationFrame(animation); //Обновление текущего id анимации

            //изменение видимости внешнего слоя
            sliderLayer.classList.remove('hide');
            sliderLayer.classList.add('show');
        }
    }

    //Функция определения текущей позиции мыши
    function getPositionX(event){
        return event.type.includes('mouse') ? event.pageX : 
            event.touches[0].clientX;
    }

    //Функция обновления анимации
    function animation(){
        if(isDragging){
            setSliderPosition();
            requestAnimationFrame(animation);
        }
    }

    //Функция изменения свойства translate у контейнера с элементами слайдера
    function setSliderPosition(){
        const sliderRow = document.querySelector('.sliderRow');
        sliderRow.style.transform = `translate(${currentTranslate}px)`;
    }

  return (
    <div className="sliderWrapper" onLoad={adaptive} onTouchStart={touchStart} onTouchEnd={touchEnd} onTouchMove={touchMove} onMouseDown={touchStart} onMouseMove={touchMove} onMouseUp={touchEnd} onMouseLeave={touchEnd}>
        <div className="sliderRow">
            {
                props.items.map((item, index) => {
                    index += 1;
                    return (
                        <React.Fragment key={index}>
                            <ChooseItem url={item.value} value={item.value} next={props.select} icon={item.icon} title={item.title} type={props.type} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove}/>
                        </React.Fragment>
                    )
                })
            }
        </div>
        <div className="sliderLayer grab" onTouchStart={touchStart} onTouchEnd={touchEnd} onTouchMove={touchMove} onMouseDown={touchStart} onMouseMove={touchMove} onMouseUp={touchEnd} onMouseLeave={touchEnd}></div>
    </div>
  )
}

export default slider;
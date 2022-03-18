import React from 'react';
import ChooseItem from '../ChooseItem/chooseItem';
import "./slider.scss";

function slider(props) {

    let isDragging = false,
        startPos = 0,
        currentTranslate = 0,
        prevTranslate = 0,
        animationID = 0;

    function touchStart(event){
        const sliderLayer = document.querySelector('.sliderLayer');
        startPos = getPositionX(event);
        isDragging = true;

        sliderLayer.classList.add('grabbing');
        sliderLayer.classList.remove('grab');
    }

    function touchEnd(){
        const sliderWrapper = document.querySelector('.sliderWrapper');
        const sliderItem = document.querySelector('.sliderRow a');
        const sliderLayer = document.querySelector('.sliderLayer');
        isDragging = false;
        cancelAnimationFrame(animationID);
        const sliderRowWidth = (sliderItem.clientWidth * 4) + 40;
        var lowLimit = 0;
        if(sliderRowWidth > sliderWrapper.clientWidth){
            lowLimit = sliderWrapper.clientWidth - (sliderRowWidth + 20);
        } else if(sliderRowWidth < sliderWrapper.clientWidth){
            lowLimit = 0;
        }
        if(currentTranslate > 0){
            currentTranslate = 0;
            setSliderPosition()
        }else if(currentTranslate <= lowLimit){
            currentTranslate = lowLimit;
            setSliderPosition()
        }
        prevTranslate = currentTranslate;

        sliderLayer.classList.remove('grabbing');
        sliderLayer.classList.add('grab');
        sliderLayer.classList.remove('show');
        sliderLayer.classList.add('hide');
    }

    function touchMove(event){
        if(isDragging){
            const sliderWrapper = document.querySelector('.sliderWrapper');
            const sliderLayer = document.querySelector('.sliderLayer');
            const sliderItem = document.querySelector('.sliderRow a');
            const sliderRowWidth = (sliderItem.clientWidth * 4) + 40;
            var lowLimit = 0;
            if(sliderRowWidth > sliderWrapper.clientWidth){
                lowLimit = sliderWrapper.clientWidth - (sliderRowWidth + 20);
            } else if(sliderRowWidth < sliderWrapper.clientWidth){
                lowLimit = 0;
            }
            if(currentTranslate > (lowLimit - 10) && currentTranslate <= 10){
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPos;
            }
            animationID = requestAnimationFrame(animation);
            sliderLayer.classList.remove('hide');
            sliderLayer.classList.add('show');
        }
    }

    function getPositionX(event){
        return event.type.includes('mouse') ? event.pageX : 
            event.touches[0].clientX;
    }

    function animation(){
        if(isDragging){
            setSliderPosition();
            requestAnimationFrame(animation);
        }
    }

    function setSliderPosition(){
        const sliderRow = document.querySelector('.sliderRow');
        sliderRow.style.transform = `translate(${currentTranslate}px)`;
    }
  return (
    <div className="sliderWrapper" onTouchStart={touchStart} onTouchEnd={touchEnd} onTouchMove={touchMove} onMouseDown={touchStart} onMouseMove={touchMove} onMouseUp={touchEnd} onMouseLeave={touchEnd}>
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
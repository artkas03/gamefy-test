'use client';
import classNames from 'classnames';
import React from 'react'
import { useSwiper } from 'swiper/react'

import './styles.scss';
import { Button } from '@nextui-org/react';

export const HomepageSliderButton = ({
  isPrevButton = true,
  onClick,
}) => {
  const swiper = useSwiper();

  const handleOnClick = (speed) => {
    isPrevButton ? swiper.slidePrev(speed) : swiper.slideNext(speed);
  };

  return (
    <Button 
      onClick={onClick}
      className={classNames("slider-button", {
        "slider-button-right": !isPrevButton,
      })}
      isIconOnly 
      startContent={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5999 12.7098C10.5061 12.6169 10.4317 12.5063 10.381 12.3844C10.3302 12.2625 10.3041 12.1318 10.3041 11.9998C10.3041 11.8678 10.3302 11.7371 10.381 11.6152C10.4317 11.4934 10.5061 11.3828 10.5999 11.2898L15.1899 6.70982C15.2836 6.61685 15.358 6.50625 15.4088 6.38439C15.4595 6.26253 15.4857 6.13183 15.4857 5.99982C15.4857 5.8678 15.4595 5.7371 15.4088 5.61524C15.358 5.49338 15.2836 5.38278 15.1899 5.28982C15.0025 5.10356 14.749 4.99902 14.4849 4.99902C14.2207 4.99902 13.9672 5.10356 13.7799 5.28982L9.18986 9.87982C8.62806 10.4423 8.3125 11.2048 8.3125 11.9998C8.3125 12.7948 8.62806 13.5573 9.18986 14.1198L13.7799 18.7098C13.9661 18.8946 14.2175 18.9987 14.4799 18.9998C14.6115 19.0006 14.7419 18.9754 14.8638 18.9256C14.9856 18.8758 15.0964 18.8025 15.1899 18.7098C15.2836 18.6169 15.358 18.5063 15.4088 18.3844C15.4595 18.2625 15.4857 18.1318 15.4857 17.9998C15.4857 17.8678 15.4595 17.7371 15.4088 17.6152C15.358 17.4934 15.2836 17.3828 15.1899 17.2898L10.5999 12.7098Z" fill="white"/>
        </svg>
      }
    />
  )
}

'use strict';

import React from 'react';

export default function (props, state) {
    var classString = 'row';

    if(state.isHighlighted) {
      classString += ' highlight';
    }

    if(props.isSelected) {
      classString += ' selected';
    }

    var randomImg = 'https://api.adorable.io/avatars/285/' + props.item.name.replace(" ","") + '.png'

    return (
      <div className={classString}
        onClick={this.handleClick}>
        <div className='pic-holder'>
          <img className='pic' src={randomImg}></img>
        </div>
        <div className='name-dob'>
          <span className='name'>{props.item.name}</span>
          <span className='dob'>{props.item.dob}</span>
        </div>
        <div className='doctor'>{props.item.doctor}</div>
        <div className='appointment-time'>{props.item.timeFriendly}</div>
      </div>
    );
}

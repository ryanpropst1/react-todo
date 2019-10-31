import React from 'react';
import { facalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
// import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(facalendar);


export class CalDate extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

    render() {
        return (
          <div className='date'>
            console.log(this.state.date);
                <FontAwesome name='calendar' />{this.state.date}
            </div>
        );
    }
}

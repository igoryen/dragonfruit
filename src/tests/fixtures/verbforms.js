import moment from 'moment';

export default [{
    id: '1',
    spa: 'yo',
    rus: 'я',
    createdAt: 0
}, {
    id: '2',
    spa: 'tu',
    rus: 'ты',
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    spa: 'vos',
    rus: 'нас',
    createdAt: moment(0).add(4, 'days').valueOf()
}];
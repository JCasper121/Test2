//import _ from 'lodash';
// import * as helper from "./helper";
// import navigation, {greeting, multiply} from './navigation';
import { add } from 'lodash';
import moment from 'moment';

// console.log("Navigation: ",navigation());
// console.log("Greeting: ",greeting);
// console.log("Multiplier: ",multiply(5, 6));

// console.log(helper.greeting, helper.multiply(4,4));

// const birthDay = moment();
// console.log(birthDay.format('MMM Do YYYY'));

const sixMonthsAgo = moment().subtract(6, 'months');
console.log(sixMonthsAgo.format('MMM Do YYYY'));
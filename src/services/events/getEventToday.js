// import axios from 'axios';
// import moment from 'moment';

// const request = axios.create({
//     baseURL: 'https://itss2-be-5617.onrender.com',
// });

// const startToday = moment().startOf('day').valueOf();
// const endToday = moment().endOf('day').valueOf();
// const data = {
//     startDate: startToday,
//     endDate: endToday
// }
// export const getEventsToday = async () => {
//     try {
//         const res = await request.post('/event/list', data)
//         return res.data

//     } catch (error) {
//         console.log('getListEvent ' + error)
//     }
// }

// export const countEventsToday = async () => {
//     try {
//         const res = await request.post('/event/count', data)
//         return res.data

//     } catch (error) {
//         console.log('countListEvent ' + error)
//     }
// }


import moment from 'moment';

// Function to fetch events locally based on a date range
export const getEventsToday = () => {
  const startToday = moment().startOf('day').valueOf();
  const endToday = moment().endOf('day').valueOf();
  
  // Simulate fetching events from localStorage (replace with your actual data logic)
  const events = JSON.parse(localStorage.getItem('events')) || [];
  
  // Filter events based on the date range
  const filteredEvents = events.filter(event => event.start >= startToday && event.endd <= endToday);
  
//   return filteredEvents;
  return { responseCode: 200, message: "eventoday", data: filteredEvents };

};

// Function to count events locally based on a date range
export const countEventsToday = () => {
  const startToday = moment().startOf('day').valueOf();
  const endToday = moment().endOf('day').valueOf();
  
  // Simulate counting events from localStorage (replace with your actual data logic)
  const events = JSON.parse(localStorage.getItem('events')) || [];
  
  // Filter and count events based on the date range
  const count = events.reduce((acc, event) => {
    if (event.start >= startToday && event.endd <= endToday) {
      return acc + 1;
    }
    return acc;
  }, 0);
  
  return { responseCode: 200, message: "eventoday", data: count };
//   return count;
};

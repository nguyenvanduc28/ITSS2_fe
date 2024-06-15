import axios from 'axios';

const request = axios.create({
    baseURL: 'https://itss2-be-5617.onrender.com',
});

// export const getListEvents = async (data) => {
//     try {
//         const res = await request.post('/event/list', data)
//         console.log(res.data);
//         return res.data

//     } catch (error) {
//         console.log('getListEvent ' + error)
//     }
// }

// export const getListEventPriority = async () => {
//     try {
//         const res = await request.get('/event/priority')
//         console.log('priority',res.data);
//         return res.data

//     } catch (error) {
//         console.log('getListEventPriority ' + error)
//     }
// }

export const getListEventNoti = async () => {
    try {
        const res = await request.get('/event/noti')
        console.log('noti', res.data);
        return res.data

    } catch (error) {
        console.log('getListEventNoti ' + error)
    }
}



//


// Function to fetch events locally based on a date range
export const getListEvents = async (data) => {

    // Simulate fetching events from localStorage (replace with your actual data logic)
    const events = JSON.parse(localStorage.getItem('events')) || [];

    // Filter events based on the date range
    const filteredEvents = events.filter(event => event.start >= data.startDate && event.endd <= data.endDate);
    //   return filteredEvents;
    return { responseCode: 200, message: "eventoday", data: filteredEvents };
};


export const getListEventPriority = async () => {
    try {
        // Simulate fetching prioritized events (replace with your actual data logic)
        const events = JSON.parse(localStorage.getItem('events')) || [];

        // Sort events by rating (descending) and start date (ascending)
        const sortedEvents = events.sort((a, b) => {
            if (a.rating !== b.rating) {
                return b.rating - a.rating; // Sort by rating descending
            } else {
                return a.start - b.start; // Sort by start date ascending if ratings are the same
            }
        });

        console.log('priority', sortedEvents);
        //   return sortedEvents;
        return { responseCode: 200, message: "sortedEvents", data: sortedEvents };
    } catch (error) {
        console.log('getListEventPriority ' + error);
        throw error; // Optionally handle errors
    }
};
import axios from 'axios';
const request = axios.create({
    baseURL: 'https://itss2-be-5617.onrender.com',
});

// export const createEvent = async (data) => {
//     try {
//         const res = await request.post('/event', data)
//         return res.data

//     } catch (error) {
//         console.log('createEvent ' + error)
//     }
// }

// export const updateEvent = async (data) => {
//     try {
//         const res = await request.post('/event', data)
//         return res.data

//     } catch (error) {
//         console.log('updateEvent ' + error)
//     }
// }



// Assuming you have a React component where you handle events

// Function to create or update events locally
const saveEventLocally = (eventData) => {
    let events = JSON.parse(localStorage.getItem('events')) || [];

    // Check if event exists in localStorage
    const existingEventIndex = events.findIndex(e => e.id === eventData.id);

    if (existingEventIndex !== -1) {
        // Update existing event
        events[existingEventIndex] = eventData;
    } else {
        // Add new event
        events.push(eventData);
    }

    // Save updated events array back to localStorage
    localStorage.setItem('events', JSON.stringify(events));
    if(eventData.noti) localStorage.setItem('email', eventData.email);
};

// Function to create an event
export const createEvent = async (data) => {
    try {
        // Simulate API call success (optional)
        const eventDto1 = { ...data, id: Math.floor(Math.random() * 1000) }; // Example: Generate a random ID
        saveEventLocally(eventDto1);
        console.log('da tao:', JSON.parse(localStorage.getItem('events')) || []);
        await request.post('/event', data)
        
        return { responseCode: 200, message: "created event", data: eventDto1 };
    } catch (error) {
        console.log('createEvent ' + error);
        throw error; // Optionally handle errors
    }
};

// Function to update an event
export const updateEvent = async (data) => {
    try {
        // Simulate API call success (optional)
        saveEventLocally(data);
        await request.post('/event', data)
        return { responseCode: 200, message: "updated event", data: data };
    } catch (error) {
        console.log('updateEvent ' + error);
        throw error; // Optionally handle errors
    }
};

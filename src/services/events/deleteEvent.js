import axios from 'axios';
const request = axios.create({
    baseURL: 'https://itss2-be-5617.onrender.com',
});

// export const deleteEvent = async (event) => {
//     try {
        // const res = await request.delete(`/event/${event.id}`)
//         return res.data

//     } catch (error) {
//         console.log('deleteEvent ' + error)
//     }
// }


// Assuming you have imported axios and configured request as shown in your code

// Function to delete an event locally
export const deleteEvent = async (event) => {
    try {
      // Simulate API call success (optional)
      const events = JSON.parse(localStorage.getItem('events')) || [];
      
      // Filter out the event to be deleted
      const updatedEvents = events.filter(e => e.id !== event.id);
      
      // Save updated events array back to localStorage
      localStorage.setItem('events', JSON.stringify(updatedEvents));
    //   await request.delete(`/event/${event.id}`)
      
      return { responseCode: 200, message: "deleted event" };
    } catch (error) {
      console.log('deleteEvent ' + error);
      throw error; // Optionally handle errors
    }
  };
  
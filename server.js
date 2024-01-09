const { MongoClient } = require('mongodb');

// Function to connect to MongoDB
async function connectToDatabase() {
    const uri = 'mongodb://127.0.0.1:27017/';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to the database');
        return client.db('newYearCountdown');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        throw err;
    }
}

// Function to insert countdown data into MongoDB
async function insertCountdownData(db, data) {
    const countdownCollection = db.collection('countdown');

    try {
        const result = await countdownCollection.insertOne(data);
        console.log('Countdown data inserted:', result.insertedId);
    } catch (err) {
        console.error('Error inserting countdown data:', err);
        throw err;
    }
}
// Function to format time units (add leading zero if less than 10)


// Function to calculate days (replace with actual logic)
function calculateDays() {
    // Replace this with your logic to calculate days
    return 10; // Placeholder value
}
function calculateHours() {
    // Replace this with your logic to calculate hours
    return 5; // Placeholder value
}
function calculateMinutes() {
    // Replace this with your logic to calculate minutes
    return 30; // Placeholder value
}
// Function to calculate seconds (replace with actual logic)
function calculateSeconds() {
    // Replace this with your logic to calculate seconds
    return 45; // Placeholder value
}
function formatTimeUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
}
// Function to update countdown on the client side
function newYearCountdown() {
    // ... existing countdown logic ...

    // Example: Assume days, hours, minutes, and seconds are calculated here
    const days = calculateDays();
    const hours = calculateHours();
    const minutes = calculateMinutes();
    const seconds = calculateSeconds();

    const countdownData = {
        days: days,
        hours: formatTimeUnit(hours),
        minutes: formatTimeUnit(minutes),
        seconds: formatTimeUnit(seconds)
    };

    // Call the function to connect to MongoDB and insert data
    connectToDatabase()
        .then((db) => insertCountdownData(db, countdownData))
        .catch((err) => console.error('Error updating countdown and inserting data:', err));
}

// Rest of your existing code ...

// Start the New Year Countdown
newYearCountdown();

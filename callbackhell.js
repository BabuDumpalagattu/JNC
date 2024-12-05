function selectFoodItem(foodItem, callback) {
    setTimeout(() => {
        console.log(`Food item selected: ${foodItem}`);
        callback(null, foodItem);
    }, 1000);
}

function checkAvailability(foodItem, callback) {
    setTimeout(() => {
        console.log(`Checking availability of ${foodItem}...`);
        const isAvailable = true; // Simulate availability
        if (isAvailable) {
            callback(null, foodItem);
        } else {
            callback('Food item not available');
        }
    }, 1000);
}

function placeOrder(foodItem, callback) {
    setTimeout(() => {
        console.log(`Order placed for ${foodItem}`);
        callback(null, `OrderID-${Math.random().toString(36).substring(7)}`);
    }, 1000);
}

function makePayment(orderId, callback) {
    setTimeout(() => {
        console.log(`Payment made for Order ID: ${orderId}`);
        callback(null, 'PaymentID-12345');
    }, 1000);
}

function sendConfirmation(paymentId, callback) {
    setTimeout(() => {
        console.log(`Confirmation sent for Payment ID: ${paymentId}`);
        callback(null, 'Confirmation Sent!');
    }, 1000);
}

// Executing the steps in a callback hell pattern
selectFoodItem('Pizza', (err, foodItem) => {
    if (err) return console.error(err);

    checkAvailability(foodItem, (err, availableItem) => {
        if (err) return console.error(err);

        placeOrder(availableItem, (err, orderId) => {
            if (err) return console.error(err);

            makePayment(orderId, (err, paymentId) => {
                if (err) return console.error(err);

                sendConfirmation(paymentId, (err, message) => {
                    if (err) return console.error(err);
                    console.log(message);
                });
            });
        });
    });
});

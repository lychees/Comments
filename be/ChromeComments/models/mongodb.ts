import mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', {
    server: {
        auto_reconnect: true,
        socketOptions: {
            keepAlive: 1
        }
    },
    db: {
        numberOfRetries: 3,
        retryMiliSeconds: 1000,
        safe: true
    }
});

export default mongoose;
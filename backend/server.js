const axios = require('axios');
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const PORT = 5000;
const app = express();
const upload = multer();
// const corsOptions = {
//     origin: "http://localhost:3000"
// };
// app.use(cors(corsOptions));
app.use(express.json());



app.post('/', upload.none(), async (req, res) => {
    try {
    const data = req.body;
    console.log('Received data:', data);
        // Use dynamic import() to load the ES module


        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch('https://billpay.conmasol.com/', fetchOptions);
        const responseData = await response.json();

        console.log('Data forwarded successfully:', responseData);

        res.json(responseData);



    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

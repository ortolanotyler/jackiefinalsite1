// pages/api/indexNow.js
export default async function handler(req, res) {
    // Replace this with your actual IndexNow API key
    const indexNowKey = 'YOUR_INDEXNOW_API_KEY'; // Place your IndexNow key here
  
    // URL of the page you want to submit to Bing
    const urlToSubmit = req.body.url; // Adjust this according to your needs
  
    const response = await fetch(`https://www.bing.com/indexnow?url=${encodeURIComponent(urlToSubmit)}&key=${indexNowKey}`, {
      method: 'GET',
    });
  
    if (response.ok) {
      res.status(200).json({ message: 'URL submitted successfully to Bing IndexNow.' });
    } else {
      res.status(500).json({ message: 'Failed to submit URL to Bing IndexNow.' });
    }
  }
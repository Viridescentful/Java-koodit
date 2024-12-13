'use strict';

document.getElementById('Search').addEventListener('submit', async function(event) {
            event.preventDefault();

            const query = document.getElementById('query').value;

            try {

                const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);

                if (!response.ok) {
                    console.error(`Error status: ${response.status}`);
                    return;
                }

                const results = await response.json();

                console.log("Results:", results);
            } catch (error) {
                console.error("Error:", error);
            }
        });

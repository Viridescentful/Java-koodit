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

                const resultsContainer = document.getElementById('results');
                resultsContainer.innerHTML = '';

                results.forEach(tvShow => {
                    const show = tvShow.show;

                    const article = document.createElement('article');

                    const title = document.createElement('h2');
                    title.textContent = show.name;
                    article.appendChild(title);

                    const link = document.createElement('a');
                    link.href = show.url;
                    link.target = "_blank";
                    link.textContent = "View Details";
                    article.appendChild(link);

                    if (show.image?.medium) {
                        const image = document.createElement('img');
                        image.src = show.image.medium;
                        image.alt = show.name;
                        article.appendChild(image);
                    }

                    if (show.summary) {
                        const summary = document.createElement('div');
                        summary.innerHTML = show.summary; // Summary is already HTML formatted
                        article.appendChild(summary);
                    }

                    resultsContainer.appendChild(article);
                });
            } catch (error) {
                console.error("Error:", error);
            }
        });
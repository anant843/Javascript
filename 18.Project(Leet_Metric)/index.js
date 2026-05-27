document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");

    function isValidUsername(username) {
        if (username.trim() === "") {
            alert("Username cannot be empty");
            return false;
        }

        const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
        const isValid = usernameRegex.test(username);

        if (!isValid) {
            alert("Invalid username. Use 3–20 letters, numbers, _ or -");
        }
        return isValid;
    }

    async function fetchuserDetails(username) {
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const targetUrl = "https://leetcode.com/graphql/";

            const graphql = JSON.stringify({
                query: `
                query userSessionProgress($username: String!) {
                    allQuestionsCount {
                        difficulty
                        count
                    }
                    matchedUser(username: $username) {
                        submitStats {
                            acSubmissionNum {
                                difficulty
                                count
                            }
                        }
                    }
                }`,
                variables: { username }
            });

            const response = await fetch(targetUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: graphql
            });

            if (!response.ok) {
                throw new Error("Unable to fetch data");
            }

            const data = await response.json();
            console.log("Fetched Data:", data);

        } catch (error) {
            console.error(error);
            statsContainer.innerHTML = `<p>No data found</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    searchButton.addEventListener("click", function () {
        const username = usernameInput.value;
        if (isValidUsername(username)) {
            fetchuserDetails(username);
        }
    });

});

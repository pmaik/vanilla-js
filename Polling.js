let count = 1;
function pollingChatMessage() {
    console.log("Polling chats...");

    fetch(`https://dummyjson.com/posts/${count}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data?.title);
            if (count < 5) {
                count++;
                setTimeout(pollingChatMessage, 5000);
            }
        })
        .catch((error) => {
            console.log("Error in fetching post: ", error);
            if (count < 5) {
                count++;
                setTimeout(pollingChatMessage, 5000);
            }
        });
}

pollingChatMessage();

// function fetchPost(id = 1) {
//     console.log("Fetching post...", id);

//     fetch(`https://dummyjson.com/posts/${id}`)
//         .then((response) => response.json())
//         .then((post) => {
//             console.log("Post: ", post);
//         })
//         .catch((error) => {
//             console.log("Error: ", error);
//         });
// }

// // Start polling
// const intervalId = setInterval(fetchPost, 2000);

// // Stop polling after 30 seconds
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Polling stops");
// }, 30000);

// function repeteWithDelay() {
//     console.log("Repete with delay", count++);
//     if (count > 5) {
//         return;
//     }
//     setTimeout(repeteWithDelay, 2000);
// }

// repeteWithDelay();

// const intervalId = setInterval(
//     (p1, p2) => {
//         console.log("count is: ", count, p1, p2);
//         count++;

//         if (count > 5) {
//             clearInterval(intervalId);
//         }
//     },
//     1000,
//     "param1",
//     "param2"
// );

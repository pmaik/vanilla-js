// Promise: Promises in javascript is an object that represents
// an eventual completion or failure of an async operation.
const userListWrapper = document.getElementById("user-list-wrapper");
const fetchUserButton = document.getElementById("fetch-user-button");
const USER_API_URL = "https://dummyjson.com/users";

const fetchUser = async () => {
    try {
        const response = await fetch(`${USER_API_URL}?limit=30`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const usersJson = await response.json();
        return usersJson;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

fetchUserButton.addEventListener("click", async (e) => {
    fetchUserButton.disabled = true;
    userListWrapper.innerHTML = "Loading users.....";

    const users = await fetchUser();
    console.log("users", users);

    fetchUserButton.disabled = false;
    userListWrapper.innerHTML = "";

    if (!users) {
        userListWrapper.innerHTML = "Error loading users. Please try again.";
        return;
    }

    const list = document.createElement("ol");
    users?.users.map((user) => {
        const li = document.createElement("li");
        li.textContent = user.firstName + " " + user.lastName;
        list.appendChild(li);
    });

    userListWrapper.appendChild(list);
});

// fetchUserButton.addEventListener("click", () => {
//     fetchUserButton.disabled = true;
//     userListWrapper.innerHTML = "Loading users.....";

//     fetch(`${USER_API_URL}?limit=25`)
//         .then((response) => response.json())
//         .then((users) => {
//             fetchUserButton.disabled = false;
//             userListWrapper.innerHTML = "";

//             if (!users) {
//                 userListWrapper.innerHTML =
//                     "Error loading users. Please try again.";
//                 return;
//             }

//             const list = document.createElement("ol");
//             users?.users.map((user) => {
//                 const li = document.createElement("li");
//                 li.textContent = user.firstName + " " + user.lastName;
//                 list.appendChild(li);
//             });

//             userListWrapper.appendChild(list);
//         })
//         .catch((error) => console.error(error));
// });

// JavaScript Promise Methods provide powerful ways to work with asynchronous operations.
// Here are the key Promise methods with examples:

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 resolved");
        // reject("P1 rejected"); // will reject after 5 seconds
    }, 5000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("P2 resolved");
    }, 500);
});

async function handlePromise() {
    console.log("Quick console");

    const pr1 = await p1;
    console.log(
        "handlePromise will be suspended for when promise is resolving "
    );
    console.log("p1", p1);

    const pr2 = await p2;
    console.log("Waiting for p2 ");
    console.log("p2", p2);
}
handlePromise();

const p3 = Promise.resolve("P3 resolved");
const p4 = Promise.reject("P4 rejected");
const p5 = fetchUser(); // This is the actual promise example.
const p6 = "This will also behave like a promise";

// 1. Promise.all(): Waits for all promises to resolve or rejects if any promise fails.
// Promise.all([p1, p2, p3, p4, p5])
//     .then((res) => console.log("Promise.all: ", res))
//     .catch((error) => console.error("Promise.all: ", error));

// // 2. Promise.allSettled(): Waits for all promises to complete (resolve or reject)
// // and returns their statuses.
// Promise.allSettled([p1, p2, p3, p4, p5])
//     .then((res) => console.log("Promise.allSettled: ", res))
//     .catch((error) => console.error("Promise.allSettled: ", error));

// // 3. Promise.race(): Returns the result of the first promise that settles (either resolve or reject).
// Promise.race([p1, p2, p3, p4, p5])
//     .then((res) => console.log("Promise.race: ", res))
//     .catch((error) => console.error("Promise.race: ", error));

// // 4. Promise.any(): Returns the first resolved value, ignoring rejections (fails only if all reject).
// Promise.any([p1, p2, p3, p4, p5])
//     .then((res) => console.log("Promise.any: ", res))
//     .catch((error) => console.error("Promise.any: ", error, error.errors));

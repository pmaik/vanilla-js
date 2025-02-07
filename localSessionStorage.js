// 1. Note: localStrage stores data with domain name
// For different domain name localStorege will be different
// But it will not deleted when tab is closed or refreshed
console.log("localStorage", localStorage);
localStorage.setItem("name", "Maik");
localStorage.setItem("name1", "Maik Kumar");
console.log("getItem ", localStorage.getItem("name1"));

localStorage.removeItem("name");
localStorage.removeItem("name1");
console.log("localStorage", localStorage);
console.log(localStorage.length);

// 2.  Note: sessionStorege methods is same as localStorage but
// it will be deleted when tab is closed (but not on refresh)
console.log("sessionStorage", sessionStorage);
sessionStorage.setItem("item1", "Session storage item 1");
sessionStorage.setItem("item2", "Session storage item 2");

console.log("getItem: -> ", sessionStorage.getItem("new-item"));

sessionStorage.removeItem("item1");
sessionStorage.removeItem("item2");
console.log("sessionStorage", sessionStorage);
console.log(sessionStorage.length);

// 3. Cookies: cookie will not delete on tab close or refresh
console.log("Cookie: ", document.cookie);
// document.cookie =
//     "firstName=maik; expires" + new Date(9999, 0, 1).toUTCString();
// document.cookie =
//     "lastName=Kumar; expires" + new Date(2026, 0, 1).toUTCString();
// console.log("Cookie: ", document.cookie);
// console.log("Cookie: ", document.cookie);

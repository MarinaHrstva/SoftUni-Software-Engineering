import { logout } from "./api/users.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { loginView } from "./views/login.js";
import { myBooksView } from "./views/my-books.js";
import { registerView } from "./views/register.js";

const main = document.getElementById("site-content");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", dashboardView);
page("/books/:id", detailsView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/edit/:id", editView);
page("/my-books", myBooksView);

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
}

function renderMain(templateResult) {
    render(templateResult, main);
}

function updateNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector("#user").style.display = "block";
        document.querySelector("#guest").style.display = "none";
        document.querySelector(
            "#user span"
        ).textContent = `Welcome, ${userData.email}`;
    } else {
        document.querySelector("#user").style.display = "none";
        document.querySelector("#guest").style.display = "block";
    }
}

function onLogout() {
    logout();
    updateNav();
    page.redirect("/");
}

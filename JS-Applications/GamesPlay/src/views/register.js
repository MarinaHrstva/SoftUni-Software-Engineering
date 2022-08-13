import { register } from "../api/users.js";
import { html } from "../lib.js";


const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
	<form id="register" @submit=${onSubmit}>
		<div class="container">
			<div class="brand-logo"></div>
			<h1>Register</h1>

			<label for="email">Email:</label>
			<input type="email" id="email" name="email" placeholder="maria@email.com">

			<label for="pass">Password:</label>
			<input type="password" name="password" id="register-password">

			<label for="con-pass">Confirm Password:</label>
			<input type="password" name="confirm-password" id="confirm-password">

			<input class="btn submit" type="submit" value="Register">

			<p class="field">
				<span>If you already have profile click <a href="#">here</a></span>
			</p>
		</div>
	</form>
</section>
  `


export async function registerView(ctx) {

	ctx.render(registerTemplate(onSubmit));

	async function onSubmit(e) {
		e.preventDefault()
		const formData = new FormData(e.target);

		const email = formData.get('email');
		const password = formData.get('password');
		const repass = formData.get('confirm-password');

		if (email == '' || password == '') {
			alert('All fields are required!');
			return;
		}

		if (password != repass) {
			alert('Passwords don\'t match!')
			return;
		}

		await register(email, password);
		ctx.updateNav();
		ctx.page.redirect('/');
	}
}
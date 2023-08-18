document.addEventListener('DOMContentLoaded', async () => {
	const faqItems = document.querySelectorAll('.faq-item');
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((json) => console.log('placeholder json:', json));

	faqItems.forEach((item) => {
		const toggle = item.querySelector('.faq-toggle');
		const icon = item.querySelector('.faq-icon');
		const answer = item.querySelector('.faq-answer');

		toggle.addEventListener('click', () => {
			answer.classList.toggle('hidden');
			icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
		});
	});
	document.querySelector('#parent').append('TEST!!!!!!!!!!!!!!!!');
});

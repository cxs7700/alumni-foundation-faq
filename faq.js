document.addEventListener('DOMContentLoaded', () => {
	const faqItems = document.querySelectorAll('.faq-item');

	faqItems.forEach((item) => {
		const toggle = item.querySelector('.faq-toggle');
		const icon = item.querySelector('.faq-icon');
		const answer = item.querySelector('.faq-answer');

		toggle.addEventListener('click', () => {
			answer.classList.toggle('hidden');
			icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
		});
	});
});

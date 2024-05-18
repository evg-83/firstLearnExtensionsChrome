let myLeads = [];

const inputEl = document.querySelector('#input-el');
const btnEl = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

btnEl.addEventListener('click', function () {
	myLeads.push(inputEl.value);
	inputEl.value = '';
	renderLeads();
});

function renderLeads() {
	let listItems = '';

	for (let i = 0; i < myLeads.length; i++) {
		listItems += '<li>' + myLeads[i] + '</li>';

		//TODO: variant too
		// const li = document.createElement('li');

		// li.textContent = myLeads[i];

		// ulEl.append(li);
	}

	ulEl.innerHTML = listItems;
}

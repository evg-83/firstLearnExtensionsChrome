/* let myLeads = `["www.linkedin.com"]`;
myLeads = JSON.parse(myLeads);
 */
/* let myLeads = ["www.linkedin.com"];
myLeads = JSON.stringify(myLeads);
 */
// myLeads.push("www.awesome.com");
// console.log(typeof myLeads);

let myLeads = [];

const inputEl = document.querySelector('#input-el');
const btnEl = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

/* localStorage.setItem(
	'myLeads',
	'https://www.linkedin.com/in/jack-undefined-50b685290/details/experience/'
);
// console.log(localStorage.getItem('myLeads'));
localStorage.clear();
 */

const deleteBtn = document.querySelector('#delete-btn');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
// console.log(leadsFromLocalStorage);

const tabBtn = document.getElementById('tab-btn');

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;

	render(myLeads);
}

const tabs = [{ url: 'https://www.linkedin.com/in/per-harald-borgen/' }];

tabBtn.addEventListener('click', function () {
	//TODO: нид доступ к хром расширениям
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url);

	localStorage.setItem('myLeads', JSON.stringify(myLeads));

	render(myLeads);
	});
	
	myLeads.push(tabs[0].url);

	localStorage.setItem('myLeads', JSON.stringify(myLeads));

	render(myLeads);
	// console.log(tabs[0].url);
});

deleteBtn.addEventListener('dblclick', function () {
	localStorage.clear();
	myLeads = [];

	render(myLeads);
});

btnEl.addEventListener('click', function () {
	myLeads.push(inputEl.value);
	inputEl.value = '';

	localStorage.setItem('myLeads', JSON.stringify(myLeads));

	render(myLeads);

	// console.log(localStorage.getItem('myLeads'));
});

function render(leads) {
	let listItems = '';

	for (let i = 0; i < leads.length; i++) {
		// listItems += '<li><a href="#" target="_blank">' + myLeads[i] + '</a></li>';
		listItems += `
		<li>
			<a href="${leads[i]}" target="_blank">
				${leads[i]}
			</a>
		</li>
		`;

		//TODO: variant too
		// const li = document.createElement('li');
		// li.textContent = myLeads[i];
		// ulEl.append(li);
	}

	ulEl.innerHTML = listItems;
}

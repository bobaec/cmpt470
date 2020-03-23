var largeNumber = 10;
var averagePeople = 0;

function sortKey() {
	var i;
	var count = 0;
	var table = document.getElementById("table");
	var rows = table.rows;

	while (count < largeNumber * 100) {
		for (i = 1; i < (rows.length - 1); i++) {
			current = rows[i].getElementsByTagName("TD")[0];
			next = rows[i + 1].getElementsByTagName("TD")[0];

			if (current.innerHTML.toLowerCase() > next.innerHTML.toLowerCase()) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			}
			count++;
		}
	}
}

function sortKeyDesc() {
	var i;
	var count = 0;
	var table = document.getElementById("table");
	var rows = table.rows;

	while (count < largeNumber * 100) {
		for (i = 1; i < (rows.length - 1); i++) {
			current = rows[i].getElementsByTagName("TD")[0];
			next = rows[i + 1].getElementsByTagName("TD")[0];

			if (current.innerHTML.toLowerCase() < next.innerHTML.toLowerCase()) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			}
			count++;
		}
	}
}

function sortName() {
	var i;
	var count = 0;
	var table = document.getElementById("table");
	var rows = table.rows;

	while (count < largeNumber * 100) {
		for (i = 1; i < (rows.length - 1); i++) {
			current = rows[i].getElementsByTagName("TD")[1];
			next = rows[i + 1].getElementsByTagName("TD")[1];

			if (current.innerHTML.toLowerCase() > next.innerHTML.toLowerCase()) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			}
			count++;
		}
	}
}

function sortNameDesc() {
	var i;
	var count = 0;
	var table = document.getElementById("table");
	var rows = table.rows;

	while (count < largeNumber * 100) {
		for (i = 1; i < (rows.length - 1); i++) {
			current = rows[i].getElementsByTagName("TD")[1];
			next = rows[i + 1].getElementsByTagName("TD")[1];

			if (current.innerHTML.toLowerCase() < next.innerHTML.toLowerCase()) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			}
			count++;
		}
	}
}

function sortEmail() {
	var i;
	var count = 0;
	var table = document.getElementById("table");
	var rows = table.rows;

	while (count < largeNumber * 100) {
		for (i = 1; i < (rows.length - 1); i++) {
			current = rows[i].getElementsByTagName("TD")[2];
			next = rows[i + 1].getElementsByTagName("TD")[2];

			if (current.innerHTML.toLowerCase() > next.innerHTML.toLowerCase()) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			}
			count++;
		}
	}
}

function sortEmailDesc() {
	var i;
	var count = 0;
	var table = document.getElementById("table");
	var rows = table.rows;

	while (count < largeNumber * 100) {
		for (i = 1; i < (rows.length - 1); i++) {
			current = rows[i].getElementsByTagName("TD")[2];
			next = rows[i + 1].getElementsByTagName("TD")[2];

			if (current.innerHTML.toLowerCase() < next.innerHTML.toLowerCase()) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			}
			count++;
		}
	}
}
	
function sortAge() {
	var i;
	var count = 0;
	var table = document.getElementById("table");
	var rows = table.rows;

	while (count < largeNumber * 100) {
		for (i = 1; i < (rows.length - 1); i++) {
			current = rows[i].getElementsByTagName("TD")[3];
			next = rows[i + 1].getElementsByTagName("TD")[3];

			if (parseInt(current.innerHTML) > parseInt(next.innerHTML)) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			}
			count++;
		}
	}	
}
function sortAgeDesc() {
	var i;
	var count = 0;
	var table = document.getElementById("table");
	var rows = table.rows;

	while (count < largeNumber * 100) {
		for (i = 1; i < (rows.length - 1); i++) {
			current = rows[i].getElementsByTagName("TD")[3];
			next = rows[i + 1].getElementsByTagName("TD")[3];

			if (parseInt(current.innerHTML) < parseInt(next.innerHTML)) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			}
			count++;
		}
	}
}

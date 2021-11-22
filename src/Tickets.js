import React, {useState, useEffect} from "react";

function Tickets() {
	const [tickets, setTickets] = useState([]);
	useEffect(() => { // anonnymous function
		fetch('https://zccsontmac.zendesk.com/api/v2/tickets.json', {
			headers : {
				"Authorization": "Bearer d67acff1d1185cdfef514e908686b02cba3e988d1fce0df4a2ade742c3002443"
			}
		})
		.then((res) => res.json()) // convert the response to json format
		.then((data) => {
			console.log(data)
			setTickets(data.tickets)
		})
	},[])
  return (
		<div>
			<h1>Hello, my name is Son</h1>
			{tickets && tickets.length > 0 && tickets.map((ticket) => {
				return (
					<p>{ticket.id}. {ticket.subject}</p>
				)
			})}
		</div>
  );  
}

export default Tickets;

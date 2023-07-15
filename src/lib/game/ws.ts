let socket: WebSocket;
export const init = () => {
	socket = new WebSocket('ws://localhost:3333/ws');

	// Connection opened
	socket.addEventListener('open', () => {
		socket.send('Hello Server!');
	});

	// Listen for messages
	socket.addEventListener('message', (event) => {
		console.log('Message from server ', event.data);
	});
};

export const joinMatchMaking = () => {
	socket.send(JSON.stringify({ type: 'joinMatchMaking' }));
};

export const leaveMatchMaking = () => {
	socket.send(JSON.stringify({ type: 'leaveMatchMaking' }));
};

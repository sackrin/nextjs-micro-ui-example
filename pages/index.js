import react from 'react';
import useMicroUI from "react-micro-ui/lib/Hooks/useMicroUI";

export default function Index() {
	const [render, loaded] = useMicroUI('http://localhost:9000', 'exampleMicroUI', {});
	return (
		<div>
			<p>Hello Next.js</p>
		</div>
	);s
}

import react from 'react';
import { MicroUIComponent } from "@sackrin/react-micro-ui-hooks/lib/Components";

const Index = () => (
	<div>
		<p>Hello Next.js</p>
		{process.browser && <MicroUIComponent microUi={{ url: 'http://localhost:9000', library: 'exampleMicroUI' , name: "ExampleComponent" }} name="John" />}
	</div>
);

export default Index;

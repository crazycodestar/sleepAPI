# SleepAPI

Have you even been in a situation where you just want to send a request to test maybe your loading states. But you don't want to use your backend cause the request will clutter your database or you haven't built out the endpoint yet? Well if you've ever found yourself in this situation or similar then you would find SleepAPI really useful

SleepAPI is a lightweight API that simulates a server request and responds after a set time has elapsed. That's it.

## Usage

Endpoint: `sleepapi-production.up.railway.app`

```typescript
import { useState } from "react";

const Page = () => {
	const [isPending, setIsPending] = useState(false);

	const handleSubmit = () => {
		setIsPending(true);
		try {
			// specify how long you want to sleep(milliseconds) in the query param
			const result = await fetch(
				"sleepapi-production.up.railway.app?sleep=2000"
			);
			if (result.status === 200) return;
		} catch (err) {
			console.log(err);
		}
		setIsPending(false);
	};

	<Button isLoading={isPending} onClick={handleSubmit} />;
};

export default Page;
```

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

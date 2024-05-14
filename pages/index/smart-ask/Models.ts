const openaiModels = [
	"gpt-3.5-turbo",
	"gpt-3.5-turbo-1106",
	"gpt-3.5-turbo-0125",
	"gpt-4",
	"gpt-4-0613",
	"gpt-4-32k",
	"gpt-4-32k-0613",
	"gpt-4-turbo",
	"gpt-4-turbo-preview",
	"gpt-4-vision-preview",
	"gpt-4-turbo-2024-04-09",
] as const;

export const DEFAULT_MODELS = [
	...openaiModels.map((name) => ({
		name,
		available: true,
		provider: {
			id: "openai",
			providerName: "OpenAI",
			providerType: "openai",
		},
	}))]
const OpenAI = require('openai');

export const createOpenAIClient = () => {

  // const OPENAI_API_KEY = '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';
  const OPENAI_API_KEY = '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';
  // const OPENAI_API_KEY = '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';
  // const OPENAI_API_KEY = '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';
  // const OPENAI_API_KEY = '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';


  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });
  return openai;
};

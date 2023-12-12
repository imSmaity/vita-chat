# Vita Chat

The CLI app, powered by OpenAI, provides concise English explanations for code snippets. Users specify the active code file, and the app fetches and interprets the code using AI, presenting detailed explanations in the terminal.

## Description

The Code Explanation CLI is a Node.js-based command-line application that leverages the OpenAI API to generate English explanations for given code snippets. Users interact with the app by providing the path to their active code file as a command-line argument. The app reads the code from the specified file and sends a request to the OpenAI GPT-3.5 -turbo-1106, prompting it to explain the code. The response, containing a human-readable explanation, is then displayed in the terminal. This tool is designed to assist developers in understanding and interpreting code, offering insights into complex logic and functionality. Users need to obtain an API key from OpenAI, ensuring secure and authorized access to the language model. The app is extensible, allowing for adjustments in the maximum token limit for tailored explanations. Its simplicity and integration with OpenAI make it a valuable resource for developers seeking to enhance their comprehension of code snippets through natural language explanations.

### [Click here to watch the demo video](https://gemoo.com/tools/upload-video/share/593262905675296768?codeId=M0GQ43A0aJ3RZ&card=593262900944121856&origin=videolinkgenerator)

## Getting Started

### Dependencies

- express
- node
- axios
- openai
- yargs

### Installing

```
npm install
```
### Configuration

Create a `.env` file in the root of the project and add the following configuration

`OPENAI_API_KEY="YOUR_OPENAI_API_KEY"`

### Run the CLI app using the following command:

```
node index.js explain --file code.js
```

### Run your own file

```
node index.js explain --file <path>
```
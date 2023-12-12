const axios = require('axios')
const yargs = require('yargs')
const fs = require('fs')

const apiKey = ''

async function main() {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    }

    const argv = yargs
      .command('explain', 'Fetch and explain code from the active file', {
        file: {
          describe: 'Path to the active code file',
          demandOption: true,
          type: 'string',
        },
      })
      .help().argv
    const codeFile = argv.file

    // Read code from the active file
    const code = fs.readFileSync(codeFile, 'utf-8')

    const data = {
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant designed to output JSON.',
        },
        {
          role: 'user',
          content: ` explain code: ${code}`,
        },
      ],
      model: 'gpt-3.5-turbo-1106',
      response_format: { type: 'json_object' },
    }

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      data,
      { headers }
    )
    const completion = response.data
    const obj = JSON.parse(completion.choices[0].message.content)
    console.log(obj)
    console.log(obj[Object.keys(obj)[0]])
  } catch (error) {
    console.error(error)
  }
}

main()

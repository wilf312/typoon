const {cli} = require('cli-ux')


const run = async () => {
  const hoge = await cli.prompt('Please input target path?')
  console.log(hoge)
  const rewrite = await cli.confirm('Rewrite?[y/n | yes/no]')
  console.log(rewrite)
}

run()

#!/usr/bin/env ts-node
// eslint-disable-next-line node/shebang
async function main() {
  const oclif = await import('@oclif/core')
  await oclif.execute({development: true, dir: import.meta.url})
}

await main()

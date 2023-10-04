#!/usr/bin/env node

async function main() {
  const oclif = await import('@oclif/core')
  await oclif.execute({dir: import.meta.url})
}

await main()

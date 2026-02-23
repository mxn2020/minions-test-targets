# minions-test-targets

**Agent-under-test definitions, endpoints, capabilities, and auth configs**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-test-targets/sdk minions-sdk

# Python
pip install minions-test-targets

# CLI (global)
npm install -g @minions-test-targets/cli
```

---

## CLI

```bash
# Show help
test-targets --help
```

---

## Python SDK

```python
from minions_test_targets import create_client

client = create_client()
```

---

## Project Structure

```
minions-test-targets/
  packages/
    core/           # TypeScript core library (@minions-test-targets/sdk on npm)
    python/         # Python SDK (minions-test-targets on PyPI)
    cli/            # CLI tool (@minions-test-targets/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [test-targets.minions.help](https://test-targets.minions.help)
- Blog: [test-targets.minions.blog](https://test-targets.minions.blog)
- App: [test-targets.minions.wtf](https://test-targets.minions.wtf)

---

## License

[MIT](LICENSE)

# Nepali Date Parser

[![npm version](https://img.shields.io/npm/v/nepali-date-parser.svg)](https://www.npmjs.com/package/nepali-date-parser)
[![MIT License](https://img.shields.io/npm/l/nepali-date-parser.svg)](LICENSE)
[![Downloads](https://img.shields.io/npm/dm/nepali-date-parser.svg)](https://www.npmjs.com/package/nepali-date-parser)


Parse **Bikram Sambat (BS)** dates written in a wide variety of formats using Nepali or English numerals, Nepali or English month names, and flexible separators.

## Features

- 🇳🇵 Supports Bikram Sambat (BS) dates
- 🔢 Nepali and English numerals
- 📅 Nepali and English month names
- ✨ Flexible input formats
- 🎯 Returns the best matching parse result
- ⚡ Lightweight with zero unnecessary dependencies
- 📦 ES Module support

---

## Installation

```bash
npm install nepali-date-parser
```

---

## Usage

```javascript
import { parseBS } from "nepali-date-parser";

const result = parseBS("२१ असार २०८२");

console.log(result);
```

Example output:

```javascript
{
  year: 2082,
  month: 3,
  day: 21,
  iso: "2082-03-21",
  score: 100
}
```

---

## Supported Formats

### Numeric

```text
2082-03-21
2082/03/21
2082.03.21

21-03-2082
21/03/2082
21.03.2082

2082 03 21
21 03 2082
```

### Nepali Numerals

```text
२०८२-०३-२१
२०८२/०३/२१
२१-०३-२०८२
२१/०३/२०८२
```

### English Month Names

```text
21 Ashadh 2082
21 Asadh 2082
Ashadh 21 2082
Asadh 21, 2082
```

### Nepali Month Names

```text
२१ असार २०८२
असार २१ २०८२
२०८२ असार २१
```

---

## API

### `parseBS(input)`

Parses a Bikram Sambat date string.

```javascript
const result = parseBS("2082-03-21");
```

Returns:

```javascript
{
  year: Number,
  month: Number,
  day: Number,
  iso: String,
  score: Number
}
```

Returns `null` if the input cannot be parsed.

---

## Examples

```javascript
parseBS("2082-03-21");
parseBS("21/03/2082");
parseBS("२१ असार २०८२");
parseBS("21 Ashadh 2082");
parseBS("Ashadh 21, 2082");
```

---

## Roadmap

- AD (Gregorian) parsing
- Natural language parsing
- Relative dates
- Time parsing
- Date ranges
- Locale customization

---

## Contributing

Issues and pull requests are welcome.

If you find a format that should be supported, feel free to open an issue or submit a PR.

---

## License

MIT

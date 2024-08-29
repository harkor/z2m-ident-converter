# Decimal to Hex and Hex to Decimal Converter

This is a simple command-line interface (CLI) tool to convert decimal values to hexadecimal and vice versa. This tool is particularly useful for working with Zigbee2MQTT, where hexadecimal values are often required.

## Features

- Convert decimal values to hexadecimal.
- Convert hexadecimal values to decimal.
- Simple and easy-to-use command-line interface.

## Installation

To use this CLI tool, you need to have Node.js and pnpm installed on your machine. If you haven't installed Node.js yet, you can download it from [Node.js official website](https://nodejs.org/). You can install pnpm by following the instructions on the [pnpm website](https://pnpm.io/installation).

1. Clone the repository:

   ```bash
   git clone https://github.com/harkor/z2m-ident-converter.git
   cd z2m-ident-converter
   ```

2. Install the necessary dependencies:

   ```bash
   pnpm install
   ```

## Usage

After installing the dependencies, you can use the CLI tool as follows:

### Convert a Decimal to Hexadecimal

To convert a decimal number to its hexadecimal equivalent:

```bash
pnpm start convert <decimal_value>
```

For example:

```bash
pnpm start convert 255
```

This will output:

```bash
255 || 0xFF
```

### Convert a Hexadecimal to Decimal

To convert a hexadecimal number to its decimal equivalent:

```bash
pnpm start convert <hex_value>
```

For example:

```bash
pnpm start convert 0xFF
```

This will output:

```bash
0xFF || 255
```

## Options

- --version or -V: Output the version number.
- --help or -h: Display help for the command.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue if you have any suggestions or improvements.

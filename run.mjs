import { Command } from "commander";
import { decimalToHex, isHex, hexToDecimal } from "./functions.mjs";

const program = new Command();

program
  .name("Decimal to hex and hex to decimal Converter")
  .description("CLI convert decimal to hex for Zigbee2MQTT")
  .version("1.0");

program
  .command("convert")
  .description("Convert decimal to hex and hex to decimal")
  .argument("<value>", "decimal or hex to convert")
  .action((value) => {
    let result = "";

    if (isHex(value)) {
      result = hexToDecimal(value);
    } else {
      result = decimalToHex(value);
    }

    console.log(`${value} || ${result}`);
  });

program.parse();

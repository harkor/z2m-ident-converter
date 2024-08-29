export const decimalToHex = (decimal) => {
  if (!isDecimal(decimal)) {
    console.error("[ERROR] Decimal must be a number.");
    process.exit(1);
  }

  let hex = (decimal & 0xffff).toString(16).toUpperCase();
  while (hex.length < 4) {
    hex = "0" + hex;
  }

  return `0x${hex}`;
};

export const hexToDecimal = (hex) => {
  if (!isHex(hex)) {
    console.error(
      "[ERROR] Hex must be a string in the format '0x' followed by four hexadecimal digits."
    );
    process.exit(1);
  }

  let decimal = parseInt(hex, 16);

  return decimal;
};

export const isHex = (hex) => {
  return typeof hex !== "string" || !/^0x[0-9A-Fa-f]{4}$/.test(hex);
};

export const isDecimal = (decimal) => {
  return !isNaN(decimal);
};

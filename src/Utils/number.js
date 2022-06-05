import numeral from "numeral";

numeral.register("locale", "us", {
  delimiters: {
    thousands: ",",
    decimal: ".",
  },
});
numeral.locale("us");

Number.prototype.format = function (options) {
  if (options?.format) {
    return numeral(this).format(options?.format);
  }
  if (options?.tooltipValue) {
    return numeral(this).format(`${options?.tooltipValue && "$"}0a`);
  }
  return numeral(this).format(`${options?.money } 0,0.0[0] a`);
};
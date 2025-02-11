export class Utils {

  static log({ info, msg }) {
    const string = [msg, info].filter(Boolean).join(": ");
    console.log(string)
  }

  static separator(char = '-=-', length = 12) {
    console.log(String(char).repeat(Number(length)))
  }

}
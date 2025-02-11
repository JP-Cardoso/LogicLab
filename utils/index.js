export class Utils {

  log({ info, msg }) {
    let string = '';

    if (msg && info) {
      string = `${msg}: ${info}`;
    } else if (info) {
      string = info;
    } else {
      string = msg
    }

    console.log(string);
  }

  separator() {
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
  }

}
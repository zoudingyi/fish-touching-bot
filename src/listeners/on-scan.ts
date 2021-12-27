import { log, ScanStatus } from 'wechaty';
import qrcodeTerminal from 'qrcode-terminal';

function onScan(qrcode: string, status: ScanStatus) {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    const qrcodeImageUrl = [
      'https://wechaty.js.org/qrcode/',
      encodeURIComponent(qrcode)
    ].join('');
    log.info(
      'StarterBot',
      'onScan: %s(%s) - %s',
      ScanStatus[status],
      status,
      qrcodeImageUrl
    );

    qrcodeTerminal.generate(qrcode, { small: true }); // show qrcode on console
  } else {
    log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status);
  }
}

export default onScan;

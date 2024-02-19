import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';

const QrCodeGenerator = () => {
  const [input, setInput] = useState<string>('');
  const [qrCode, setQrCode] = useState<string>('');

  const createQrCode = () => {
    setQrCode(input);
    setInput('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '1rem',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
        Qr Code Generator
      </h1>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter your value'
      />
      {input && input.trim().length > 0 ? (
        <button onClick={createQrCode}>Create QR code</button>
      ) : null}
      <QRCodeSVG value={qrCode} />
    </div>
  );
};
export default QrCodeGenerator;

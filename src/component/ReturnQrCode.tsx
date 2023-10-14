import QRCode from 'react-qr-code';

export default function ReturnQrCode({ text }: { text: string }) {
	return (
		<QRCode
			size={256}
			style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
			value={text}
			viewBox={`0 0 256 256`}
		/>
	);
}

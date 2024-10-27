import { ShippingAddress } from '@prisma/client';
import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Text,
} from '@react-email/components';
import snack2Image from '@/assets/images/snake-3.png';
import { addressTitle, container, footer, global, main, message, paddingY, track } from './styles';

type OrderReceivedEmailProps = {
	orderId: string;
	orderDate: string;
	shippingAddress: ShippingAddress;
};

const OrderReceivedEmail = ({ shippingAddress, orderId, orderDate }: OrderReceivedEmailProps) => {
	return (
		<Html>
			<Head />
			<Preview>Your order summary and estimated delivery date</Preview>
			<Body style={main}>
				<Container style={container}>
					<Section style={message}>
						<Img
							src={snack2Image.src}
							width='65'
							height='73'
							alt='delivery snake'
							style={{ margin: 'auto' }}
						/>
						<Heading style={global.heading}>Thank you for your order!</Heading>
						<Text style={global.text}>
							We are preparing everything for delivery and will notify you once your package has been shipped. Delivery
							usually takes 2 days.
						</Text>
						<Text style={{ ...global.text, marginTop: 24 }}>
							If you have any questions regarding your order, please feel free to contact us with your order number and
							we are here to help.
						</Text>
					</Section>
					<Hr style={global.hr} />
					<Section style={global.defaultPadding}>
						<Text style={addressTitle}>Shipping to: {shippingAddress.name}</Text>
						<Text style={{ ...global.text, fontSize: 14 }}>
							{shippingAddress.street}, {shippingAddress.city}, {shippingAddress.state} {shippingAddress.postalCode}
						</Text>
					</Section>
					<Hr style={global.hr} />
					<Section style={global.defaultPadding}>
						<Row style={{ display: 'inline-flex gap-16', marginBottom: 40 }}>
							<Column style={{ width: 170 }}>
								<Text style={global.paragraphWithBold}>Order Number</Text>
								<Text style={track.number}>{orderId}</Text>
							</Column>
							<Column style={{ marginLeft: 20 }}>
								<Text style={global.paragraphWithBold}>Order Date</Text>
								<Text style={track.number}>{orderDate}</Text>
							</Column>
						</Row>
					</Section>

					<Hr style={global.hr} />

					<Section style={paddingY}>
						<Row>
							<Text
								style={{
									...footer.text,
									paddingTop: 30,
									paddingBottom: 30,
								}}
							>
								Please contact us if you have any questions. (If you reply to this email, we will not be able to see
								it.)
							</Text>
						</Row>
						<Row>
							<Text style={footer.text}>© CaseCobra, Inc. All Rights Reserved.</Text>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default OrderReceivedEmail;

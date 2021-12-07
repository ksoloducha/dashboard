import './Order.css'
import Stack from 'react-bootstrap/Stack'


function Order(props) {
    return (
        <div className="order">
            <Stack direction="horizontal" gap="5">
                <Stack direction="vertical" gap="1">
                    <Stack direction="horizontal" gap="5">
                        <label>OrderId:</label>
                        <label>{props.orderId}</label>
                    </Stack>
                    <Stack direction="horizontal" gap="5">
                        <label>Price:</label>
                        <label>{props.price}</label>
                    </Stack>
                </Stack>
                <Stack direction="vertical" gap="1">
                    <Stack direction="horizontal" gap="5">
                        <label>Address:</label>
                        <label>{props.address}</label>
                    </Stack>
                    <Stack direction="horizontal" gap="5">
                        <label>Date:</label>
                        <label>{props.date}</label>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default Order
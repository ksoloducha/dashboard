import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ordersIcon from '../../images/orders.png'
import sellingQualityIcon from '../../images/selling-quality.png'
import opinionsIcon from '../../images/opinions.png'
import offerRankingIcon from '../../images/offer-ranking.png'
import sellingChartIcon from '../../images/selling-chart.png'
import './WidgetView.css'

const WidgetView = () => {

    return(
        <div>
            <div>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Orders</Tooltip>}
                >
                    <img
                        className='widget-icon first-row-icon first-row-first-elem-icon'
                        src={ordersIcon}
                        alt='orders widget'
                    />
                </OverlayTrigger>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Selling quality</Tooltip>}
                >
                    <img
                        className='widget-icon first-row-icon first-row-elem-icon'
                        src={sellingQualityIcon}
                        alt='orders widget'
                    />
                </OverlayTrigger>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Opinions</Tooltip>}
                >
                    <img
                        className='widget-icon first-row-icon first-row-elem-icon'
                        src={opinionsIcon}
                        alt='orders widget'
                    />
                </OverlayTrigger>
            </div>
            <div>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Offer ranking</Tooltip>}
                >
                    <img
                        className='widget-icon second-row-icon second-row-first-elem-icon'
                        src={offerRankingIcon}
                        alt='orders widget'
                    />
                </OverlayTrigger>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Selling chart</Tooltip>}
                >
                <img
                    className='widget-icon second-row-icon second-row-elem-icon'
                    src={sellingChartIcon}
                    alt='orders widget'
                />
                </OverlayTrigger>
            </div>
        </div>
    )
}

export default WidgetView
import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ordersIcon from '../../images/orders.png'
import sellingQualityIcon from '../../images/selling-quality.png'
import opinionsIcon from '../../images/opinions.png'
import offerRankingIcon from '../../images/offer-ranking.png'
import sellingChartIcon from '../../images/selling-chart.png'
import './WidgetView.css'
import { widgetViews } from '../../ViewEnum'


const WidgetView = (props) => {    

    return(
        <div>
            <div>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Orders</Tooltip>}
                >
                    <img
                        className='widget-icon orders-widget'
                        src={ordersIcon}
                        alt='orders widget'
                    />
                </OverlayTrigger>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Selling quality</Tooltip>}
                >
                    <img
                        className='widget-icon selling-quality-widget'
                        src={sellingQualityIcon}
                        alt='selling quality widget'
                    />
                </OverlayTrigger>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Opinions</Tooltip>}
                >
                    <img
                        className='widget-icon opinions-widget'
                        src={opinionsIcon}
                        alt='opinions widget'
                    />
                </OverlayTrigger>
            </div>
            <div>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Offer ranking</Tooltip>}
                >
                    <img
                        className='widget-icon offer-ranking-widget'
                        src={offerRankingIcon}
                        alt='offer ranking widget'
                    />
                </OverlayTrigger>
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='orders-tooltip'>Selling chart</Tooltip>}
                >
                <img
                    className='widget-icon selling-chart-widget'
                    src={sellingChartIcon}
                    alt='selling chart widget'
                />
                </OverlayTrigger>
            </div>
        </div>
    )
}

export default WidgetView
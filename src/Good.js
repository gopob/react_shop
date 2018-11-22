import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Modal } from 'antd';
import _ from 'lodash'

const Meta = Card.Meta

class Good extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired, 
        description: PropTypes.string.isRequired
    }

    coverStyle = { width: 240 }
    imgStyle = { maxHeaight: 150, width: '100%', objectFit: 'cover'}


    buyNow = () => alert("Buy now")

    showMoreInfo = () => {
        const { title, description} = this.props
        Modal.info({
            title: "More Info",
            content:  (
                <div>
                    <h2>{title}</h2>
                    <div>{description}</div>
                </div>
            )
        })
    }
    
    render () {
        const {id, title, description} = this.props
        return (
                <Card
                    {...{
                        style: this.coverStyle,
                        cover: (
                            <img
                                alt="title"
                                {...{
                                    style: this.imgStyle,
                                    src: `/img/${id}.jpg`
                                }}
                                />
                        ),
                        actions: [
                            <Button type="primary" onClick={this.buyNow}>
                                Buy Now!
                            </Button>,
                            <Button onClick={this.showMoreInfo}>More Info</Button>
                        ]
                        }}
                    >
                    <Meta
                        {...{
                            title,
                            description: _.truncate(description, {length: 60})
                        }}
                    />
                </Card>
        )
    }
}

export default Good
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { List } from 'antd'
import Good from './Good'

const ListItem = List.Item

class Goods extends Component {
    config = {column: 3}
    render () {
        const {data} = this.props
        return (
            <>
                {data && (
                    <List 
                        grid={this.config}
                        dataSource={Object.values(data)}
                        renderItem={({id, title, description}) => (
                            <ListItem key={id}>
                                <Good key={id} {...{id,title,description}}/>
                            </ListItem>   
                        )}
                    />
                )}
            </>               
        )
    }
}



const mapStateToProps = (state) => {
    return {
        data: state.goods.data
    }
}


export default connect(mapStateToProps)(Goods)
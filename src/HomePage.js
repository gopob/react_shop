import React, {Component} from 'react'
import { readGoods } from './ducks/goods'
import { dispatch } from './store'

class HomePage extends Component {
    componentDidMount() {
        dispatch(readGoods())
    }
    render () {
        return (
            <div>
                Phones
            </div>
        )
    }
}

export default HomePage
import React from 'react'
import Shop_Data from './Shop_Data'
import PreviewCollection from '../../components/preview/PreviewCollection'

class ShopPage  extends React.Component{
    constructor(){
        super()
        this.state = {
            collections: Shop_Data
    }
}

    render(){
        const { collections } = this.state
        return(
            <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionsProps})=> (
                <PreviewCollection key={id} {...otherCollectionsProps}/>
            ))}
            
            </div>
        )
    }
}

export default ShopPage
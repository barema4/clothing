import React from 'react'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import PreviewCollection from '../../components/preview/PreviewCollection'

import { selectCollectionForPreview } from '../../redux/shop/shop-selectors'

import './collection-overview.scss'

const collectionsOverview = ({ collections }) => (

    <div className='collections-overview'>

    {collections.map(({ id, ...otherCollectionsProps})=> (

        <PreviewCollection key={id} {...otherCollectionsProps}/>

    ))}
        
    </div>
)

const mapStateToProps = createStructuredSelector({

    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(collectionsOverview)
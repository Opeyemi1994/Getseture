import React from 'react';
import './Collection.scss'
import { connect } from 'react-redux';
import { selectCollectionUrl } from '../../Redux/Shop/shop.selectors';
import CollectionItem from '../../components/collectionItem/CollectionItem';

const Collection = ({collection}) => {
  console.log(collection)
  const {title,items} = collection
  return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className="items">
          {
            items.map(item => (
              <CollectionItem key={item.id} item={item}/>
            ))
          }
        </div>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => ({
  collection:selectCollectionUrl(ownProps.match.params.collection)(state)
})

export default connect(mapStateToProps)(Collection)

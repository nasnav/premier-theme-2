import React, { PureComponent } from 'react';
import './ProductInfo.scss';
import Stars from './Stars';

class ProductInfo extends PureComponent {
  state = {  
    quantity: 1
  }

  setQuantity = (event) => {
    this.setState({ quantity: Number(event.target.value) });
  } 

  render() {
    const { product } = this.props;
    const { quantity } = this.state;

    const price = 
    product.discount 
    ? product.price - (product.price * 25 / 100)
    : product.price;

    return (
      <div className="productInfo">
        <div className="container">
          <div className="d-flex">
            {/* rating */}
            <Stars rating={product.starsNum} />

            {/* reviews */}
            <a href="#" className="productInfo__reviewsLink">
              Read all {product.reviews.length} reviews
            </a>
          </div>

          {/* category */}
          <div className="productInfo__category">
            {`${product.gender}'s ${product.sport}`}
          </div>

          {/* name */}
          <h4 className="productInfo__name">{product.name}</h4>

          {/* prices */}
          <p className="productInfo__prices">
            <span className={`productInfo__newPrice${product.discount ? ' discount' : null}`}>EGP {price}</span>
            { product.discount && <span className="productInfo__oldPrice"> - EGP {product.price}</span> }
          </p>

          {/* promotional discount state */}
          {
            !product.promotionalDiscount &&
            <p className="productInfo__promotionalDiscountState">
              The product is excluded from all promotional discounts and offers.
            </p>
          }

          {/* available colors */}
          <h5 className="productInfo__colorsTitle">Available Colors</h5>

          <ul className="productInfo__colorsNamesList">
            {
              product.colors.map((color) => (
                <li className="productInfo__colorName" key={color.name}>{color.name}</li>
              ))
            }
          </ul>

          <ul className="productInfo__colorsImgsList">
            {
              product.colors.map((color) => (
                <li className="productInfo__colorImgContainer" key={color.name}>
                  <img src={color.img} alt={`${color.name} ${product.name}`} className="productInfo__colorImg"/>
                </li>
              ))
            }
          </ul>

          {/* size & quantity */}
          <button 
            className="productInfo__sizeChartBtn"
            aria-pressed=""
            aria-expanded=""
          >
            <i className="fas fa-ruler-combined mr-2" aria-hidden="true" /> 
            <span className="text-underline">Size Chart</span> 
          </button>

          <div className="d-flex">
            <select aria-label="select size" className="form-control productInfo__sizeSelect">
              <option>Select Size</option>
              {
                product.sizes.map((size) => (
                  <option key={size}>{size}</option>
                ))
              }
            </select>

            <input 
              type="number" 
              min="1" 
              className="form-control productInfo__quantityInput" 
              value={quantity} 
              onChange={this.setQuantity}
            />
          </div> {/* flex container */}

          {/* add to bag & like */}
          <div className="d-flex">
            <button className="productInfo__addBtn">Add to bag</button>

            <button className="productInfo__likeBtn" aria-label="like">
              <i className="fas fa-heart fa-lg" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-3">
            <i aria-hidden="true" className="fas fa-truck" /> Free shippings and free returns
          </p>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
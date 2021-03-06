import React, { PureComponent } from 'react';
import './ProductDetails.scss';

const panels = [ 'highlights', 'description', 'specifications' ];

class ProductDetails extends PureComponent {
  state = {  
    activePanelName: 'description'
  }

  setActivePanelName = (event, panel) => {
    event.preventDefault();
    this.setState({ activePanelName: panel });
  }

  render() {
    const { product } = this.props;
    const { activePanelName } = this.state;

    /* panels */
    const highlights = (
      <div className="productHighlights">
        <h4 className="productHighlights__title">Highlights</h4>
      </div>
    );
    const description = (
      <div className="productDescription">
        <div className="productDescription__textContainer">
          <h4 className="productDescription__title">{product.name}</h4>
          <p className="productDescription__desc">{product.description}</p>
        </div>
        <img src={product.imgs[1]} alt={`${product.name} product`} className="productDescription__img"/>
      </div>
    );
    const specs = (
      <ul className="productSpecs">
        {
          Object.keys(product.specs).map((key) => (
            <li className="productSpec" key={key}>
              <b>{key}</b>: {product.specs[key]}
            </li>
          ))
        }
      </ul>
    );

    /* active panel */
    const activePanel = 
    (activePanelName === 'highlights')
    ? highlights
    : (activePanelName === 'description')
    ? description
    : specs;

    return (
      <section className="productDetails container">
        <h3 className="productDetails__title">Product Details</h3>

        <nav className="productDetails__nav" aria-label="product details navigation">
          <ul className="productDetails__navList">
            {
              panels.map((panel) => (
                <li className="productDetails__navItem" key={panel}>
                  <a 
                    href="#" 
                    className={`productDetails__navLink${panel === activePanelName ? ' active' : ''}`}
                    onClick={(event) => this.setActivePanelName(event, panel)}
                  >
                    {panel}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>

        <div className="productDetails__panel">
          {activePanel}
        </div>
      </section>
    );
  }
}

export default ProductDetails;
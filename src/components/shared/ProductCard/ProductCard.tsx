// src/components/shared/ProductCard/ProductCard.tsx
import React from 'react';
import styles from './ProductCard.module.css';
import { Product } from '../../sections/Shop/types/shop.types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className={styles.productCard}>
      <img 
        src={product.imageUrl || "/api/placeholder/400/300"} 
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.productFooter}>
          <span className={styles.price}>
            KES {product.price.toLocaleString()}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className={styles.addToCartButton}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
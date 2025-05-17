import { KeyboardEvent, useState } from 'react';

import formatPrice from 'utils/formatPrice';
import { IProduct } from 'models';

import { useCart } from 'contexts/cart-context';

import * as S from './style';
import Dropdown from 'commons/DropdownKotia';
import DropdownKotia from 'commons/DropdownKotia';
import KotiaToggle from 'commons/ToggleKotia /ToggleKotia';
import { log } from 'console';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart();
  const {
    sku,
    title,
    price,
    installments,
    description,
    currencyId,
    currencyFormat,
    isFreeShipping,
    imageName,
  } = product;
  const [isUpSize, setIsUpSize] = useState(false);

  const formattedPrice = formatPrice(price, currencyId, isUpSize);
  let productInstallment;

  if (installments) {
    const installmentPrice = price / installments;

    productInstallment = (
      <S.Installment>
        <span>or {installments} x</span>
        <b>
          {currencyFormat}
          {formatPrice(installmentPrice, currencyId)}
        </b>
      </S.Installment>
    );
  }

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
  };

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Space') {
      addProduct({ ...product, quantity: 1 });
      openCart();
    }
  };

  return (
    <S.Container
      onKeyUp={handleAddProductWhenEnter}
      sku={sku}
      imageName={imageName}
      tabIndex={1}
    >
      {/* {isFreeShipping && <S.Stopper>Free shipping</S.Stopper>} */}
      <S.Image alt={title} />
      <S.Title>{title}</S.Title>
      {/* <S.Description>{description}</S.Description> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <div style={{ flex: 1 }}>
          <DropdownKotia
            title="ความหวาน"
            options={['100%', '75%', '50%', '25%', '0%']}
            onChange={(value: string) =>
              console.log('Current sweetness = ' + value)
            }
          />
        </div>
        <div style={{ flex: 1 }}>
          <DropdownKotia
            title="ระดับการคั่ว"
            options={['เข้ม', 'กลาง', 'อ่อน']}
            onChange={(value: string) =>
              console.log('Current Roaster = ' + value)
            }
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '20px',
          flexDirection: 'row',
          marginTop: '12px'
        }}
      >
         <KotiaToggle title='แก้วใหญ่' onChange={function (value: boolean): void {
          console.log("Current value toggle = " + value)
          setIsUpSize(value)
        } }></KotiaToggle>
        <S.Price>
          <S.Val>
            <small>{currencyFormat}</small>
            <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
            <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
          </S.Val>
          {productInstallment}
        </S.Price>
      </div>
      <S.BuyButton onClick={handleAddProduct} tabIndex={-1}>
        Add to cart
      </S.BuyButton>
    </S.Container>
  );
};

export default Product;

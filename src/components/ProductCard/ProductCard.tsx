import React from 'react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';
import Text from 'src/components/Text.tsx';
import VariantImg from 'src/assets/icons/radio_button_partial.svg';
import PlusSvg from 'src/assets/icons/plus.svg';
import FavoriteSvg from 'src/assets/icons/favorite.svg';
import BgDiscountSvg from 'src/assets/icons/bgdiscount.svg';
import {
  CART_QUERY_KEY,
  cartQuery,
  setItem,
} from 'src/domains/Cart/cart.query.ts';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: string;
  description: string | null;
  weight: string;
  price: string;
  unit: string;
};

const ProductCard = ({product}: {product: Product}) => {
  const queryClient = useQueryClient();
  const theme = useTheme() as WhiteTheme;
  const {data: cartData} = useQuery(cartQuery);
  const count: number = cartData?.[product.id]?.count || 0;
  const {mutate: cartMutation} = useMutation({
    mutationFn: ({price, count}: {price: number; count: number}) =>
      setItem(product.id, price, count),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY],
      }),
  });
  console.log(cartData);

  const price: number = parseInt(product.price);
  const onHandleAdd = () => {
    cartMutation({price, count: count + 1});
  };

  return (
    <div css={container}>
      <div css={discountWrapper}>
        <div
          css={css`
            position: absolute;
          `}>
          <Text type={'subscribe'}>20 %</Text>
        </div>
        <BgDiscountSvg />
      </div>
      <div css={imgBackground}>
        <img src={product.image} alt={'product'} css={imgStyles} />
      </div>
      <div css={wrapper}>
        <Text type={'h4'}>{product.name}</Text>
        <div css={textWrapper}>
          <Text type={'caption'}>
            Склад: прошутто, фета, моцарелла, каперси, орегано.
          </Text>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}>
          <div css={variantWrapper}>
            <div css={variantStyle({isActive: true})}>
              <VariantImg color={theme.colors.accent} />
              <Text type={'title'} color={theme.colors.accent}>
                30 см
              </Text>
            </div>
            <div css={variantStyle({isActive: false})}>
              <VariantImg color={theme.colors.textPrimary} />
              <Text type={'title'} color={theme.colors.textPrimary}>
                45 см
              </Text>
            </div>
          </div>
          <div css={weightWrapper}>
            <Text type={'title'} color={theme.colors.textPrimary}>
              {`${product.weight} ${product.unit}.`}
            </Text>
          </div>
        </div>
        <div css={priceAndButtonsWrapper}>
          <div css={pricesWrapper}>
            <div css={priceStyles}>
              <Text type={'h5'}>399 грн</Text>
            </div>
            <Text type={'h4'}>{product.price} грн</Text>
          </div>
          <div css={buttonWrapper}>
            <button css={addToFavorite}>
              <FavoriteSvg color={theme.colors.accent} />
            </button>
            <button css={addButton} onClick={onHandleAdd}>
              <PlusSvg color={theme.colors.textWhite} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const imgStyles = theme => css`
  width: 343px;
  height: 188px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: contain;
  background-color: ${theme.colors.backgroundImg};

  @media (min-width: ${theme.media.laptop}) {
    width: 318px;
    height: 250px;
  }
`;

const imgBackground = theme => css`
  background-color: ${theme.colors.backgroundImg};
`;

const container = theme => css`
  width: 343px;
  height: 382px;
  border-radius: 12px;
  border: 1px solid ${theme.colors.stroke};
  background-color: ${theme.colors.container};
  position: relative;
  @media (min-width: ${theme.media.laptop}) {
    width: 318px;
    height: 482px;
  }
`;

const wrapper = theme => css`
  margin: 15px;

  @media (min-width: ${theme.media.laptop}) {
    margin: 24px 16px;
  }
`;

const textWrapper = theme => css`
  margin-bottom: 12px;
  @media (min-width: ${theme.media.laptop}) {
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;

const variantWrapper = css`
  display: flex;
`;
const variantStyle =
  ({isActive}) =>
  theme => css`
    width: 81px;
    height: 29px;
    display: flex;
    ${isActive
      ? {
          border: `1px solid ${theme.colors.accent}`,
          borderRadius: '20px',
        }
      : null}
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    margin-right: 8px;

    @media (min-width: ${theme.media.laptop}) {
      height: 32px;
      width: 89px;
    }
  `;

const weightWrapper = css`
  opacity: 30%;
`;

const priceAndButtonsWrapper = theme => css`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  @media (min-width: ${theme.media.laptop}) {
    margin-top: 17px;
  }
`;

const pricesWrapper = css`
  display: flex;
  flex-direction: column;
`;

const priceStyles = css`
  opacity: 30%;
  text-decoration: line-through;
`;

const buttonWrapper = css`
  display: flex;
  width: 104px;
  justify-content: space-between;
`;

const addButton = theme => css`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 6px;
  background-color: ${theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: ${theme.media.laptop}) {
    width: 48px;
    height: 48px;
  }
`;

const addToFavorite = theme => css`
  width: 44px;
  height: 44px;
  svg {
    width: 20px;
    height: 20px;
  }
  border: 1px solid ${theme.colors.stroke};
  border-radius: 6px;
  display: flex;
  background-color: ${theme.colors.container};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: ${theme.media.laptop}) {
    width: 48px;
    height: 48px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const discountWrapper = css`
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProductCard;

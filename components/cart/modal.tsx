'use client';

import { Dialog, Transition } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import LoadingDots from 'components/loading-dots';
import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import { createUrl } from 'lib/utils';
import { Coffee, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { createCartAndSetCookie, redirectToCheckout } from './actions';
import { useCart } from './cart-context';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import OpenCart from './open-cart';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal() {
  const { cart, isOpen, openCart, closeCart, updateCartItem } = useCart();
  const quantityRef = useRef(cart?.totalQuantity);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    // Ouvrir automatiquement le panier quand la quantité change
    if (cart?.totalQuantity && cart.totalQuantity !== quantityRef.current) {
      openCart();
      quantityRef.current = cart.totalQuantity;
    }
  }, [cart?.totalQuantity, openCart]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col bg-white p-6 shadow-xl md:w-[380px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#2C2C2C]">Mon Panier</h2>
                <button 
                  aria-label="Close cart" 
                  onClick={closeCart}
                  className="w-8 h-8 flex items-center justify-center hover:bg-[#006B3F]/10 rounded-full transition-colors text-gray-500 hover:text-[#006B3F]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!cart || cart.lines.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#006B3F]/10 flex items-center justify-center mb-4">
                    <Coffee className="w-8 h-8 text-[#006B3F]" />
                  </div>
                  <p className="text-xl font-serif font-bold text-[#2C2C2C] mb-2">
                    Votre panier est vide
                  </p>
                  <p className="text-gray-500 text-center">
                    Découvrez nos cafés d'exception et commencez votre commande
                  </p>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-auto">
                    <ul className="space-y-6">
                      {cart.lines
                        .sort((a, b) =>
                          a.merchandise.product.title.localeCompare(b.merchandise.product.title)
                        )
                        .map((item, i) => {
                          const merchandiseSearchParams = {} as MerchandiseSearchParams;

                          item.merchandise.selectedOptions.forEach(({ name, value }) => {
                            if (value !== DEFAULT_OPTION) {
                              merchandiseSearchParams[name.toLowerCase()] = value;
                            }
                          });

                          const merchandiseUrl = createUrl(
                            `/product/${item.merchandise.product.handle}`,
                            new URLSearchParams(merchandiseSearchParams)
                          );

                          return (
                            <li
                              key={i}
                              className="flex gap-4 bg-[#006B3F]/5 rounded-xl p-4 relative group"
                            >
                              <button
                                onClick={() => updateCartItem(item.merchandise.id, 'delete')}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#006B3F] hover:text-white"
                              >
                                <X className="w-4 h-4" />
                              </button>
                              
                              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-white">
                                {item.merchandise.product.featuredImage ? (
                                  <Image
                                    className="h-full w-full object-cover"
                                    width={80}
                                    height={80}
                                    alt={
                                      item.merchandise.product.featuredImage.altText ||
                                      item.merchandise.product.title
                                    }
                                    src={item.merchandise.product.featuredImage.url}
                                  />
                                ) : (
                                  <div className="h-full w-full flex items-center justify-center">
                                    <Coffee className="w-8 h-8 text-[#006B3F]/30" />
                                  </div>
                                )}
                              </div>
                              
                              <div className="flex flex-1 flex-col">
                                <Link
                                  href={merchandiseUrl}
                                  onClick={closeCart}
                                  className="text-[#2C2C2C] font-medium hover:text-[#006B3F] transition-colors"
                                >
                                  {item.merchandise.product.title}
                                </Link>
                                
                                {item.merchandise.title !== DEFAULT_OPTION && (
                                  <p className="text-sm text-gray-500 mt-1">
                                    {item.merchandise.title}
                                  </p>
                                )}
                                
                                <div className="flex items-center justify-between mt-2">
                                  <div className="flex items-center space-x-2 bg-white rounded-full border border-[#006B3F]/10">
                                    <EditItemQuantityButton
                                      item={item}
                                      type="minus"
                                      optimisticUpdate={updateCartItem}
                                    />
                                    <span className="w-8 text-center text-sm">
                                      {item.quantity}
                                    </span>
                                    <EditItemQuantityButton
                                      item={item}
                                      type="plus"
                                      optimisticUpdate={updateCartItem}
                                    />
                                  </div>
                                  <Price
                                    className="text-[#006B3F] font-medium"
                                    amount={item.cost.totalAmount.amount}
                                    currencyCode={item.cost.totalAmount.currencyCode}
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="bg-[#006B3F]/5 rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Sous-total</span>
                        <Price
                          className="text-[#2C2C2C] font-medium"
                          amount={cart.cost.subtotalAmount.amount}
                          currencyCode={cart.cost.subtotalAmount.currencyCode}
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Taxes</span>
                        <Price
                          className="text-[#2C2C2C] font-medium"
                          amount={cart.cost.totalTaxAmount.amount}
                          currencyCode={cart.cost.totalTaxAmount.currencyCode}
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Livraison</span>
                        <span className="text-[#2C2C2C] font-medium">Calculé à la caisse</span>
                      </div>
                      <div className="pt-3 border-t border-[#006B3F]/10">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-serif font-bold text-[#2C2C2C]">Total</span>
                          <Price
                            className="text-lg font-serif font-bold text-[#006B3F]"
                            amount={cart.cost.totalAmount.amount}
                            currencyCode={cart.cost.totalAmount.currencyCode}
                          />
                        </div>
                      </div>
                    </div>

                    <form action={redirectToCheckout}>
                      <CheckoutButton />
                    </form>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

function CheckoutButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full h-12 rounded-xl flex items-center justify-center gap-2 text-base font-medium bg-[#006B3F] text-white hover:bg-[#005432] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <LoadingDots className="bg-white" />
      ) : (
        <>
          <ShoppingCartIcon className="w-5 h-5" />
          <span>Procéder au paiement</span>
        </>
      )}
    </button>
  );
}

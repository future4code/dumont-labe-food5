import React from 'react'

function CartPage() {

    return (
        <div>
            <div>
                Endereço de entrega
                <p>Rua Alessandra Viera, 42</p>
            </div>
            <div>
                Carrinho vazio
            </div>
            <div>
                SUBTOTAL
                <p>Frete R$0,00</p>
                <p> R$ 00,00</p>
            </div>
            <div>
                Forma de pagamento
                <hr />
                <label>
                    <input type="radio" />
                 Dinheiro
                </label>
                <label>
                    <input type="radio" />
                 Cartão de crédito
                </label>
            </div>
            <button>Confirmar</button>
        </div>
    )
}

export default CartPage
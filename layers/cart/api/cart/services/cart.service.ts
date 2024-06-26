import { useApi } from '@base/composables/api/useApi'
import type { CartAddForm } from '@cart/models/cart/add/cartAddForm.model'
import type { CartAddBulkForm } from '@cart/models/cart/add-bulk/cartAddBulkForm.model'
import { CartTransformer } from '@cart/models/cart/cart.transformer'
import type { Cart } from '@cart/models/cart/get/cart.model'
import { cartDtoSchema } from '@cart/models/cart/get/cartDto.model'
import type { CartRemoveForm } from '@cart/models/cart/remove/cartRemoveForm.model'
import type { CartUpdateForm } from '@cart/models/cart/update/cartUpdateForm.model'

export class CartService {
  static async add(addForm: CartAddForm): Promise<Cart> {
    const api = useApi()
    const data = await api.post({
      body: CartTransformer.toAddDto(addForm),
      responseSchema: cartDtoSchema,
      url: `/cart/${addForm.cartId}/items`,
    })

    return CartTransformer.toCart(data)
  }

  static async addBulk(addForm: CartAddBulkForm): Promise<Cart> {
    const api = useApi()
    const data = await api.post({
      body: CartTransformer.toAddBulkDto(addForm),
      responseSchema: cartDtoSchema,
      url: `/cart/${addForm.cartId}/items/bulk`,
    })

    return CartTransformer.toCart(data)
  }

  static async get(): Promise<Cart> {
    const api = useApi()
    const data = await api.get({
      responseSchema: cartDtoSchema,
      url: `/cart`,
    })

    return CartTransformer.toCart(data)
  }

  static async remove(removeForm: CartRemoveForm): Promise<Cart> {
    const api = useApi()
    const data = await api.delete({
      responseSchema: cartDtoSchema,
      url: `/cart/${removeForm.cartId}/items/${removeForm.orderProductId}`,
    })

    return CartTransformer.toCart(data)
  }

  static async update(updateForm: CartUpdateForm): Promise<Cart> {
    const api = useApi()
    const data = await api.post({
      body: CartTransformer.toUpdateDto(updateForm),
      responseSchema: cartDtoSchema,
      url: `/cart/${updateForm.cartId}/items/${updateForm.orderProductId}`,
    })

    return CartTransformer.toCart(data)
  }
}
